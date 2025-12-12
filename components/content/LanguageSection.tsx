import React from 'react';
import { SectionHeader, VocabCard } from '../ArticleParts';

export const LanguageSection: React.FC = () => {
  const ttsText = `
    한국어와 중국어, 미묘하게 다르네!
    중국어에서 '식당'을 뜻하는 단어는 아주 다양합니다. 
    찬팅, 스탕, 판디엔, 지우디엔. 정확히 어떻게 다를까요?
    찬팅은 일반적인 식당이나 다이닝룸을 뜻합니다.
    스탕은 학교나 회사에 있는 구내 식당을 말합니다.
    판디엔은 일반 음식점을 뜻하기도 하지만, 규모가 크고 시설이 좋은 호텔을 의미하기도 합니다.
    지우디엔은 원래는 술집을 의미했으나, 현대에는 숙박과 오락을 포함한 고급 호텔을 주로 지칭합니다.
  `;

  return (
    <div className="animate-fade-in pb-10">
      <SectionHeader 
        title="한국어와 중국어, 미묘하게 다르네!" 
        subtitle="한·중·미·다" 
        audioContent={ttsText}
      />

      <div className="bg-orange-50 p-6 rounded-2xl mb-10">
         <p className="text-center font-serif text-lg text-orange-900 mb-6">
           중국어에서 '식당'을 뜻하는 단어는 아주 다양합니다. <br/>
           <span className="font-bold">餐厅, 食堂, 饭店, 酒店...</span> 정확히 어떻게 다를까요?
         </p>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <VocabCard 
              word="餐厅 (cāntīng)"
              pinyin="찬팅"
              meaning="일반적인 식당 / 다이닝룸"
              description="집안의 식탁 공간이나, 백화점 내 식당, 패스트푸드점 등 일상적인 식사 장소."
              imageUrl="https://picsum.photos/400/200?random=1"
            />
             <VocabCard 
              word="食堂 (shítáng)"
              pinyin="스탕"
              meaning="구내 식당"
              description="학교, 회사, 군대, 정부 기관 등에 있는 단체 급식 공간."
              imageUrl="https://picsum.photos/400/200?random=2"
            />
             <VocabCard 
              word="饭店 (fàndiàn)"
              pinyin="판디엔"
              meaning="음식점 / 호텔"
              description="일반 음식점을 뜻하기도 하지만, 규모가 크고 시설이 좋은 호텔을 의미하기도 함."
              imageUrl="https://picsum.photos/400/200?random=3"
            />
             <VocabCard 
              word="酒店 (jiǔdiàn)"
              pinyin="지우디엔"
              meaning="술집 / 고급 호텔"
              description="원래는 술집을 의미했으나, 현대에는 숙박/오락을 포함한 고급 호텔을 주로 지칭."
              imageUrl="https://picsum.photos/400/200?random=4"
            />
         </div>
      </div>

      <div className="mt-16">
        <SectionHeader title="비슷한 듯 다른 속담" subtitle="문화 속 언어" color="text-teal-600" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-teal-100 rounded-xl p-6 shadow-sm hover:border-teal-300 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">한국</span>
              <span className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-bold">중국</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
               <div className="text-center md:text-left flex-1">
                 <h4 className="font-bold text-lg">꿀 먹은 벙어리</h4>
                 <p className="text-sm text-gray-500">속마음을 말 못하는 상황</p>
               </div>
               <div className="text-2xl text-gray-300">↔</div>
               <div className="text-center md:text-right flex-1">
                 <h4 className="font-bold text-lg text-teal-700">哑巴吃黄连 (벙어리가 황련을 먹다)</h4>
                 <p className="text-sm text-gray-500">매우 쓴 약초를 먹고도 말을 못함</p>
               </div>
            </div>
            <p className="mt-4 text-xs bg-gray-50 p-3 rounded text-gray-600">
               * 有苦说不出 (yǒu kǔ shuō bù chū): 괴로워도 말할 수가 없다.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-teal-100 rounded-xl p-6 shadow-sm hover:border-teal-300 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">한국</span>
              <span className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-bold">중국</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
               <div className="text-center md:text-left flex-1">
                 <h4 className="font-bold text-lg">호랑이도 제 말 하면 온다</h4>
               </div>
               <div className="text-2xl text-gray-300">↔</div>
               <div className="text-center md:text-right flex-1">
                 <h4 className="font-bold text-lg text-teal-700">说曹操, 曹操到 (조조를 말하니 조조가 온다)</h4>
               </div>
            </div>
            <p className="mt-4 text-xs bg-gray-50 p-3 rounded text-gray-600">
               삼국지의 조조(曹操)가 정보력이 뛰어나 어디서든 나타난다는 이야기에서 유래.
            </p>
          </div>
          
           {/* Card 3 */}
          <div className="bg-white border border-teal-100 rounded-xl p-6 shadow-sm hover:border-teal-300 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">한국</span>
              <span className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-bold">중국</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
               <div className="text-center md:text-left flex-1">
                 <h4 className="font-bold text-lg">고생 끝에 낙이 온다</h4>
               </div>
               <div className="text-2xl text-gray-300">↔</div>
               <div className="text-center md:text-right flex-1">
                 <h4 className="font-bold text-lg text-teal-700">苦尽甘来 (고진감래)</h4>
                 <p className="text-sm text-gray-500">쓴 것이 다하면 단 것이 온다</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};