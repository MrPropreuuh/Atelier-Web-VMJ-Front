"use client";

import { useState, useEffect } from 'react';
import React from 'react';
import LayoutDashboard from '@/app/layout';
import DashboardPage from '@/components/my-ui/dashboard/DashboardPage';

const Dashboard: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <LayoutDashboard>
          <DashboardPage />
        </LayoutDashboard>
      ) : (
        'Prerendered'
      )}
    </div>
  );
};

export default Dashboard;
