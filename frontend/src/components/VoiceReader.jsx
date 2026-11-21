import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { bhashini } from '../services/bhashiniService';

export default function VoiceReader({ text, currentLang = 'en', label }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
    }
  }, []);

  const handleToggleSpeech = (e) => {
    e.stopPropagation();
    if (!isSupported) return;

    if (isPlaying) {
      bhashini.stopSpeaking();
      setIsPlaying(false);
      return;
    }

    bhashini.speak(
      text,
      currentLang,
      () => setIsPlaying(true),
      () => setIsPlaying(false),
      () => setIsPlaying(false)
    );
  };

  if (!isSupported) return null;

  const readingLabel = bhashini.t('reading', currentLang) || 'Reading...';
  const displayLabel = label || bhashini.t('audioListen', currentLang) || 'Listen';
  const stopLabel = bhashini.t('audioStop', currentLang) || 'Stop';

  return (
    <button
      onClick={handleToggleSpeech}
      type="button"
      title={isPlaying ? stopLabel : displayLabel}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all select-none cursor-pointer ${
        isPlaying
          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 animate-pulse font-extrabold'
          : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60'
      }`}
    >
      {isPlaying ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-950 flex-shrink-0" />
          <span className="flex items-center gap-1">
            <span>{readingLabel}</span>
            <span className="flex gap-0.5">
              <span className="w-1 h-2.5 bg-slate-950 animate-bounce"></span>
              <span className="w-1 h-3.5 bg-slate-950 animate-bounce delay-75"></span>
              <span className="w-1 h-2 bg-slate-950 animate-bounce delay-150"></span>
            </span>
          </span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span>{displayLabel}</span>
        </>
      )}
    </button>
  );
}

