"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from 'lucide-react';
import RootLayout from "../layout";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  content: z.string().min(1, { message: "Content is required." }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post('http://localhost:3001/contact', values);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  }

  return (
    <RootLayout>
      <main className="flex justify-center items-center min-h-screen w-full">
        <div className="flex w-full max-w-5xl mx-auto border rounded-lg shadow-lg">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi nous contacter ?</h2>
            <p className="text-gray-600 mb-4">
              Nous sommes toujours à l'écoute de nos clients et visiteurs. Si vous avez des questions,
              des suggestions ou si vous avez besoin d'aide, n'hésitez pas à nous contacter. Votre
              retour est précieux pour nous et nous aide à améliorer continuellement nos services.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Sujets populaires :</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Support technique : Obtenez de l'aide pour résoudre vos problèmes techniques.</li>
              <li>Commentaires et suggestions : Partagez vos idées pour améliorer nos services.</li>
              <li>Demandes de renseignements : Posez vos questions concernant nos produits ou services.</li>
              <li>Partenariats et collaborations : Explorez les opportunités de collaboration avec nous.</li>
              <li>Autres : Pour toutes autres questions ou préoccupations, n'hésitez pas à nous écrire.</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Autres informations :</h3>
            <p className="text-gray-600">
              Si vous avez des préoccupations ou des questions spécifiques qui ne sont pas couvertes
              dans les sujets populaires, veuillez nous contacter directement. Nous nous efforçons de
              répondre à toutes les demandes dans les plus brefs délais.
            </p>
          </div>
          <div className="w-1/2 p-8 border-l shadow-lg">
            <div className="mb-4">
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <Mail className="text-4xl mr-2" aria-label="email" />
                  <p>email@example.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-4xl mr-2" aria-label="phone" />
                  <p>+1234567890</p>
                </div>
              </div>
            </div>
            <h1 className="text-center text-4xl mt-8 mb-8">Formulaire de contact</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} className="w-full border-border rounded-md shadow-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de famille</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} className="w-full border-border rounded-md shadow-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} className="w-full border-border rounded-md shadow-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Votre message..." {...field} className="w-full h-32 border-border rounded-md shadow-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="block mx-auto mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
                  Envoyer
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}

export default ProfileForm;
