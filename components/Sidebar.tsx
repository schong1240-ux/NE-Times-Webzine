import React from 'react';
import { SectionType } from '../types';
import { Newspaper, BookOpen, Globe, Coffee, Users, GraduationCap, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { type: SectionType.COVER, label: '표지 (Cover)', icon: <Newspaper size={18} /> },
    { type: SectionType.NEWS, label: '헤드라인 & AI', icon: <Globe size={18} /> },
    { type: SectionType.LANGUAGE, label: '언어 (표현 & 속담)', icon: <BookOpen size={18} /> },
    { type: SectionType.CULTURE, label: '문화 (경극 & 음식)', icon: <Coffee size={18} /> },
    { type: SectionType.SOCIETY, label: '사회 (이슈 & 트렌드)', icon: <Users size={18} /> },
    { type: SectionType.EDUCATION, label: '교육 (문학 & 수업)', icon: <GraduationCap size={18} /> },
  ];

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="p-8 pb-4 hidden md:block">
        <div className="w-8 h-8 bg-ne-red rounded-full mb-3 flex items-center justify-center text-white font-serif font-bold text-lg">N</div>
        <h1 className="text-2xl font-black text-ne-dark tracking-tighter leading-none">NE TIMES</h1>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Chinese Webzine</p>
      </div>

      <div className="px-6 py-2 md:hidden bg-ne-dark text-white">
        <span className="text-xs font-bold uppercase tracking-wider">Menu</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = currentSection === item.type;
          return (
            <button
              key={item.type}
              onClick={() => onNavigate(item.type)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group relative
                ${isActive 
                  ? 'bg-ne-bg text-ne-dark font-bold' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-ne-red'
                }`}
            >
              <div className="flex items-center space-x-3">
                <span className={`${isActive ? 'text-ne-red' : 'text-gray-400 group-hover:text-ne-red'}`}>
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </div>
              {isActive && <ChevronRight size={14} className="text-ne-red" />}
              {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-ne-red rounded-r-full"></div>}
            </button>
          );
        })}
      </nav>

      <div className="p-6 mt-auto">
        <div className="bg-gray-900 rounded-xl p-5 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-ne-red opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Subscription</p>
          <p className="text-lg font-black tracking-tight">1833-8368</p>
          <div className="mt-3 text-[10px] text-gray-500 border-t border-gray-800 pt-3">
             NE 능률 중국어 신문 구독 문의
          </div>
        </div>
      </div>
    </div>
  );
};