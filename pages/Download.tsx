import React from 'react';

const Download: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-12 border-l-4 border-blue-600 pl-4">프로그램 다운로드</h1>
        
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-8 border border-gray-200">
          <div className="flex justify-center mb-8">
            <div
              onClick={() => {
                // 다운로드 링크는 실제 링크로 교체 필요
                window.open("#", "_blank");
              }}
              className="bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-xl p-8 transition-all shadow-md hover:shadow-xl group cursor-pointer max-w-sm w-full"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Windows</h4>
                <p className="text-sm text-gray-600 mb-1">버전 v2026.01</p>
                <p className="text-xs text-blue-600 font-semibold">SMES_Launcher.exe</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-700">
                <strong>설치 전 주의사항:</strong> 프로그램 설치 전 기존 SMES가 실행 중인 경우 종료해주세요. 설치 완료 후 프로그램을 실행하면 자동으로 업데이트가 진행됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
