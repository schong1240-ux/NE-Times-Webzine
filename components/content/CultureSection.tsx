import React from 'react';
import { SectionHeader } from '../ArticleParts';

export const CultureSection: React.FC = () => {
  const ttsText = `
    경극의 새로운 도전, 전통 예술과 현대화.
    경극은 노래, 대사, 연기, 무술의 4가지 요소가 결합된 중국의 종합 예술입니다.
    최근 경극은 현대적 요소와 접목되어 새로운 방식으로 발전하고 있습니다.
    경극에는 4대 배역이 있습니다. 남성 주인공인 생, 여성 역할인 단, 호걸이나 악역을 맡는 정, 그리고 코믹한 역할을 하는 축이 있습니다.
    가면 색깔에도 의미가 있습니다. 빨간색은 충의와 용맹, 검은색은 정직과 공평, 흰색은 간사함, 노란색은 잔혹함, 파란색은 강인함을 상징합니다.
  `;

  return (
    <div className="animate-fade-in pb-10">
      {/* Peking Opera */}
      <div className="mb-16">
        <SectionHeader 
          title="경극(京剧)의 새로운 도전" 
          subtitle="전통 예술과 현대화" 
          color="text-red-700" 
          audioContent={ttsText}
        />
        
        <div className="flex flex-col lg:flex-row gap-8">
           <div className="lg:w-2/3">
              <img 
                src="https://picsum.photos/800/400?random=10" 
                alt="Peking Opera" 
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                경극은 노래(唱), 대사(念), 연기(做), 무술(打)의 4가지 요소가 결합된 중국의 종합 예술입니다.
                최근 경극은 현대적 요소와 접목되어 새로운 방식으로 발전하고 있습니다.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">경극의 4대 배역</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                 <div className="bg-red-50 p-4 rounded-lg">
                    <div className="font-bold text-red-800 text-lg">생 (生)</div>
                    <div className="text-sm text-gray-600">남성 주인공</div>
                 </div>
                 <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="font-bold text-pink-800 text-lg">단 (旦)</div>
                    <div className="text-sm text-gray-600">여성 역할</div>
                 </div>
                 <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-bold text-blue-800 text-lg">정 (净)</div>
                    <div className="text-sm text-gray-600">호걸/악역</div>
                 </div>
                 <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-bold text-green-800 text-lg">축 (丑)</div>
                    <div className="text-sm text-gray-600">코믹한 역할</div>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/3 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">가면 색깔의 의미</h4>
              <ul className="space-y-3 text-sm">
                 <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span> <span className="font-bold mr-1">빨간색:</span> 충의, 용맹 (관우)</li>
                 <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-black mr-2"></span> <span className="font-bold mr-1">검은색:</span> 정직, 공평 (포청천)</li>
                 <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-white border border-gray-300 mr-2"></span> <span className="font-bold mr-1">흰색:</span> 간사함, 음흉함 (조조)</li>
                 <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span> <span className="font-bold mr-1">노란색:</span> 잔혹함, 흉포함</li>
                 <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span> <span className="font-bold mr-1">파란색:</span> 강인함, 호방함</li>
              </ul>
           </div>
        </div>
      </div>

      {/* Douhua */}
      <div className="mt-16 pt-10 border-t-4 border-dashed border-gray-200">
        <SectionHeader title="'또우화'와의 달콤한 만남" subtitle="요즘 유행하는 디저트" color="text-yellow-600" />
        
        <div className="bg-yellow-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                 <h3 className="text-2xl md:text-3xl font-black text-yellow-900 mb-4">또우화(豆花)란?</h3>
                 <p className="text-yellow-800 mb-4 leading-relaxed">
                   부드럽고 고소한 연두부 푸딩으로, 대만과 중국 남부에서 즐겨 먹는 디저트입니다.
                   타피오카 펄, 흑당 시럽, 땅콩, 팥 등 다양한 토핑을 곁들여 먹습니다.
                   여름에는 빙수처럼 시원하게, 겨울에는 따뜻한 시럽을 부어 속을 채웁니다.
                 </p>
                 <div className="bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                    <h4 className="font-bold text-yellow-800 mb-2">인기 토핑 (Toppings)</h4>
                    <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-700">
                       <span className="bg-yellow-200 px-2 py-1 rounded">花生(땅콩)</span>
                       <span className="bg-red-200 px-2 py-1 rounded">红豆(팥)</span>
                       <span className="bg-green-200 px-2 py-1 rounded">绿豆(녹두)</span>
                       <span className="bg-purple-200 px-2 py-1 rounded">芋圆(타로볼)</span>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
                 <img src="https://picsum.photos/500/500?random=20" alt="Douhua Dessert" className="relative rounded-2xl shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};