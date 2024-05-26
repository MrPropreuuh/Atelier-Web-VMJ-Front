import React from 'react';
import RootLayout from '@/app/dashboard/layout';
import BreadcrumbComponent from '@/components/my-ui/Breadcrumb';
import TotalRevenueCard from '@/components/my-ui/orders/TotalRevenueCard';
import SubscriptionsCard from '@/components/my-ui/orders/SubscriptionsCard';
import SalesCard from '@/components/my-ui/orders/SalesCard';
import ActiveUsersCard from '@/components/my-ui/orders/ActiveUsersCard';
import TransactionsCard from '@/components/my-ui/orders/TransactionsCard';
import RecentSalesCard from '@/components/my-ui/orders/RecentSalesCard';
import Sidebar from '@/components/my-ui/Sidebar';

export default function OrderPage() {
  const breadcrumbItems = [
    { href: '/home', label: 'Accueil' },
    { href: '/dashboard', label: 'Tableau de bord' },
    { href: '/', label: 'Commandes' },
  ];

  return (
    <RootLayout>
      <Sidebar />
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-4 w-full p-8 h-full ml-14">
          <div className="flex">
            {/* Breadcrumb @/components/my-ui/Breadcrumb*/}
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
          <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* TotalRevenueCard @/components/my-ui/orders/TotalRevenueCard*/}
            <TotalRevenueCard />

            {/* SalesCard @/components/my-ui/orders/SalesCard*/}
            <SalesCard />

            {/* ActiveUsersCard @/components/my-ui/orders/ActiveUsersCard*/}
            <ActiveUsersCard />
          </div>

          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-8 h-full">
            {/* TransactionsCard @/components/my-ui/orders/TransactionsCard*/}
            <TransactionsCard />

            {/* RecentSalesCard @/components/my-ui/orders/RecentSalesCard*/}
            <RecentSalesCard />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}