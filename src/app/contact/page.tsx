import React from 'react';
import RootLayout from '@/app/dashboard/layout';
import MainContent from '@/components/my-ui/contact/MainContent';

const ProfileFormPage: React.FC = () => {
  return (
    <RootLayout>
      {/* MainContent @/components/my-ui/contact/MainContent */}
      <MainContent />
    </RootLayout>
  );
};

export default ProfileFormPage;
