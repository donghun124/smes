import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">주요 기능</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              SMES는 건설 부재 제조의 전 과정을 효율적으로 관리하는 통합 솔루션입니다
            </p>
          </div>
        </div>
      </section>

      {/* 시스템 도입 전 고민 섹션 */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">시스템 도입 전 고민</h2>
            <p className="text-gray-600">SMES가 해결해드립니다</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <img 
              src="/Image/F/시스템_도입전_고민.png" 
              alt="시스템 도입 전 고민" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 프로세스 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SMES 프로세스</h2>
            <p className="text-gray-600">BOM 등록부터 원자재 구매, 입고, 가공, 검사, 출하, 시공까지 모든 프로세스를 하나로…</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <img 
              src="/Image/F/프로세스.png" 
              alt="SMES 프로세스" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* BOM 및 자재 관리 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">BOM 등록 및 자재 구매/발주/입고 업무</h2>
            <p className="text-gray-600">효율적인 자재 관리 시스템</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <img 
              src="/Image/F/BOM등록및자재구매요청_발주_입고_업무.png" 
              alt="BOM 등록 및 자재 구매/발주/입고 업무" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 부재 생산 관리 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">부재 생산 관리</h2>
            <p className="text-gray-600">체계적인 생산 프로세스 관리</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <img 
              src="/Image/F/부재생산관리.png" 
              alt="부재 생산 관리" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 타사 대비 특징 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">타사 대비 특징</h2>
            <p className="text-gray-600">SMES만의 차별화된 강점</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <img 
              src="/Image/F/타사대비_특징.png" 
              alt="타사 대비 특징" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
