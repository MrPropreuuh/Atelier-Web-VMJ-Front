"use client";

import { useEffect } from 'react';
import CustomBreadcrumb from '@/components/my-ui/Breadcrumb';
import ProductControlCard from '@/components/my-ui/dashboard/ProductControlCard';
import ClientFeedbackCard from '@/components/my-ui/dashboard/ClientFeedbackCard';
import ProductPerformanceCard from '@/components/my-ui/dashboard/ProductPerformanceCard';
import TaskListCard from '@/components/my-ui/dashboard/TaskListCard';
import Sidebar from '@/components/my-ui/Sidebar';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

const DashboardPage: React.FC = () => {
  const { toast } = useToast();
  const breadcrumbItems = [
    { href: '/home', label: 'Accueil' },
    { href: '/dashboard', label: 'Tableau de bord' }
  ];

  useEffect(() => {
    // Place here any client-side initialization if necessary
  }, []);

  return (
    <>
      {/* Sidebar @/components/my-ui/Sidebar */}
      <Sidebar />
      <div className="flex flex-row w-full ">
        <div className="flex flex-col gap-4 w-full p-8 h-full ml-14">
          <div className="flex">
            {/* Breadcrumb @/components/my-ui/Breadcrumb */}
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
          <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2">
              {/* ProductControlCard @/components/my-ui/dashboard/ProductControlCard */}
              <ProductControlCard />
              {/* TaskListCard @/components/my-ui/dashboard/TaskListCard */}
              <TaskListCard />
            </div>
            <div className="col-span-2">
              {/* ProductPerformanceCard @/components/my-ui/dashboard/ProductPerformanceCard */}
              <ProductPerformanceCard />
              {/* ClientFeedbackCard @/components/my-ui/dashboard/ClientFeedbackCard */}
              <ClientFeedbackCard />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default DashboardPage;
