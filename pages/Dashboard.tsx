import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 64px)' }}>
      <iframe
        src="/dashboard.html"
        title="sMES 통합 대시보드"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default Dashboard;
