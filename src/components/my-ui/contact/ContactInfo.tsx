import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
    return (
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
    );
};

export default ContactInfo;
