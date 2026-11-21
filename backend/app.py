"""
FastAPI REST Server for SchemeSetu AI - High-Scale 5,093+ Mass Schemes Discovery Engine
"""
from fastapi import FastAPI, HTTPException, Query, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
import json
import os
import sqlite3
import urllib.request
import urllib.parse
import re

from agent_orchestrator import AgentOrchestrator
from bhashini_service import BhashiniService
from vector_rag import VectorRAGStore
from bot_qa_engine import BotQAEngine

app = FastAPI(
    title="SchemeSetu AI Backend API",
    description="Mass Government Welfare Scheme Discovery & Hybrid Matching Engine (5,093+ Schemes)",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

orchestrator = AgentOrchestrator()
bhashini = BhashiniService()
rag_store = VectorRAGStore()
bot_engine = BotQAEngine()

DB_SQLITE_PATH = os.path.join(os.path.dirname(__file__), "schemes_database.db")

def get_db():
    conn = sqlite3.connect(DB_SQLITE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

class UserProfile(BaseModel):
    name: Optional[str] = "Citizen"
    age: int = 35
    income: Optional[int] = None
    annual_income: Optional[int] = None
    category: str = "OBC"
    gender: str = "Female"
    occupation: str = "Women Entrepreneur"
    state: str = "Maharashtra"
    has_land: Optional[bool] = False
    land_holding_acres: Optional[float] = 0.0
    education: Optional[str] = "10th Pass"
    marital_status: Optional[str] = "Married"
    disability_status: Optional[bool] = False

class VoiceInputRequest(BaseModel):
    transcript: str
    language: Optional[str] = "hi"

class ClauseSearchRequest(BaseModel):
    query: str
    scheme_id: Optional[str] = None
    top_k: Optional[int] = 3

class BotChatRequest(BaseModel):
    query: str
    language: Optional[str] = "en"
    profile: Optional[Dict[str, Any]] = None
    last_scheme_id: Optional[str] = None

@app.get("/api/health")
def health_check():
    return {
        "status": "ok", 
        "service": "SchemeSetu AI", 
        "version": "2.0.0",
        "total_schemes": len(orchestrator.schemes)
    }

@app.get("/api/schemes/stats")
def get_schemes_stats():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT COUNT(*) FROM schemes")
    total = cur.fetchone()[0]
    
    cur.execute("SELECT COUNT(*) FROM schemes WHERE level = 'Central'")
    central = cur.fetchone()[0]
    
    cur.execute("SELECT COUNT(*) FROM schemes WHERE level = 'State'")
    state = cur.fetchone()[0]
    
    cur.execute("SELECT category, COUNT(*) as cnt FROM schemes GROUP BY category ORDER BY cnt DESC")
    cats = [{"category": row["category"], "count": row["cnt"]} for row in cur.fetchall()]
    
    cur.execute("SELECT state, COUNT(*) as cnt FROM schemes WHERE level = 'State' GROUP BY state ORDER BY cnt DESC")
    states = [{"state": row["state"], "count": row["cnt"]} for row in cur.fetchall()]
    
    conn.close()
    return {
        "total_schemes": total,
        "central_schemes": central,
        "state_schemes": state,
        "total_states": len(states),
        "category_distribution": cats,
        "state_distribution": states
    }

@app.get("/api/schemes/search")
def search_schemes(
    q: Optional[str] = None,
    category: Optional[str] = None,
    occupation: Optional[str] = None,
    state: Optional[str] = None,
    level: Optional[str] = None,
    page: int = Query(1, ge=1),
    limit: int = Query(24, ge=1, le=100)
):
    # If a natural language query is provided, route through the 4-layer AI engine
    if q and q.strip():
        base_profile = {}
        if state and state != "ALL":
            base_profile["state"] = state
        if occupation and occupation != "ALL":
            base_profile["occupation"] = occupation
            
        search_res = orchestrator.search(q.strip(), profile=base_profile, top_k=100)
        all_schemes = search_res.get("schemes", [])
        
        if level and level != "ALL":
            all_schemes = [s for s in all_schemes if s.get("level") == level]
        if category and category != "ALL":
            all_schemes = [s for s in all_schemes if s.get("category") == category]
            
        total_count = len(all_schemes)
        offset = (page - 1) * limit
        paged_schemes = all_schemes[offset:offset + limit]
        total_pages = (total_count + limit - 1) // limit if total_count > 0 else 1
        
        return {
            "total": total_count,
            "page": page,
            "limit": limit,
            "total_pages": total_pages,
            "schemes": paged_schemes,
            "parsed_profile": search_res.get("parsed_profile"),
            "detected_intent": search_res.get("detected_intent"),
            "clean_tokens": search_res.get("clean_tokens"),
            "execution_trace": search_res.get("execution_trace")
        }

    conn = get_db()
    cur = conn.cursor()
    
    where_clauses = []
    params = []
        
    if category and category != "ALL":
        where_clauses.append("s.category = ?")
        params.append(category)

    if occupation and occupation != "ALL":
        if occupation == "Farmer":
            where_clauses.append("(s.category LIKE '%Agriculture%' OR s.raw_json LIKE '%\"Farmer\"%' OR s.raw_json LIKE '%\"Cultivator\"%' OR s.raw_json LIKE '%\"Smallholder\"%')")
        elif occupation == "Artisan":
            where_clauses.append("(s.category LIKE '%Textile%' OR s.category LIKE '%Handloom%' OR s.raw_json LIKE '%\"Artisan\"%' OR s.raw_json LIKE '%\"Weaver\"%' OR s.raw_json LIKE '%\"Craftsperson\"%')")
        elif occupation == "Street Vendor":
            where_clauses.append("(s.raw_json LIKE '%\"Street Vendor\"%' OR s.raw_json LIKE '%\"Hawker\"%')")
        elif occupation == "Student":
            where_clauses.append("(s.category LIKE '%Education%' OR s.raw_json LIKE '%\"Student\"%')")
        elif occupation == "Women Entrepreneur":
            where_clauses.append("(s.category LIKE '%Women%' OR s.raw_json LIKE '%\"Women Entrepreneur\"%' OR s.raw_json LIKE '%\"Homemaker\"%')")
        elif occupation == "MSME Owner":
            where_clauses.append("(s.category LIKE '%MSME%' OR s.raw_json LIKE '%\"MSME Owner\"%' OR s.raw_json LIKE '%\"Entrepreneur\"%')")
        else:
            where_clauses.append("s.raw_json LIKE ?")
            params.append(f'%"{occupation}"%')
        
    if state and state != "ALL":
        where_clauses.append("(s.state = ? OR s.level = 'Central')")
        params.append(state)
        
    if level and level != "ALL":
        where_clauses.append("s.level = ?")
        params.append(level)
        
    where_sql = ("WHERE " + " AND ".join(where_clauses)) if where_clauses else ""
    
    # Count total
    count_sql = f"SELECT COUNT(*) FROM schemes s {where_sql}"
    cur.execute(count_sql, params)
    total_count = cur.fetchone()[0]
    
    # Paginate
    offset = (page - 1) * limit
    select_sql = f"""
    SELECT s.raw_json 
    FROM schemes s 
    {where_sql} 
    ORDER BY (CASE WHEN s.id LIKE 'pm%' OR s.id LIKE 'standup%' THEN 0 ELSE 1 END), s.name ASC
    LIMIT ? OFFSET ?
    """
    cur.execute(select_sql, params + [limit, offset])
    rows = cur.fetchall()
    
    schemes = [json.loads(row["raw_json"]) for row in rows]
    total_pages = (total_count + limit - 1) // limit if total_count > 0 else 1
    
    conn.close()
    return {
        "total": total_count,
        "page": page,
        "limit": limit,
        "total_pages": total_pages,
        "schemes": schemes
    }

@app.get("/api/schemes")
def get_schemes(limit: Optional[int] = None):
    if limit:
        return orchestrator.schemes[:limit]
    return orchestrator.schemes

@app.get("/api/schemes/{scheme_id}")
def get_scheme_by_id(scheme_id: str):
    if scheme_id in orchestrator.scheme_lookup:
        return orchestrator.scheme_lookup[scheme_id]
    raise HTTPException(status_code=404, detail="Scheme not found")

@app.post("/api/match")
def match_schemes(profile: UserProfile):
    try:
        p_dict = profile.dict()
        if p_dict.get("income") is None and p_dict.get("annual_income") is not None:
            p_dict["income"] = p_dict["annual_income"]
        elif p_dict.get("income") is None:
            p_dict["income"] = 150000
        result = orchestrator.orchestrate_discovery(p_dict)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/rag/search")
def search_rag_clauses(req: ClauseSearchRequest):
    clauses = rag_store.search_clauses(req.query, req.scheme_id, req.top_k)
    return {"query": req.query, "results": clauses}

@app.post("/api/voice/parse")
def parse_voice_speech(req: VoiceInputRequest):
    extracted = bhashini.parse_voice_transcript(req.transcript, req.language)
    return {
        "original_transcript": req.transcript,
        "language": req.language,
        "extracted_profile": extracted
    }

@app.post("/api/bot/chat")
def bot_chat(req: BotChatRequest):
    try:
        response = bot_engine.process_query(
            query=req.query,
            language=req.language or "en",
            profile=req.profile,
            last_scheme_id=req.last_scheme_id
        )
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

_tts_cache: Dict[str, bytes] = {}

@app.get("/api/tts")
def text_to_speech(text: str = Query(..., description="Text to synthesize"), lang: str = Query("en", description="Language code (e.g. te, hi, kn, ta, en)")):
    """
    High-fidelity Indic Text-To-Speech endpoint.
    Synthesizes native speech for Telugu (te), Hindi (hi), Kannada (kn), Tamil (ta), Malayalam (ml),
    Marathi (mr), Gujarati (gu), Bengali (bn), Punjabi (pa), and English (en).
    """
    try:
        clean_input = text.strip()
        if not clean_input:
            raise HTTPException(status_code=400, detail="Text cannot be empty")
            
        cache_key = f"{lang}:{clean_input[:200]}"
        headers = {
            "Accept-Ranges": "bytes",
            "Content-Type": "audio/mpeg",
            "Cache-Control": "public, max-age=86400",
            "Access-Control-Allow-Origin": "*"
        }
        if cache_key in _tts_cache:
            return Response(content=_tts_cache[cache_key], media_type="audio/mpeg", headers=headers)
            
        currency_map = {
            'te': 'రూపాయలు ', 'hi': 'रुपये ', 'kn': 'ರೂಪಾಯಿ ', 'ta': 'ரூபாய் ',
            'ml': 'രൂപ ', 'bn': 'টাকা ', 'mr': 'रुपये ', 'gu': 'રૂપિયા ', 'pa': 'ਰੁਪਏ ', 'en': 'Rupees '
        }
        cur = currency_map.get(lang, 'Rupees ')
        t = clean_input.replace('₹', cur)
        # Remove emojis and non-alphanumeric unicode symbols
        t = re.sub(r'[\U00010000-\U0010ffff]', '', t)
        # Remove markdown, links, bullets
        t = re.sub(r'https?://\S+', '', t)
        t = re.sub(r'[*#_`~>•|\t]', ' ', t)
        t = re.sub(r'\s+', ' ', t).strip()
        
        # Split into sentence clauses
        raw_sentences = re.split(r'[\n\.\?!;:]+', t)
        sentences = [s.strip() for s in raw_sentences if len(s.strip()) > 2]
        if not sentences:
            sentences = [t[:150]]
            
        # Select first 3-4 concise sentences (up to ~450 chars) for fast real-time response
        selected = []
        total_len = 0
        for s in sentences:
            if total_len + len(s) > 450 and selected:
                break
            selected.append(s[:180])
            total_len += len(s)
            if len(selected) >= 4:
                break
                
        audio_data = bytearray()
        for s in selected:
            q = urllib.parse.quote(s)
            url = f"https://translate.google.com/translate_tts?ie=UTF-8&tl={lang}&client=tw-ob&q={q}"
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, timeout=5) as resp:
                audio_data.extend(resp.read())
                
        result_bytes = bytes(audio_data)
        if len(_tts_cache) > 500:
            _tts_cache.clear()
        _tts_cache[cache_key] = result_bytes
        
        return Response(content=result_bytes, media_type="audio/mpeg", headers=headers)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"TTS synthesis error: {str(e)}")

@app.get("/api/languages")
def get_languages():
    return bhashini.get_supported_languages()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
