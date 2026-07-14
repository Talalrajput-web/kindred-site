import { Shield, Heart, Menu, X, User } from 'lucide-react';
import { User as UserType } from '../types';
import { useState } from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, projectId?: string) => void;
  user: UserType | null;
  onLogout: () => void;
}

export default function Navbar({ currentView, onNavigate, user, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Discover', id: 'discover' },
    { label: 'Project Detail', id: 'project-detail', detailId: 'roots-of-resilience' },
    { label: 'Organization', id: 'org-profile' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-serif font-semibold text-lg shadow-md shadow-emerald-200 transition-transform group-hover:scale-105">
              K
            </div>
            <div>
              <span className="font-sans font-bold text-xl tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors">
                Kindred
              </span>
              <div className="flex items-center space-x-1 text-[9px] font-mono tracking-widest text-emerald-600 font-semibold uppercase leading-none">
                <Shield className="w-2.5 h-2.5 inline" />
                <span>Transparent</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id || (item.id === 'project-detail' && currentView === 'project-detail');
              return (
                <button
                  key={item.label}
                  id={`nav-item-${item.id}`}
                  onClick={() => {
                    if (item.detailId) {
                      onNavigate(item.id, item.detailId);
                    } else {
                      onNavigate(item.id);
                    }
                  }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50/70 font-semibold'
                      : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className={`flex items-center space-x-2 p-1.5 pr-3 rounded-full border transition-all ${
                    currentView === 'dashboard'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-emerald-500/20"
                  />
                  <span className="text-xs font-semibold">{user.name.split(' ')[0]}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="text-xs font-medium text-gray-400 hover:text-rose-600 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('signin')}
                className="text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors"
              >
                Sign In
              </button>
            )}

            <button
              onClick={() => onNavigate('checkout', 'roots-of-resilience')}
              className="px-4.5 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-md shadow-emerald-200 hover:shadow-lg hover:shadow-emerald-200"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => onNavigate('checkout', 'roots-of-resilience')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-all"
            >
              Donate
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-3 px-4 space-y-1 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.label}
                onClick={() => {
                  setIsOpen(false);
                  if (item.detailId) {
                    onNavigate(item.id, item.detailId);
                  } else {
                    onNavigate(item.id);
                  }
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="border-t border-gray-100 pt-3 mt-3">
            {user ? (
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate('dashboard');
                  }}
                  className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  <img src={user.avatar} className="w-8 h-8 rounded-full" alt="" />
                  <span>Sarah's Dashboard</span>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLogout();
                  }}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('signin');
                }}
                className="block w-full text-left px-3 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-700"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
