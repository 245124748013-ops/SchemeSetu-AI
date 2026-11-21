import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Sparkles, 
  User, 
  Coins, 
  Volume2,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { bhashini, SUPPORTED_LANGUAGES } from '../services/bhashiniService';

export const INDIAN_STATES = [
  'National / All India',
  'Andhra Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Delhi',
  'Gujarat',
  'Haryana',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Tamil Nadu',
  'Telangana',
  'Uttar Pradesh',
  'West Bengal'
];

export const OCCUPATIONS = [
  'Women Entrepreneur',
  'Farmer',
  'Artisan',
  'Street Vendor',
  'MSME Owner',
  'Student',
  'Self Employed',
  'Weaver',
  'Unemployed'
];

export default function ProfileForm({ profile, setProfile, onRunDiscovery, isAnalyzing, currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const [isListening, setIsListening] = useState(false);
  const [speechTranscript, setSpeechTranscript] = useState('');
  const [voiceLang, setVoiceLang] = useState(currentLang || 'hi');
  const [recognition, setRecognition] = useState(null);
  const [validationError, setValidationError] = useState('');

  // Conflict detection: Male citizen with Women Entrepreneur occupation
  const isMale = (profile?.gender === 'Male');
  const isWomenOcc = (profile?.occupation === 'Women Entrepreneur' || (profile?.occupation || '').toLowerCase().includes('women'));
  const hasGenderConflict = isMale && isWomenOcc;

  // Age validation: must be a valid number >= 10 and <= 120
  const rawAge = profile?.age;
  const parsedAge = rawAge === '' || rawAge === null || rawAge === undefined ? NaN : Number(rawAge);
  const hasInvalidAge = Number.isNaN(parsedAge) || parsedAge < 10 || parsedAge > 120;

  useEffect(() => {
    setVoiceLang(currentLang);
  }, [currentLang]);

  useEffect(() => {
    if (hasInvalidAge) {
      setValidationError(`${t('invalidAgeTitle') || 'Invalid Age'}: ${t('invalidAgeMsg') || 'Age must be at least 10 years.'}`);
    } else if (hasGenderConflict) {
      setValidationError(t('genderOccupationMismatchMsg'));
    } else {
      setValidationError('');
    }
  }, [profile?.gender, profile?.occupation, profile?.age, currentLang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.continuous = false;
        recog.interimResults = true;
        
        const localeMap = {
          hi: 'hi-IN',
          te: 'te-IN',
          ta: 'ta-IN',
          mr: 'mr-IN',
          bn: 'bn-IN',
          gu: 'gu-IN',
          kn: 'kn-IN',
          pa: 'pa-IN',
          ml: 'ml-IN',
          en: 'en-IN'
        };
        recog.lang = localeMap[voiceLang] || 'hi-IN';

        recog.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map(res => res[0].transcript)
            .join('');
          setSpeechTranscript(transcript);

          const extracted = bhashini.parseVoiceSpeech(transcript);
          if (Object.keys(extracted).length > 0) {
            setProfile(prev => ({ ...prev, ...extracted }));
          }
        };

        recog.onend = () => {
          setIsListening(false);
        };

        setRecognition(recog);
      }
    }
  }, [voiceLang]);

  const toggleVoiceRecording = () => {
    if (!recognition) {
      // Simulate Voice Transcription with authentic regional language sentence
      setIsListening(true);
      setSpeechTranscript(t('listening'));

      const sampleVoiceByLang = {
        hi: "मेरा नाम सुमित्रा देवी है, उम्र 35 वर्ष, वार्षिक आय 1.2 लाख रुपये, मैं महिला उद्यमी हूं और उत्तर प्रदेश से हूं",
        kn: "ನನ್ನ ಹೆಸರು ಸುಮಿತ್ರಾ, ವಯಸ್ಸು 35 ವರ್ಷ, ವಾರ್ಷಿಕ ಆದಾಯ 1.2 ಲಕ್ಷ, ನಾನು ಮಹಿಳಾ ಉದ್ಯಮಿ",
        ml: "എന്റെ പേര് സുമിത്ര, പ്രായം 35 വയസ്സ്, വാർഷിക വരുമാനം 1.2 ലക്ഷം, വനിതാ സംരംഭകയാണ്",
        gu: "મારું નામ સુમિત્રા દેવી છે, ઉંમર 35 વર્ષ, વાર્ષિક આવક 1.2 લાખ, હું મહિલા ઉદ્યોગસાહસિક છું",
        pa: "ਮੇਰਾ ਨਾਮ ਸੁਮਿਤਰਾ ਦੇਵੀ ਹੈ, ਉਮਰ 35 ਸਾਲ, ਸਾਲਾਨਾ ਆਮਦਨ 1.2 ਲੱਖ, ਮੈਂ ਮਹਿਲਾ ਉੱਦਮੀ ਹਾਂ",
        te: "నా పేరు సుమిత్ర, వయస్సు 35 సంవత్సరాలు, వార్షిక ఆదాయం 1.2 లక్షలు, నేను మహిళా వ్యవస్థాపకురాలిని",
        ta: "என் பெயர் சுமித்ரா, வயது 35, ஆண்டு வருமானம் 1.2 லட்சம், நான் பெண் தொழில்முனைவோர்",
        mr: "माझे नाव सुमित्रा देवी आहे, वय 35 वर्षे, वार्षिक उत्पन्न 1.2 लाख, मी महिला उद्योजक आहे",
        bn: "আমার নাম সুমিত্রা দেবী, বয়স ৩৫ বছর, বার্ষিক আয় ১.২ লাখ, আমি মহিলা উদ্যোক্তা",
        en: "My name is Sumitra Devi, age 35, annual income 1.2 Lakhs, I am a women entrepreneur from UP"
      };

      const sampleSentence = sampleVoiceByLang[currentLang] || sampleVoiceByLang['hi'];
      
      setTimeout(() => {
        setSpeechTranscript(sampleSentence);
        const extracted = bhashini.parseVoiceSpeech(sampleSentence);
        setProfile(prev => ({
          ...prev,
          name: 'Sumitra Devi',
          age: 35,
          income: 120000,
          gender: 'Female',
          occupation: 'Women Entrepreneur',
          state: 'Uttar Pradesh',
          category: 'OBC',
          ...extracted
        }));
        setIsListening(false);
      }, 1500);
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setSpeechTranscript('');
      recognition.start();
      setIsListening(true);
    }
  };

  const handleChange = (field, value) => {
    setProfile(prev => {
      const updated = {
        ...prev,
        [field]: value
      };
      if (field === 'occupation' && value === 'Farmer') {
        if (!prev.land_holding_acres || prev.land_holding_acres === 0) {
          updated.land_holding_acres = 2.5;
          updated.has_land = true;
        }
      }
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasInvalidAge) {
      setValidationError(`${t('invalidAgeTitle') || 'Invalid Age'}: ${t('invalidAgeMsg') || 'Age must be at least 10 years.'}`);
      return;
    }
    if (hasGenderConflict) {
      setValidationError(t('genderOccupationMismatchMsg') || "Cannot proceed: Male applicants cannot select 'Women Entrepreneur'. Please select a valid occupation.");
      return;
    }
    setValidationError('');
    onRunDiscovery(profile);
  };

  return (
    <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-700/80 shadow-2xl space-y-6">
      
      {/* Header & Voice Studio */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <User className="w-6 h-6 text-amber-400" />
            {t('profileStudioTitle')}
          </h2>
          <p className="text-xs md:text-sm text-slate-400 pt-1">
            {t('profileStudioSub')}
          </p>
        </div>

        {/* Bhashini Voice Recording Pill */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleVoiceRecording}
            className={`px-4 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 transition-all shadow-lg ${
              isListening
                ? 'bg-red-500 text-white animate-pulse shadow-red-500/30'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            <span>{isListening ? t('listening') : t('speakProfile')}</span>
          </button>
        </div>
      </div>

      {/* Prominent Gender-Occupation Conflict Error Banner */}
      {hasGenderConflict && (
        <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-red-950/80 via-red-900/40 to-slate-900 border-2 border-red-500 shadow-xl shadow-red-950/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-shake">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40 flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 animate-pulse text-red-400" />
            </div>
            <div className="space-y-1">
              <div className="font-extrabold text-sm text-red-200 flex items-center gap-2">
                <span>{t('genderOccupationMismatchTitle')}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/30 text-red-200 font-bold border border-red-500/50">
                  {t('invalidSelection')}
                </span>
              </div>
              <p className="text-xs text-red-200/90 leading-relaxed">
                {t('genderOccupationMismatchMsg')}
              </p>
            </div>
          </div>

          {/* Quick Auto-Fix Actions */}
          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleChange('occupation', 'Self Employed')}
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer w-full sm:w-auto justify-center"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t('autoFixOccupation')}</span>
            </button>
            <button
              type="button"
              onClick={() => handleChange('gender', 'Female')}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all cursor-pointer whitespace-nowrap"
            >
              👩 {bhashini.getGenderName('Female', currentLang)}
            </button>
          </div>
        </div>
      )}

      {/* Prominent Invalid Age Error Banner */}
      {hasInvalidAge && (
        <div
          role="alert"
          data-testid="invalid-age-banner"
          className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-red-950/80 via-red-900/40 to-slate-900 border-2 border-red-500 shadow-xl shadow-red-950/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-shake"
        >
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40 flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 animate-pulse text-red-400" />
            </div>
            <div className="space-y-1">
              <div className="font-extrabold text-sm text-red-200 flex items-center gap-2">
                <span>{t('invalidAgeTitle') || 'Invalid Age'}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/30 text-red-200 font-bold border border-red-500/50">
                  {t('invalidSelection')}
                </span>
              </div>
              <p className="text-xs text-red-200/90 leading-relaxed">
                {t('invalidAgeMsg') || 'Age must be at least 10 years (valid range: 10–120 years).'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleChange('age', 18)}
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer w-full sm:w-auto justify-center"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t('autoFixAge') || 'Fix Age to 18 Yrs'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Voice Transcript Bar */}
      {speechTranscript && (
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3 text-xs text-amber-200">
          <Volume2 className="w-4 h-4 text-amber-400 flex-shrink-0 animate-bounce" />
          <div className="flex-1">
            <span className="font-bold text-amber-400">Bhashini Voice Input: </span>
            <span>"{speechTranscript}"</span>
          </div>
        </div>
      )}

      {/* Form Fields Grid */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('fullName')}</label>
            <input
              type="text"
              value={profile?.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs md:text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('age')}</label>
            <input
              type="number"
              max="120"
              aria-invalid={hasInvalidAge}
              data-testid="profile-age-input"
              value={profile?.age !== undefined && profile?.age !== null ? profile.age : 35}
              onChange={(e) => {
                const val = e.target.value;
                handleChange('age', val === '' ? '' : parseInt(val, 10));
              }}
              className={`w-full px-4 py-2.5 rounded-2xl bg-slate-900 border text-white text-xs md:text-sm focus:outline-none transition-colors ${
                hasInvalidAge
                  ? 'border-red-500 bg-red-950/30 focus:border-red-400 ring-1 ring-red-500/40'
                  : 'border-slate-800 focus:border-amber-400'
              }`}
            />
            {hasInvalidAge && (
              <p data-testid="invalid-age-error" className="text-[11px] font-bold text-red-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{t('invalidAgeTitle') || 'Invalid Age'}: {t('invalidAgeMsg') || 'Age must be at least 10 years.'}</span>
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('gender')}</label>
            <select
              value={profile?.gender || 'Male'}
              onChange={(e) => {
                const newGender = e.target.value;
                handleChange('gender', newGender);
              }}
              className={`w-full px-4 py-2.5 rounded-2xl bg-slate-900 border text-white text-xs md:text-sm focus:outline-none cursor-pointer ${
                hasGenderConflict ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-slate-800 focus:border-amber-400'
              }`}
            >
              <option value="Female">👩 {bhashini.getGenderName('Female', currentLang)}</option>
              <option value="Male">👨 {bhashini.getGenderName('Male', currentLang)}</option>
              <option value="Transgender">⚧️ {bhashini.getGenderName('Transgender', currentLang)}</option>
            </select>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('category')}</label>
            <select
              value={profile?.category || 'OBC'}
              onChange={(e) => handleChange('category', e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="General">General / Open</option>
              <option value="OBC">OBC (Other Backward Classes)</option>
              <option value="SC">SC (Scheduled Caste)</option>
              <option value="ST">ST (Scheduled Tribe)</option>
              <option value="EWS">EWS (Economically Weaker Section)</option>
              <option value="Minority">Minority Community</option>
            </select>
          </div>

          {/* Occupation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('occupation')}</label>
              {hasGenderConflict && (
                <span className="text-[10px] text-red-400 font-bold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> {t('invalidSelection')}
                </span>
              )}
            </div>
            <select
              value={profile?.occupation || (isMale ? 'Self Employed' : 'Women Entrepreneur')}
              onChange={(e) => handleChange('occupation', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-2xl bg-slate-900 border text-white text-xs md:text-sm focus:outline-none cursor-pointer ${
                hasGenderConflict ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-slate-800 focus:border-amber-400'
              }`}
            >
              {OCCUPATIONS.map(occ => {
                const isWomenOption = (occ === 'Women Entrepreneur');
                const isOptionDisabled = isMale && isWomenOption;
                const localizedName = bhashini.getOccupationName(occ, currentLang);
                return (
                  <option 
                    key={occ} 
                    value={occ}
                    disabled={isOptionDisabled}
                    className={isOptionDisabled ? 'text-red-400/60 bg-slate-950' : ''}
                  >
                    {localizedName} {isOptionDisabled ? `(${t('womenOnly')})` : ''}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Annual Income */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('annualIncome')}</label>
            <input
              type="number"
              step="10000"
              value={profile?.income || 120000}
              onChange={(e) => handleChange('income', parseInt(e.target.value, 10))}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* State of Residence */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('state')}</label>
            <select
              value={profile?.state || 'Haryana'}
              onChange={(e) => handleChange('state', e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {INDIAN_STATES.map(st => (
                <option key={st} value={st}>
                  {bhashini.getStateName(st, currentLang) || st}
                </option>
              ))}
            </select>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('education')}</label>
            <select
              value={profile?.education || '10th Pass'}
              onChange={(e) => handleChange('education', e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="Below 8th Standard">Below 8th Standard</option>
              <option value="8th Pass">8th Standard Pass</option>
              <option value="10th Pass">10th Standard Pass (Matric)</option>
              <option value="12th Pass">12th Standard Pass (Intermediate)</option>
              <option value="Graduate">Graduate / Degree Holder</option>
              <option value="Post Graduate">Post Graduate / Diploma</option>
            </select>
          </div>

          {/* Landholding (Acres) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t('landHolding')}</label>
            <input
              type="number"
              step="0.5"
              min="0"
              value={profile?.land_holding_acres || 0}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setProfile(prev => ({
                  ...prev,
                  land_holding_acres: val,
                  has_land: val > 0
                }));
              }}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

        </div>

        {/* Submit Discovery Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {hasInvalidAge ? (
            <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 animate-pulse">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{t('invalidAgeTitle') || 'Invalid Age'}: {t('invalidAgeMsg') || 'Age must be at least 10 years.'}</span>
            </div>
          ) : hasGenderConflict ? (
            <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 animate-pulse">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{t('genderOccupationMismatchTitle')}: {t('genderOccupationMismatchMsg')}</span>
            </div>
          ) : (
            <div className="text-xs text-slate-400">
              ⚡ {t('layerPipelineSub')}
            </div>
          )}

          <button
            type="submit"
            disabled={isAnalyzing || hasGenderConflict || hasInvalidAge}
            className={`px-8 py-3.5 rounded-2xl font-extrabold text-sm md:text-base shadow-xl flex items-center gap-2 transform active:scale-95 transition-all cursor-pointer ${
              (hasGenderConflict || hasInvalidAge)
                ? 'bg-red-950/80 text-red-300 border-2 border-red-500/80 shadow-red-950/50 cursor-not-allowed opacity-90'
                : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-amber-500/20'
            }`}
          >
            {hasInvalidAge ? (
              <>
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span>{t('invalidAgeTitle') || 'Invalid Age'}</span>
              </>
            ) : hasGenderConflict ? (
              <>
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span>{t('invalidSelection')}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>{isAnalyzing ? t('analyzingText') : t('runDiscoveryBtn')}</span>
              </>
            )}
          </button>
        </div>
      </form>

    </div>
  );
}
