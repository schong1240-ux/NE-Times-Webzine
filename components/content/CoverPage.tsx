import React from 'react';
import { SectionType } from '../../types';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

interface CoverPageProps {
  onNavigate: (section: SectionType) => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header / Masthead */}
      <div className="border-b-4 border-ne-dark pb-6 mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <div className="flex items-center space-x-2 text-ne-red font-bold text-sm tracking-widest uppercase mb-1">
             <span className="w-2 h-2 bg-ne-red rounded-full"></span>
             <span>Special Edition</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-ne-dark leading-none">
            NE TIMES
          </h1>
          <p className="text-lg md:text-xl font-serif italic text-gray-500 mt-2">
            Chinese Education Webzine &middot; Vol.19
          </p>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-4xl font-black text-gray-200">2025</div>
           <div className="font-bold text-ne-dark text-lg">JANUARY / ISSUE 01</div>
        </div>
      </div>

      {/* Main Feature Area */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Main Story (Left/Top) */}
        <div 
          className="lg:col-span-8 relative rounded-3xl overflow-hidden cursor-pointer group shadow-xl h-[500px]"
          onClick={() => onNavigate(SectionType.NEWS)}
        >
          <img 
            src="https://picsum.photos/seed/shanghai/1200/800" 
            alt="Shanghai Night" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex items-center space-x-2 mb-4">
               <span className="bg-ne-red text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">Cover Story</span>
               <span className="text-gray-300 text-xs font-bold flex items-center"><TrendingUp size={12} className="mr-1"/> HOT ISSUE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
              요즘 중국은...<br/>
              <span className="text-ne-accent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">DeepSeek</span>의 돌풍
            </h2>
            <p className="text-gray-200 text-lg mb-6 line-clamp-2 md:w-3/4">
              챗GPT 이후 또 하나의 대표적인 AI 서비스로 자리 잡은 딥시크(DeepSeek).
              출시 20일 만에 일간 사용자 2천만 명을 돌파하며 전 세계를 강타하고 있다.
            </p>
            <div className="flex items-center text-white font-bold group-hover:text-ne-accent transition-colors">
              <span className="border-b-2 border-current pb-1">전체 기사 읽기</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Sub Stories (Right/Bottom) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex-1 flex flex-col justify-center hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => onNavigate(SectionType.LANGUAGE)}>
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                 <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">식당 이름이 이렇게 많아?</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                 餐厅, 食堂, 饭店, 酒店... 비슷해 보이지만 쓰임새가 다른 중국어 단어 완벽 정리!
              </p>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-auto">Language &middot; p.03</div>
           </div>

           <div className="bg-ne-dark text-white p-6 rounded-3xl shadow-lg flex-1 flex flex-col justify-center cursor-pointer group relative overflow-hidden"
                onClick={() => onNavigate(SectionType.CULTURE)}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <span className="text-9xl font-serif">京</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">전통 경극의 현대적 변신</h3>
              <p className="text-sm text-gray-300 line-clamp-2 mb-4 relative z-10">
                 노래, 대사, 연기, 무술이 어우러진 종합 예술. 젊은 층을 사로잡기 위한 새로운 시도들.
              </p>
              <div className="flex items-center text-sm font-bold text-ne-accent mt-auto relative z-10">
                 <span>문화 산책</span> <ArrowRight size={16} className="ml-2" />
              </div>
           </div>

           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex-1 flex flex-col justify-center hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => onNavigate(SectionType.SOCIETY)}>
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-xl font-bold text-gray-900 group-hover:text-ne-red transition-colors">김치 vs 파오차이</h3>
                 <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-full font-bold">ISSUE</span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                 발효 과학 김치와 절임 음식 파오차이의 결정적 차이, 그리고 '씬치'의 등장.
              </p>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-auto">Society &middot; p.08</div>
           </div>
        </div>
      </div>
      
      {/* Ticker / Footer */}
      <div className="mt-8 border-t-2 border-gray-100 pt-6">
         <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-400 text-xs font-medium uppercase tracking-widest">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
               <span>Publisher: NE N-Eungnyule</span>
               <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
               <span>Editor: S.C. Hong</span>
            </div>
            <div className="flex space-x-2">
               <span>www.neteacher.co.kr</span>
            </div>
         </div>
      </div>
    </div>
  );
};