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

      {/* 공정현황 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">공정현황</h2>
            <p className="text-gray-600">실시간 공정 모니터링 및 생산 현황 추적</p>
          </div>
          <div className="space-y-10">
            {/* 총괄현황 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">총괄현황</h3>
              <p className="text-sm text-gray-500 mb-4">공정별 전체중량, 금일누계, 잔량 등 총괄 현황과 부재타입별 공정현황을 한눈에 조회</p>
              <img
                src="/Image/F/공정현황_총괄.png"
                alt="총괄현황"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
            {/* 생산계획/실적조회 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">생산계획/실적조회</h3>
              <p className="text-sm text-gray-500 mb-4">업체별·공사별·담당자별 생산계획 대비 실적을 월별로 비교 분석</p>
              <img
                src="/Image/F/공정현황_생산계획실적.png"
                alt="생산계획/실적조회"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
            {/* 주간실적조회 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">주간실적조회</h3>
              <p className="text-sm text-gray-500 mb-4">주차별 제작·출하 실적을 공사·절주 단위로 추적 관리</p>
              <img
                src="/Image/F/공정현황_주간실적.png"
                alt="주간실적조회"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
            {/* MCS (부재별 공정현황) */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">MCS (부재별 공정현황)</h3>
              <p className="text-sm text-gray-500 mb-4">개별 부재의 1차가공, 취부, 검사 등 상세 공정 진행 상태를 실시간 확인</p>
              <img
                src="/Image/F/공정현황_MCS.png"
                alt="MCS 부재별 공정현황"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
            {/* BIM 공정현황 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">BIM 공정현황</h3>
              <p className="text-sm text-gray-500 mb-4">3D BIM 모델과 연동하여 부재별 공정 진행률을 시각적으로 확인</p>
              <img
                src="/Image/F/공정현황_BIM.png"
                alt="BIM 공정현황"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
