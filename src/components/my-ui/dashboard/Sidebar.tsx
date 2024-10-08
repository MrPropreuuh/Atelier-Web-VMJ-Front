"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, Package2, Settings, ShoppingCart } from 'lucide-react';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 flex flex-col bg-background items-center gap-4 px-2 sm:py-5 w-14 min-h-screen border-r border-border">
      {/* <Image src="/logo.png" alt="" width={32} height={32} /> */}
      <TooltipProvider>
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Artelier</span>
        </Link>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard"
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${pathname === '/dashboard' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                }`}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Tableau de bord</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Tableau de bord</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard/orders"
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${pathname === '/dashboard/orders' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Commandes</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Commandes</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex mt-auto h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};

export default Sidebar;
