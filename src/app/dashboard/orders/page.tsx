import React from 'react';
import BreadcrumbComponent from '@/components/my-ui/Breadcrumb';
import TotalRevenueCard from '@/components/my-ui/orders/TotalRevenueCard';
import Sidebar from '@/components/my-ui/Sidebar';
import SalesCard from '@/components/my-ui/orders/SalesCard';
import ActiveUsersCard from '@/components/my-ui/orders/ActiveUsersCard';
import TransactionsCard from '@/components/my-ui/orders/TransactionsCard';
import RecentSalesCard from '@/components/my-ui/orders/RecentSalesCard';
import { Toaster } from '@/components/ui/toaster';

const OrderPage: React.FC = () => {
  const breadcrumbItems = [
    { href: '/home', label: 'Accueil' },
    { href: '/dashboard', label: 'Tableau de bord' },
    { href: '/dashboard/orders', label: 'Commandes' },
  ];

  return (
    <div className="flex w-full">
      {/* Sidebar @/components/my-ui/Sidebar */}
      <Sidebar />
      <div className="flex flex-col gap-4 w-full p-8 h-full ml-14">
        <div className="flex">
          {/* BreadcrumbComponent @/components/my-ui/Breadcrumb */}
          <BreadcrumbComponent items={breadcrumbItems} />
        </div>
        <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* TotalRevenueCard @/components/my-ui/orders/TotalRevenueCard */}
          <TotalRevenueCard />

          {/* SalesCard @/components/my-ui/orders/SalesCard */}
          <SalesCard />
          {/* ActiveUsersCard @/components/my-ui/orders/ActiveUsersCard */}
          <ActiveUsersCard />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-8 h-full">
          <TransactionsCard />
          <RecentSalesCard />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
