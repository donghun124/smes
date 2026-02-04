import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ContentViewer } from '../components/ContentViewer';
import { MANUAL_DATA } from '../data';
import { ManualSection } from '../types';

const Usage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ManualSection>(MANUAL_DATA[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-scroll to top when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Desktop */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 transition-transform duration-300 transform lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar 
          data={MANUAL_DATA} 
          activeId={activeSection.id} 
          onSelect={(s) => {
            setActiveSection(s);
            // Close sidebar on mobile after selection
            if (window.innerWidth < 1024) setIsSidebarOpen(false);
          }} 
        />
      </aside>

      {/* Main Content Area */}
      <main 
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'lg:pl-72' : 'pl-0'
        }`}
      >
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Toggle Sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="hidden sm:block">
              <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <span className="hover:text-gray-700 cursor-default">사용방법</span>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-1 font-medium text-gray-800">{activeSection.title}</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">v2026.01</span>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">SMES</div>
          </div>
        </header>

        {/* Content View */}
        <div className="bg-white min-h-[calc(100vh-64px)]">
           <ContentViewer section={activeSection} />
        </div>

        {/* Simple Footer */}
        <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50 text-center text-sm text-gray-400">
          <p>© 2026 (주) 이엔지소프트. All rights reserved.</p>
        </footer>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Usage;
