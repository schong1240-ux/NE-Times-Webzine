import React from 'react';
import { SectionType } from '../../types';
import { ArrowRight } from 'lucide-react';

interface CoverPageProps {
  onNavigate: (section: SectionType) => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black">NE TIMES</h1>
          <p className="text-xl font-serif italic text-gray-600 mt-2">NE 능률 중국어 신문 第19期</p>
        </div>
        <div className="text-right hidden md:block">
           <div className="bg-ne-red text-white text-xs font-bold px-2 py-1 inline-block mb-1">PDF AVAILABLE</div>
           <p className="font-bold">2025年 1号</p>
        </div>
      </div>

      {/* Main Headline */}
      <div className="grid md:grid-cols-2 gap-8">
        <div 
          className="relative bg-gray-900 rounded-2xl overflow-hidden text-white p-8 md:p-12 flex flex-col justify-end min-h-[400px] cursor-pointer group"
          onClick={() => onNavigate(SectionType.NEWS)}
        >
          <img 
            src="https://picsum.photos/800/600?grayscale&blur=2" 
            alt="Shanghai Skyline" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="relative z-10">
            <span className="bg-ne-red px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 inline-block">Headline News</span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">요즘 중국은...<br/>DeepSeek의 돌풍</h2>
            <p className="text-gray-200 mb-6 line-clamp-2">
              챗GPT 이후 또 하나의 대표적인 AI 서비스로 자리 잡은 딥시크(DeepSeek).
              출시 20일 만에 일간 사용자 2천만 명을 돌파하며 전 세계를 강타하고 있다.
            </p>
            <button className="flex items-center space-x-2 text-sm font-bold border-b border-white pb-1 w-fit hover:text-ne-red hover:border-ne-red transition-colors">
              <span>기사 읽기</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Sub Stories List */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-2 bg-ne-red rounded-full mr-2"></span>
            이번 호 주요 기사
          </h3>
          <ul className="space-y-6">
            <li 
              className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0"
              onClick={() => onNavigate(SectionType.LANGUAGE)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-gray-400 mb-1 block">한·중·미·다 (2-3p)</span>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-ne-red transition-colors">한국어와 중국어 미묘하게 다르네!</h4>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">식당을 뜻하는 다양한 단어: 餐厅, 食堂, 饭店...</p>
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-ne-red mt-2" />
              </div>
            </li>
            
            <li 
              className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0"
              onClick={() => onNavigate(SectionType.NEWS)}
            >
               <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-gray-400 mb-1 block">발전하는 중국 (4-6p)</span>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-ne-red transition-colors">중국의 AI 굴기(崛起)</h4>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">전 세계를 강타한 중국의 AI 기술력과 빅테크 기업들</p>
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-ne-red mt-2" />
              </div>
            </li>

            <li 
              className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0"
              onClick={() => onNavigate(SectionType.CULTURE)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-gray-400 mb-1 block">전통과 현대 (8-11p)</span>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-ne-red transition-colors">경극의 도전 & 또우화의 맛</h4>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">전통 예술 경극의 현대화와 대만 디저트 또우화</p>
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-ne-red mt-2" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Ticker */}
      <div className="bg-ne-red text-white p-4 rounded-lg flex items-center justify-between">
         <span className="font-bold text-sm md:text-base">📢 NEWS FLASH</span>
         <div className="text-xs md:text-sm font-medium overflow-hidden whitespace-nowrap px-4">
            상하이 거리 한국 관광객 북적... 비자 면제 효과 톡톡 | 중국 Z세대의 상실 문화 '상문화' 확산 | Suno AI로 만드는 우리반 C-pop
         </div>
      </div>
    </div>
  );
};