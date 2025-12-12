import React from 'react';
import { Volume2, Square, Loader2 } from 'lucide-react';
import { useTTS } from '../hooks/useTTS';

export const SectionHeader: React.FC<{ title: string; subtitle?: string; color?: string; audioContent?: string }> = ({ title, subtitle, color = "text-ne-red", audioContent }) => {
  const { speak, stop, isPlaying, isLoading } = useTTS();

  return (
    <div className="mb-8 border-b-2 border-gray-100 pb-4">
      {subtitle && <span className={`block text-sm font-bold tracking-widest uppercase mb-1 ${color}`}>{subtitle}</span>}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">{title}</h2>
        
        {audioContent && (
          <button 
            onClick={() => isPlaying ? stop() : speak(audioContent)}
            disabled={isLoading}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold transition-all shrink-0 w-fit
              ${isPlaying 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-800 hover:text-white'
              }`}
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : isPlaying ? (
              <Square size={18} fill="currentColor" />
            ) : (
              <Volume2 size={18} />
            )}
            <span>{isLoading ? '로딩 중...' : isPlaying ? '멈추기' : '기사 듣기'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export const VocabCard: React.FC<{ word: string; pinyin: string; meaning: string; description: string; imageUrl?: string }> = ({ word, pinyin, meaning, description, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
    {imageUrl && (
      <div className="h-32 bg-gray-100 overflow-hidden relative">
         <img src={imageUrl} alt={word} className="w-full h-full object-cover" />
         <div className="absolute bottom-0 left-0 bg-ne-red text-white text-xs px-2 py-1 font-bold">{word}</div>
      </div>
    )}
    <div className="p-5">
      <div className="flex items-baseline space-x-2 mb-2">
        <h3 className="text-xl font-bold text-ne-dark">{word}</h3>
        <span className="text-sm text-gray-500 font-serif italic">{pinyin}</span>
      </div>
      <p className="text-sm font-bold text-ne-red mb-3">{meaning}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const InfoBox: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-ne-bg rounded-lg p-6 border border-blue-100 my-6">
    <h4 className="font-bold text-ne-dark mb-3 flex items-center">
      <span className="w-1 h-4 bg-ne-dark mr-2 rounded-full"></span>
      {title}
    </h4>
    <div className="text-sm text-gray-700 space-y-2">
      {children}
    </div>
  </div>
);