import React from 'react';
import { SectionHeader, InfoBox } from '../ArticleParts';

export const NewsSection: React.FC = () => {
  const ttsText = `
    DeepSeek의 돌풍. 
    챗GPT 이후 DeepSeek가 또 하나의 대표적인 AI 서비스로 자리 잡았다.
    최신 AI 서비스 순위 데이터에 따르면, 2025년 1월 20일 딥시크 R1 모델 출시 후 1월 마지막 주에 
    사용자 수가 폭발적으로 증가했으며, 1월 사용자 수 1억 2,500만 명을 기록했다.
    이 중 80% 이상이 마지막 한 주 동안 유입되었으며, 어떠한 광고도 없이 단 7일 만에 사용자 1억 명을 확보하는 성과를 달성했다.
    이에 앞서 딥시크는 출시 후 20일 만에 일간 사용자 수가 2천만 명을 돌파하며, 전 세계에서 가장 빠르게 성장하는 AI 서비스로 평가받았다.
    중국의 AI 굴기.
    중국은 인공지능 분야에서 미국과 경쟁하며 세계적인 AI 강국으로 자리 잡기 위해 적극적인 정책과 투자를 추진하고 있다. 
    'AI 굴기'는 AI 기술을 통해 2030년까지 세계 최고의 인공지능 강국으로 도약하겠다는 중국의 국가적 전략을 의미한다.
    딥시크의 등장은 이러한 중국 AI 산업의 저력을 보여주는 사례다. 오픈 AI 투자비의 18분의 1 비용으로 챗GPT에 필적하는 
    AI 모델인 'R1'을 출시하여 전 세계를 충격에 빠뜨렸다. 딥시크는 저렴하고 낮은 성능의 칩을 활용해 
    미국 최첨단 모델에 떨어지지 않는 기능을 구현해냈기 때문이다.
  `;

  return (
    <div className="animate-fade-in pb-10">
      <SectionHeader 
        title="DeepSeek(딥시크)의 돌풍" 
        subtitle="키워드로 보는 중국" 
        color="text-blue-600"
        audioContent={ttsText}
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-gray-700">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-ne-red first-letter:mr-3 first-letter:float-left">
            챗GPT 이후 DeepSeek(딥시크)가 또 하나의 대표적인 AI 서비스로 자리 잡았다.
            최신 AI 서비스 순위 데이터에 따르면, 2025년 1월 20일 딥시크 R1 모델 출시 후 1월 마지막 주에 
            사용자 수가 폭발적으로 증가했으며, 1월 사용자 수 1억 2,500만 명을 기록했다.
          </p>
          <p>
            이 중 80% 이상이 마지막 한 주 동안 유입되었으며, 어떠한 광고도 없이 단 7일 만에 사용자 1억 명을 확보하는 성과를 달성했다.
            이에 앞서 딥시크는 출시 후 20일 만에 DAU(일간 사용자 수)가 2천만 명을 돌파하며, 전 세계에서 가장 빠르게 성장하는 AI 서비스로 평가받았다.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-ne-red my-8">
            <h3 className="font-bold text-xl mb-2 text-gray-900">DeepSeek 创新纪录 ('딥시크' 신기록 세워)</h3>
            <p className="text-sm text-gray-600 italic">
              "DeepSeek在1月份获得1.25亿用户。其中80%以上用户来自最后一周..."
              <br/>(딥시크는 1월에 1억 2,500만 명의 사용자를 확보했다. 그 중 80% 이상이 마지막 주에 유입되었다.)
            </p>
          </div>

          <h3 className="text-2xl font-bold text-ne-dark mt-8 mb-4">중국의 AI 굴기(崛起)</h3>
          <p>
            중국은 인공지능 분야에서 미국과 경쟁하며 세계적인 AI 강국으로 자리 잡기 위해 적극적인 정책과 투자를 추진하고 있다. 
            'AI 굴기(崛起 juéqǐ)'는 AI 기술을 통해 2030년까지 세계 최고의 인공지능 강국으로 도약하겠다는 중국의 국가적 전략을 의미한다.
          </p>
          <p>
            딥시크의 등장은 이러한 중국 AI 산업의 저력을 보여주는 사례다. 오픈 AI 투자비의 1/18 비용으로 챗GPT에 필적하는 
            AI 모델인 'R1'을 출시하여 전 세계를 충격에 빠뜨렸다. 딥시크는 저렴하고 낮은 성능의 칩(엔비디아 H800 등)을 활용해 
            미국 최첨단 모델에 떨어지지 않는 기능을 구현해냈기 때문이다.
          </p>
        </div>

        {/* Sidebar content */}
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">중국의 빅 테크 기업 (BAT)</h4>
             <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mr-3 shrink-0">B</div>
                  <div>
                    <strong className="block text-sm text-gray-800">Baidu (바이두)</strong>
                    <span className="text-xs text-gray-500">어니봇(Ernie-Bot) 출시, 자율주행 강자</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mr-3 shrink-0">A</div>
                  <div>
                    <strong className="block text-sm text-gray-800">Alibaba (알리바바)</strong>
                    <span className="text-xs text-gray-500">Qwen2.5 모델 출시, 클라우드 AI</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs mr-3 shrink-0">T</div>
                  <div>
                    <strong className="block text-sm text-gray-800">Tencent (텐센트)</strong>
                    <span className="text-xs text-gray-500">훈위안(Hunyuan) 모델, 위챗 통합</span>
                  </div>
                </li>
             </ul>
           </div>

           <InfoBox title="어휘 쏙쏙">
             <div className="space-y-2">
                <div>
                   <span className="font-bold text-ne-red">崛起 (juéqǐ)</span>
                   <p className="text-xs text-gray-600">굴기. 산봉우리가 솟아나듯 벌떡 일어남.</p>
                </div>
                <div>
                   <span className="font-bold text-ne-red">人工智能 (réngōng zhìnéng)</span>
                   <p className="text-xs text-gray-600">인공지능 (AI)</p>
                </div>
                <div>
                   <span className="font-bold text-ne-red">算法 (suànfǎ)</span>
                   <p className="text-xs text-gray-600">알고리즘</p>
                </div>
             </div>
           </InfoBox>
        </div>
      </div>
    </div>
  );
};