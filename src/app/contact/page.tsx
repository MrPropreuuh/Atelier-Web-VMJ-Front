import React from 'react';
import MainContent from '@/components/my-ui/contact/MainContent';
import Navbar from '@/components/home/NavbarHome';
import { Footer } from '@/components/home/FooterHome';

const ProfileFormPage: React.FC = () => {
  return (
    <div>
      {/* MainContent @/components/my-ui/contact/MainContent */}
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default ProfileFormPage;
