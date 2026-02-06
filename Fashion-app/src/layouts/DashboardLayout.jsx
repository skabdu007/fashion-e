import React from 'react';

const DashboardLayout = ({ children, role }) => {
  return (
    <div className={`dashboard-layout ${role}-layout`}>
      <div className="dashboard-content">{children}</div>
    </div>
  );
};

export default DashboardLayout;