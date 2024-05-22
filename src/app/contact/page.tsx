"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

// Mise à jour du schéma de validation pour inclure les champs nom, prénom, e-mail et contenu
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="flex justify-center items-center min-h-screen">
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
            répondre à toutes les demandes dans les plus brefs délais et de vous fournir l'assistance
            dont vous avez besoin.
          </p>
        </div>
        <div className="w-1/2 p-8 border-l">
          <div className="form-container">
            <div className="contact-info mb-4">
              <div className="contact-item">
                <span role="img" aria-label="email" className="contact-logo">📧</span>
                <p>email@example.com</p>
              </div>
              <div className="contact-item">
                <span role="img" aria-label="phone" className="contact-logo">📞</span>
                <p>+1234567890</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mb-4">Formulaire de contact</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 form-content">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} className="input-field" />
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
                        <Input placeholder="Doe" {...field} className="input-field" />
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
                        <Input type="email" placeholder="john.doe@example.com" {...field} className="input-field" />
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
                      <FormLabel>Contenu</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tapez votre message ici..." {...field} className="input-field" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center">
                  <Button type="submit" className="submit-button">Submit</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileForm;
