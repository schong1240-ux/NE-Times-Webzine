import React from 'react';
import { SectionHeader, InfoBox } from '../ArticleParts';

interface SocietyProps {
  isEducationMode?: boolean;
}

export const SocietySection: React.FC<SocietyProps> = ({ isEducationMode = false }) => {
  const societyTTS = `
    김치, 파오차이, 이제는 씬치!
    중국에서 김치를 '파오차이'로 번역하면서 원조 논란이 불거졌습니다.
    김치는 배추나 무를 소금에 절인 후 양념해 발효시킨 음식이지만, 파오차이는 절임 음식으로 발효 과정이 필수가 아닙니다.
    이에 한국 정부는 김치의 중국어 표기를 '씬치'로 제정하여, 중국의 파오차이와 명확히 구별하고 있습니다.
    한편, 중국 Z세대 사이에서는 '상문화'가 확산되고 있습니다. 
    상문화는 무기력하고 비관적인 태도를 자조적으로 표현하는 하위 문화로, 탕핑, 즉 '평평하게 드러눕다'라는 용어와 함께 쓰입니다.
  `;

  if (isEducationMode) {
    return (
      <div className="animate-fade-in pb-10">
        <SectionHeader title="지금도 펼쳐지는 '공을기 문학'" subtitle="중국 문학 산책" color="text-indigo-600" />
        <div className="prose max-w-none text-gray-700">
           <div className="float-right md:w-1/3 ml-6 mb-6 bg-gray-100 p-4 rounded-lg text-sm">
             <h4 className="font-bold mb-2">공을기 (孔乙己)</h4>
             <ul className="list-disc pl-4 space-y-1">
               <li>루쉰(鲁迅)의 단편소설 주인공</li>
               <li>과거시험에 낙방한 가난한 지식인</li>
               <li>낡은 장삼(長衫)을 입고 서서 술을 마심</li>
               <li>현실 부적응 지식인의 상징</li>
             </ul>
           </div>
           <p className="text-lg leading-relaxed mb-6">
             중국 청년들 사이에서 자신을 루쉰 소설 속 인물인 '공을기'에 빗대는 현상이 유행하고 있습니다.
             고학력이지만 취업난으로 인해 경제적으로 어려운 현실을 자조적으로 표현한 것입니다.
           </p>
           <p className="mb-6">
             "장삼을 벗을 수 없다"는 표현은 고학력이라는 체면 때문에 눈높이를 낮춰 취업하기 어려운 딜레마를 상징합니다.
             이에 대해 중국 정부와 언론은 청년들에게 "장삼을 벗고 현장으로 가라"고 독려하고 있지만, 구조적인 실업 문제 해결이 우선이라는 목소리도 높습니다.
           </p>

           <div className="mt-12">
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Suno AI로 만드는 우리반 C-pop</h3>
             <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
                <p className="font-medium text-lg mb-4">
                  Suno AI는 가사를 입력하면 자동으로 노래를 만들어주는 생성형 AI입니다. 
                  중국어 수업 시간에 배운 단어와 문장으로 가사를 쓰고, AI로 작곡하여 나만의 중국어 노래를 만들어보세요!
                </p>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold shadow hover:bg-indigo-50 transition-colors">
                  활동 가이드 보기
                </button>
             </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-10">
      <SectionHeader 
        title="김치? 파오차이? 이제는 씬치!" 
        subtitle="이슈 & 논쟁" 
        color="text-red-600" 
        audioContent={societyTTS}
      />
      
      {/* Chat UI for Context */}
      <div className="max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <h4 className="text-center text-sm font-bold text-gray-400 mb-6">민수와 샤오란의 대화</h4>
        <div className="space-y-4">
           <div className="flex items-end">
              <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[80%]">
                 <p className="text-sm">샤오란, 너도 김치 좋아해? 우리 찌개 먹었는데.</p>
              </div>
           </div>
           <div className="flex items-end justify-end">
              <div className="bg-red-100 text-red-900 p-3 rounded-2xl rounded-br-none shadow-sm max-w-[80%]">
                 <p className="text-sm">응! 나 김치 좋아해. 사실 우리 중국에도 <strong>파오차이(泡菜)</strong>라고 비슷한 게 있어.</p>
              </div>
           </div>
           <div className="flex items-end">
               <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[80%]">
                 <p className="text-sm">음, 비슷하긴 한데... 김치는 발효 음식이고 파오차이는 절임 음식이라 좀 다르지 않아?</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
         <InfoBox title="김치 (Kimchi / 辛奇)">
            <p>배추나 무를 소금에 절인 후, 고춧가루, 마늘, 젓갈 등으로 양념해 <strong>발효</strong>시킨 음식. 2001년 CODEX 국제 표준 인정.</p>
         </InfoBox>
         <InfoBox title="파오차이 (Pao cai / 泡菜)">
            <p>채소를 소금물이나 향신료 국물에 담가 만든 <strong>절임</strong> 음식. 김치와 달리 발효 과정이 필수가 아니며 주로 반찬으로 먹음.</p>
         </InfoBox>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        중국에서 김치를 '파오차이'로 번역하면서 원조 논란이 불거졌습니다. 
        이에 한국 정부는 김치의 중국어 표기를 <strong>'씬치(辛奇)'</strong>로 제정하여, 
        중국의 파오차이와 명확히 구별하고 김치의 고유성을 알리고 있습니다.
      </p>

      <hr className="my-12 border-gray-200" />

      <SectionHeader title="중국 Z세대의 상실 문화, '상문화(丧文化)'" subtitle="트렌드" color="text-gray-500" />
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
         <div className="md:w-1/2">
            <div className="bg-gray-800 text-white p-6 rounded-xl">
               <h3 className="text-2xl font-bold mb-4">躺平 (tǎngpíng)</h3>
               <p className="text-gray-300 italic mb-4">'평평하게 드러눕다'</p>
               <p className="text-sm leading-relaxed">
                  아무리 노력해도 집을 사거나 계층 이동이 어려운 현실에 지쳐, 
                  최소한의 생존만 유지하며 경쟁을 포기하는 태도를 뜻합니다.
               </p>
            </div>
         </div>
         <div className="md:w-1/2 text-gray-700">
            <p className="mb-4">
              '상(丧)'은 상실, 죽음을 의미합니다. 
              <strong>상문화(丧文化)</strong>는 무기력하고 비관적인 태도를 유머러스하게 표현하거나 자조하는 
              중국 90년대생(주링허우)들의 하위 문화입니다.
            </p>
            <p>
              대표적인 예로 '슬픈 개구리 페페'나 '게으른 달걀 구데타마' 같은 캐릭터가 인기를 끄는 현상이 있습니다.
            </p>
         </div>
      </div>
    </div>
  );
};