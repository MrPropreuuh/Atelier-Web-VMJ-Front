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
import { Activity, ArrowUpRight, CheckCircle, CreditCard, DollarSign, LineChart, MapPin, Minus, Plus, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Accueil() {
  return (
    <RootLayout>
      <body className="flex flex-row">
        <div className="flex flex-col gap-4 w-full p-8 h-full ml-14">
          <div className="flex">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home">Accueil</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Tableau de bord</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8">
      
            {/* Visiteurs Mensuels */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Controle produit</CardTitle>
              </CardHeader>
              <CardContent>
              <div className="flex flex-row gap-4">
                <Card className="flex flex-col ">
                  <CardTitle className="flex p-4 justify-center">
                    Ajout produit
                  </CardTitle>
                  <CardContent>
                  <Button className="flex flex-row w-full bg-background border border-borders text-foreground hover: hover:text-background">
                      <Plus />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="flex flex-col ">
                  <CardTitle className="flex p-4 justify-center">
                    Supprimer produit
                  </CardTitle>
                  <CardContent>
                  <Button className="flex flex-row w-full bg-background border border-borders text-foreground hover: hover:text-background">

                      <Minus />
                    </Button>
                  </CardContent>
                </Card>
                </div>
              </CardContent>
            </Card>

            {/* Performance des Produits */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Performance des Produits</CardTitle>
                <CardDescription>Produits les plus performants</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produit</TableHead>
                      <TableHead className="hidden xl:table-column">Catégorie</TableHead>
                      <TableHead className="hidden xl:table-column">Ventes</TableHead>
                      <TableHead className="text-right">Revenu</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Produit 1</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">Catégorie 1</TableCell>
                      <TableCell className="hidden xl:table-column">1 200</TableCell>
                      <TableCell className="text-right">12 000,00 €</TableCell>
                    </TableRow>
                    {/* Ajouter plus de lignes au besoin */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Retour d'Information des Clients */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Retour d'Information des Clients</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Star className="text-yellow-500 h-5 w-5" />
                  <div>
                    <p className="text-sm font-medium">"Excellent produit !"</p>
                    <p className="text-xs text-muted-foreground">- John Doe</p>
                  </div>
                </div>
                {/* Ajouter plus de retours au besoin */}
              </CardContent>
            </Card>

            {/* Liste de Tâches */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Liste de Tâches</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-500 h-5 w-5" />
                  <p className="text-sm">Mettre à jour le catalogue de produits</p>
                </div>
                {/* Ajouter plus de tâches au besoin */}
              </CardContent>
            </Card>

            {/* Carte de Chaleur des Visiteurs */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Carte de Chaleur des Visiteurs</CardTitle>
              </CardHeader>
              <CardContent>
                <MapPin className="h-48 w-full" /> {/* Remplacer par un composant de carte de chaleur réel */}
              </CardContent>
            </Card>
          </div>
        </div>
      </body>
    </RootLayout>
  );
}
