import Image from "next/image";
import Link from "next/link";
import RootLayout from '@/app/dashboard/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/my-ui/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowUpRight, CheckCircle, CreditCard, DollarSign, LineChart, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <RootLayout>
    <body className="flex flex-row">
      <div className="flex flex-col gap-4 w-full p-8 h-full ml-14">
        <div className="flex">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/home">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8">
    

      {/* Monthly Visitors Chart */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Monthly Visitors</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart className="h-48 w-full" /> {/* Replace with actual chart component */}
        </CardContent>
      </Card>

      {/* Product Performance */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Product Performance</CardTitle>
          <CardDescription>Top performing products</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="hidden xl:table-column">Category</TableHead>
                <TableHead className="hidden xl:table-column">Sales</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Product 1</div>
                </TableCell>
                <TableCell className="hidden xl:table-column">Category 1</TableCell>
                <TableCell className="hidden xl:table-column">1,200</TableCell>
                <TableCell className="text-right">$12,000.00</TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Customer Feedback */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Customer Feedback</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-4">
            <Star className="text-yellow-500 h-5 w-5" />
            <div>
              <p className="text-sm font-medium">"Great product!"</p>
              <p className="text-xs text-muted-foreground">- John Doe</p>
            </div>
          </div>
          {/* Add more feedback as needed */}
        </CardContent>
      </Card>

      {/* To-Do List */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>To-Do List</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-4">
            <CheckCircle className="text-green-500 h-5 w-5" />
            <p className="text-sm">Update product catalog</p>
          </div>
          {/* Add more tasks as needed */}
        </CardContent>
      </Card>

      {/* Visitor Heatmap */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Visitor Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <MapPin className="h-48 w-full" /> {/* Replace with actual heatmap component */}
        </CardContent>
      </Card>
    </div>
        
      </div>
    </body>
    </RootLayout>
  );
}   