import React from 'react';
import { Home, User, BarChart3, LogOut, Menu, X } from 'lucide-react';

interface LayoutProps {
  activePage: string;
  onNavigate: (page: string) => void;
  children: React.ReactNode;
  userName: string;
  userEmail: string;
}

export default function Layout({ activePage, onNavigate, children, userName, userEmail }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'account', label: 'My Account', icon: User },
    { id: 'details', label: 'My Details Analysis', icon: BarChart3 },
    { id: 'logout', label: 'Log out', icon: LogOut },
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#916486] text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-[#916486] rounded-full"></div>
              </div>
              <span className="text-xl font-semibold">UserLens</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-white hover:bg-[#7d5673] p-2 rounded"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 pt-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                    activePage === item.id
                      ? 'bg-[#F3F1FF] text-[#916486]'
                      : 'text-white hover:bg-[#7d5673]'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-gray-600 hover:text-gray-900 p-2 rounded"
          >
            <Menu size={24} />
          </button>

          <div className="flex-1 lg:flex-none"></div>

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div>
                <div className="text-sm font-semibold text-gray-900 text-right">{userName}</div>
                <div className="text-xs text-gray-500 text-right">{userEmail}</div>
              </div>
              <div className="w-10 h-10 bg-[#916486] rounded-full flex items-center justify-center text-white font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#F3F1FF] p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
