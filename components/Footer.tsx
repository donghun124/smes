import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/icons/Logo.ico" 
                alt="SMES Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-white tracking-tight">SMES</span>
              <span className="hidden sm:block text-xs text-gray-400 border-l border-gray-700 pl-2">Smart Manufacturing Execution System</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-md">
              주식회사 이엔지소프트는 혁신적인 기술을 통해 더 나은 세상을 만듭니다. 
              SMES는 건설 부재 제조의 전 과정을 효율적으로 관리하는 통합 솔루션입니다.
            </p>
            <div className="flex space-x-4">
              <span className="text-xs px-2 py-1 border border-gray-700 rounded">Smart</span>
              <span className="text-xs px-2 py-1 border border-gray-700 rounded">Manufacturing</span>
              <span className="text-xs px-2 py-1 border border-gray-700 rounded">Execution</span>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#/" className="hover:text-white transition-colors">제품소개</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors">주요기능</a></li>
              <li><a href="#/usage" className="hover:text-white transition-colors">사용방법</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">More Info</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://www.engsoft.kr/index.php" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  회사 홈페이지
                </a>
              </li>
              <li>
                <a href="https://engsoft.tistory.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  기술 블로그
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@flyinggon" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.5 10.5l-5 3a.5.5 0 01-.75-.433V6.933a.5.5 0 01.75-.433l5 3a.5.5 0 010 .866z"></path>
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>T. 02-839-5891</li>
              <li>F. 070-4705-8591</li>
              <li>ksg@engsoft.kr</li>
              <li>서울시 강서구 양천로 583 우림블루나인비즈니스센터 B동 2310호</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>Copyright 2026. (주)이엔지소프트 all rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="https://www.engsoft.kr/index.php" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">회사 홈페이지</a>
            <a href="https://engsoft.tistory.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">기술 블로그</a>
            <a href="https://www.youtube.com/@flyinggon" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a>
            <span className="text-gray-600">|</span>
            <span className="hover:text-white cursor-pointer">이용약관</span>
            <span className="hover:text-white cursor-pointer">개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
