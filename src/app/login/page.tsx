"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import axios from 'axios';

export function TabsDemo() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/user/login', {
        email: loginEmail,
        password: loginPassword,
      });
      if (response.status === 200) {
        const userRole = response.data.user.role;
        if (userRole === 'admin') {
          router.push('/dashboard'); // Redirige vers la page de dashboard pour les admins
        } else {
          router.push('/home'); // Redirige vers la page de confirmation pour les membres
        }
      }
    } catch (error) {
      alert('Erreur lors de la connexion: Email ou mot de passe incorrect.');
      console.error('Erreur lors de la connexion:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/user/register', {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
      });
      if (response.status === 200) {
        alert('Inscription réussie');
        router.refresh(); // Rechargement de la page après une inscription réussie
      }
    } catch (error) {
      alert('Erreur lors de l\'inscription: Cet email est déjà utilisé.');
      console.error('Erreur lors de l\'inscription:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-[500px]">
        <Tabs defaultValue="account" className="border rounded-lg shadow-lg">
          <TabsList className="grid w-full grid-cols-2 border-b">
            <TabsTrigger value="account">Connexion</TabsTrigger>
            <TabsTrigger value="password">Inscription</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Connexion</CardTitle>
                <CardDescription>
                  Connectez-vous ci-dessous :
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="loginEmail">Adresse e-mail</Label>
                  <Input id="loginEmail" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="loginPassword">Mot de passe</Label>
                  <Input id="loginPassword" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLogin}>Connexion</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Inscription</CardTitle>
                <CardDescription>
                  Inscrivez-vous ci-dessous :
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="registerEmail">Adresse e-mail</Label>
                  <Input id="registerEmail" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="registerUsername">Pseudo</Label>
                  <Input id="registerUsername" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="registerPassword">Mot de passe</Label>
                  <Input id="registerPassword" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleRegister}>Inscription</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default TabsDemo;
