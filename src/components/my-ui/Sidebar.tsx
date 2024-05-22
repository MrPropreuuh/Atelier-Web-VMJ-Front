import React from 'react';
import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from 'lucide-react';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 flex flex-col bg-background items-center gap-4 px-2 sm:py-5 w-14 min-h-screen border-r border-border">
      {/* <Image src="/logo.png" alt="" width={32} height={32} /> */}
      <TooltipProvider>
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Orders</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Orders</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Package className="h-5 w-5" />
              <span className="sr-only">Products</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Products</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Users2 className="h-5 w-5" />
              <span className="sr-only">Customers</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Customers</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <LineChart className="h-5 w-5" />
              <span className="sr-only">Analytics</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Analytics</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex mt-auto h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only ">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};

export default Sidebar;
