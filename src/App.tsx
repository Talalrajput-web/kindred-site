import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import DiscoverView from './components/DiscoverView';
import ProjectDetailView from './components/ProjectDetailView';
import CheckoutView from './components/CheckoutView';
import DashboardView from './components/DashboardView';
import OrgProfileView from './components/OrgProfileView';
import SignInView from './components/SignInView';

import { mockUser, mockOrg, mockProjects, mockContributions } from './data';
import { Project, ProjectComment, Contribution, User } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('roots-of-resilience');
  const [checkoutAmount, setCheckoutAmount] = useState<number>(100);
  const [user, setUser] = useState<User | null>(mockUser);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [contributions, setContributions] = useState<Contribution[]>(mockContributions);

  // Dynamic Navigation
  const handleNavigate = (view: string, projectId?: string, amount?: number) => {
    setCurrentView(view);
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    if (amount) {
      setCheckoutAmount(amount);
    }
    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Login action handler
  const handleLoginSuccess = () => {
    setUser(mockUser);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  // Add Comment handler
  const handleAddComment = (projectId: string, newComment: ProjectComment) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            comments: [newComment, ...p.comments],
          };
        }
        return p;
      })
    );
  };

  // Donation Checkout completion handler
  const handleCompleteDonation = (projectId: string, finalAmount: number) => {
    // 1. Update project raised amount & donors count
    setProjects((prevProjects) =>
      prevProjects.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            raised: p.raised + finalAmount,
            donorsCount: p.donorsCount + 1,
          };
        }
        return p;
      })
    );

    // 2. Add transaction record to Sarah's history
    const matchedProject = projects.find((p) => p.id === projectId);
    const newTx: Contribution = {
      id: `TX-${Math.floor(100000 + Math.random() * 900000)}`,
      projectTitle: matchedProject ? matchedProject.title : 'Roots of Resilience: Restoring the Heart of the Amazon',
      projectId: projectId,
      amount: finalAmount,
      date: 'Today',
      status: 'Completed',
      receiptUrl: '#',
    };
    
    setContributions((prev) => [newTx, ...prev]);

    // 3. Increment Sarah's total count
    if (user) {
      setUser((prevUser) => {
        if (!prevUser) return null;
        return {
          ...prevUser,
          totalDonated: prevUser.totalDonated + finalAmount,
          impactLives: prevUser.impactLives + 1,
        };
      });
    }
  };

  // Resolve active project
  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Dynamic Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView projects={projects} onNavigate={handleNavigate} />
        )}
        
        {currentView === 'discover' && (
          <DiscoverView projects={projects} onNavigate={handleNavigate} />
        )}
        
        {currentView === 'project-detail' && (
          <ProjectDetailView
            project={activeProject}
            onNavigate={handleNavigate}
            onAddComment={handleAddComment}
          />
        )}
        
        {currentView === 'checkout' && (
          <CheckoutView
            project={activeProject}
            amount={checkoutAmount}
            user={user}
            onCompleteDonation={handleCompleteDonation}
            onNavigate={handleNavigate}
          />
        )}
        
        {currentView === 'dashboard' && user && (
          <DashboardView
            user={user}
            followedProjects={projects.slice(0, 2)}
            contributions={contributions}
            onNavigate={handleNavigate}
          />
        )}
        
        {currentView === 'org-profile' && (
          <OrgProfileView
            organization={mockOrg}
            projects={projects}
            onNavigate={handleNavigate}
          />
        )}
        
        {currentView === 'signin' && (
          <SignInView
            onLoginSuccess={handleLoginSuccess}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Common Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
