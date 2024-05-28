"use client";

import { useEffect } from 'react';
import CustomBreadcrumb from '@/components/my-ui/Breadcrumb';
import ProductControlCard from '@/components/my-ui/dashboard/ProductControlCard';
import ClientFeedbackCard from '@/components/my-ui/dashboard/ClientFeedbackCard';
import ProductPerformanceCard from '@/components/my-ui/dashboard/ProductPerformanceCard';
import TaskListCard from '@/components/my-ui/dashboard/TaskListCard';
import Sidebar from '@/components/my-ui/Sidebar';
import { Toaster } from '@/components/ui/toaster';

const DashboardPage: React.FC = () => {
    const breadcrumbItems = [
        { href: '/home', label: 'Accueil' },
        { href: '/dashboard', label: 'Tableau de bord' }
    ];

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col gap-4 w-full p-8 h-full ml-14">
                <div className="flex">
                    <CustomBreadcrumb items={breadcrumbItems} />
                </div>
                <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="col-span-2">
                        <ProductControlCard />
                        <TaskListCard />
                    </div>
                    <div className="col-span-2">
                        <ProductPerformanceCard />
                        <ClientFeedbackCard />
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default DashboardPage;
