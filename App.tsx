import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { CoverPage } from './components/content/CoverPage';
import { NewsSection } from './components/content/NewsSection';
import { LanguageSection } from './components/content/LanguageSection';
import { CultureSection } from './components/content/CultureSection';
import { SocietySection } from './components/content/SocietySection';
import { SectionType } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  // URL에서 현재 섹션 정보를 가져와 초기 상태로 설정 (새로고침 시 유지)
  const [currentSection, setCurrentSection] = useState<SectionType>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const sectionParam = params.get('section');
      if (sectionParam && Object.values(SectionType).includes(sectionParam as SectionType)) {
        return sectionParam as SectionType;
      }
    }
    return SectionType.COVER;
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 브라우저 뒤로가기/앞으로가기 버튼 처리
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const sectionParam = params.get('section');
      if (sectionParam && Object.values(SectionType).includes(sectionParam as SectionType)) {
        setCurrentSection(sectionParam as SectionType);
      } else {
        setCurrentSection(SectionType.COVER);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    switch (currentSection) {
      case SectionType.COVER:
        return <CoverPage onNavigate={handleSectionChange} />;
      case SectionType.NEWS:
        return <NewsSection />;
      case SectionType.LANGUAGE:
        return <LanguageSection />;
      case SectionType.CULTURE:
        return <CultureSection />;
      case SectionType.SOCIETY:
        return <SocietySection />;
      case SectionType.EDUCATION:
        // Reusing Society Section structure for brevity in this example, normally distinct
        return <SocietySection isEducationMode={true} />;
      default:
        return <CoverPage onNavigate={handleSectionChange} />;
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleSectionChange = (section: SectionType) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
    
    // 페이지 이동 시 URL 업데이트 (새로고침 없이 주소 변경)
    const url = new URL(window.location.href);
    url.searchParams.set('section', section);
    window.history.pushState({}, '', url);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-black text-ne-red tracking-tighter">NE TIMES</h1>
        <button onClick={toggleMobileMenu} className="p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={`
        fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:w-64 md:block md:shadow-xl md:z-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar currentSection={currentSection} onNavigate={handleSectionChange} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8 overflow-y-auto">
        {renderContent()}
        
        {/* Footer Navigation Helpers */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between text-sm text-gray-400">
           <span>제19호 (2025년 1호)</span>
           <span>NE 능률 중국어 신문</span>
        </div>
      </main>
    </div>
  );
};

export default App;