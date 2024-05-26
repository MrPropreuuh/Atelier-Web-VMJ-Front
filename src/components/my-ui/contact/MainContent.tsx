import React from 'react';
import ContactInfo from '@/components/my-ui/contact/ContactInfo';
import ContactForm from '@/components/my-ui/contact/ContactForm';

const MainContent: React.FC = () => {
    return (
        <main className="flex justify-center items-center min-h-screen w-full">
            <div className="flex w-full max-w-5xl mx-auto border rounded-lg shadow-lg">
                { /* ContactInfo @/components/my-ui/contact/ContactInfo */}
                <ContactInfo />

                { /* ContactForm @/components/my-ui/contact/ContactForm */}
                <ContactForm />
            </div>
        </main>
    );
};

export default MainContent;
