import React from 'react';
import { SectionType } from '../types';
import { Newspaper, BookOpen, Globe, Coffee, Users, GraduationCap } from 'lucide-react';

interface SidebarProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { type: SectionType.COVER, label: '표지 (Cover)', icon: <Newspaper size={20} /> },
    { type: SectionType.NEWS, label: '헤드라인 & AI 뉴스', icon: <Globe size={20} /> },
    { type: SectionType.LANGUAGE, label: '언어 (표현 & 속담)', icon: <BookOpen size={20} /> },
    { type: SectionType.CULTURE, label: '문화 (경극 & 음식)', icon: <Coffee size={20} /> },
    { type: SectionType.SOCIETY, label: '사회 (김치 & Z세대)', icon: <Users size={20} /> },
    { type: SectionType.EDUCATION, label: '교육 (문학 & AI수업)', icon: <GraduationCap size={20} /> },
  ];

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      <div className="p-6 border-b border-gray-100 hidden md:block">
        <h1 className="text-3xl font-black text-ne-red tracking-tighter mb-1">NE TIMES</h1>
        <p className="text-xs text-gray-500 font-medium">중국어 교육 웹진 Vol.19</p>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.type}
            onClick={() => onNavigate(item.type)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${currentSection === item.type 
                ? 'bg-ne-red text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-ne-red'
              }`}
          >
            <span className={`${currentSection === item.type ? 'text-white' : 'text-gray-400 group-hover:text-ne-red'}`}>
              {item.icon}
            </span>
            <span className="font-semibold text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
          <p className="text-xs font-bold text-gray-400 mb-2">구독 문의</p>
          <p className="text-sm font-bold text-ne-dark">1833-8368</p>
          <p className="text-[10px] text-gray-400 mt-1">www.neteacher.co.kr</p>
        </div>
      </div>
    </div>
  );
};