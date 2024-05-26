import RootLayout from '@/app/dashboard/layout';
import CustomBreadcrumb from '@/components/my-ui/Breadcrumb';
import ProductControlCard from '@/components/my-ui/dashboard/ProductControlCard'; // Importation du nouveau composant
import ClientFeedbackCard from '@/components/my-ui/dashboard/ClientFeedbackCard';
import ProductPerformanceCard from '@/components/my-ui/dashboard/ProductPerformanceCard';
import TaskListCard from '@/components/my-ui/dashboard/TaskListCard';
import Sidebar from '@/components/my-ui/Sidebar';

const DashboardPage: React.FC = () => {
  const breadcrumbItems = [
    { href: '/home', label: 'Accueil' },
    { href: '/dashboard', label: 'Tableau de bord' }
  ];
  return (
    <RootLayout>
      <Sidebar />
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-4 w-full p-8 h-full ml-14">
          <div className="flex">

            {/* Breadcrumb @/components/my-ui/dashboard//Breadcrumb */}
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
          <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">


            <div className="col-span-2">
              {/* Controle produit @/components/my-ui/dashboard//ProductControlCard*/}
              <ProductControlCard />

              {/* Retour d'Information des Clients @/components/my-ui/dashboard//ClientFeedbackCard*/}
              <ClientFeedbackCard />
            </div>

            <div className="col-span-2">

              {/* Performance des Produits @/components/my-ui/dashboard//ProductPerformanceCard*/}
              <ProductPerformanceCard />

              {/* Liste de Tâches @/components/my-ui/dashboard//TaskListCard*/}
              <TaskListCard />
            </div>

          </div>
        </div>
      </div>
    </RootLayout>
  );
}

export default DashboardPage;
