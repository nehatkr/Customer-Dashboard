import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import MyAccountPage from './components/MyAccountPage';
import MyDetailsPage from './components/MyDetailsPage';
import LoginPage from './components/LoginPage';

function AppContent() {
  const { user, profile, loading, signOut } = useAuth();
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = async (page: string) => {
    if (page === 'logout') {
      await signOut();
      setActivePage('home');
    } else {
      setActivePage(page);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F3F1FF] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#916486] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile) {
    return <LoginPage />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage userName={profile.name} />;
      case 'account':
        return <MyAccountPage userName={profile.name} userEmail={profile.email} />;
      case 'details':
        return <MyDetailsPage />;
      default:
        return <HomePage userName={profile.name} />;
    }
  };

  return (
    <Layout
      activePage={activePage}
      onNavigate={handleNavigate}
      userName={profile.name}
      userEmail={profile.email}
    >
      {renderPage()}
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
