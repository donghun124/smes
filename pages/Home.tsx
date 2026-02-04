import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <span className="inline-block px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-blue-100 text-xs font-semibold tracking-wider uppercase mb-4">
                Smart Manufacturing Execution System
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                SMES
              </h1>
              <p className="text-xl sm:text-2xl font-light mb-4 text-blue-100">
                Smart Manufacturing Execution System
              </p>
              <p className="text-lg mb-10 text-blue-50 opacity-90 leading-relaxed">
                건설 부재 제조의 전 과정을 효율적으로 관리하는 통합 솔루션<br />
                공사 등록부터 생산, 검사, 출하, 설치까지 모든 프로세스를<br />
                하나의 시스템에서 통합 관리할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/about" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-center hover:bg-blue-50 transition-all shadow-lg">
                  제품 자세히 보기
                </Link>
                <Link to="/usage" className="bg-blue-500 bg-opacity-40 border border-blue-400 text-white px-8 py-3 rounded-lg font-bold text-center hover:bg-opacity-60 transition-all">
                  사용방법 보기
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-2 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/Image/Main.png" 
                  alt="SMES Smart Manufacturing Execution System" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </section>

      {/* Core Concept Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 SMES인가요?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">통합 관리 시스템</h3>
              <p className="text-gray-600 leading-relaxed">
                공사 등록부터 BOM 관리, 자재 발주, 입고, 생산, 검사, 출하, 설치까지 전체 프로세스를 하나의 시스템에서 관리합니다.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">실시간 추적</h3>
              <p className="text-gray-600 leading-relaxed">
                부재별 생산 진행 상황, 검사 결과, 출하 상태, 설치 현황을 실시간으로 추적하고 관리할 수 있습니다.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">데이터 기반 의사결정</h3>
              <p className="text-gray-600 leading-relaxed">
                자재소요량 계산, 컷팅플랜 최적화, 공정 계획 수립 등 데이터 분석을 통한 효율적인 의사결정을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
