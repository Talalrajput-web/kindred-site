import React, { useState } from 'react';
import { Organization, Project } from '../types';
import { Shield, Sparkles, MapPin, CheckCircle2, Star, Mail, Award, ArrowRight, Heart } from 'lucide-react';

interface OrgProfileViewProps {
  organization: Organization;
  projects: Project[];
  onNavigate: (view: string, projectId?: string) => void;
}

export default function OrgProfileView({ organization, projects, onNavigate }: OrgProfileViewProps) {
  const [followed, setFollowed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Get active projects specifically managed by this organization
  const orgProjects = projects.filter((p) => p.orgId === organization.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16 font-sans text-gray-800">
      {/* Banner */}
      <div className="relative h-60 sm:h-80 w-full overflow-hidden">
        <img
          src={organization.bannerImage}
          alt={organization.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20 z-10 space-y-8">
        
        {/* Profile Card Summary Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            <img
              src={organization.logo}
              alt={organization.name}
              className="w-28 h-28 rounded-2xl object-cover bg-white p-1 shadow-md ring-4 ring-white relative -mt-10 md:mt-0"
            />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h1 className="text-xl sm:text-3xl font-serif font-bold text-gray-950">{organization.name}</h1>
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 border border-emerald-200">
                  <Shield className="w-3 h-3 text-emerald-700" />
                  <span>Vetted NGO</span>
                </span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-gray-500 font-semibold">
                <span className="flex items-center space-x-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{organization.rating}</span>
                </span>
                <span>•</span>
                <span>{(organization.followers + (followed ? 1 : 0)).toLocaleString()} Followers</span>
                <span>•</span>
                <span className="text-emerald-700">95%+ direct-to-field rate</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFollowed(!followed)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                followed
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200'
              }`}
            >
              {followed ? '✓ Following NGO' : 'Follow Organization'}
            </button>
          </div>
        </div>

        {/* Main Columns Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Mission, credentials and impact stats */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview / Mission */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
              <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">Mission Vows</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-semibold uppercase tracking-wider text-emerald-800">
                "{organization.mission}"
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {organization.description}
              </p>
            </div>

            {/* Impact stats grid */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
              <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">Verified Impact Ledger</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {organization.impactStats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-base sm:text-lg font-serif font-bold text-emerald-800 block">{stat.value}</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active campaigns managed by this NGO */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-gray-900 px-2">Active Campaigns</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {orgProjects.map((project) => {
                  const percent = Math.min(100, Math.round((project.raised / project.goal) * 100));
                  return (
                    <div key={project.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-5 space-y-4">
                        <div>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">{project.category}</span>
                          <h4 className="font-serif font-bold text-gray-950 text-sm leading-snug line-clamp-1 cursor-pointer hover:text-emerald-700" onClick={() => onNavigate('project-detail', project.id)}>
                            {project.title}
                          </h4>
                        </div>

                        <div className="space-y-3">
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${percent}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                            <span>{percent}% Vetted</span>
                            <span>{project.daysLeft} days remaining</span>
                          </div>
                          <button
                            onClick={() => onNavigate('project-detail', project.id)}
                            className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-800 rounded-lg text-xs font-bold transition-all text-center"
                          >
                            Enter Project Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Credentials check, field journal list */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Vetted credentials bento card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 border-b border-gray-100 pb-3">
                <Award className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-sm text-gray-900">Vetted Credentials</h4>
              </div>
              
              <ul className="space-y-3">
                {organization.verifiedCredentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NGO Newsletters Subscribe */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 border-b border-gray-100 pb-3">
                <Mail className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-sm text-gray-900">Field Journals Newsletter</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Receive raw weekly field updates, photos, and satellite-matched growth logs directly from Amazon Watch monitors.
              </p>

              {subscribed ? (
                <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-center text-xs font-semibold animate-pulse">
                  ✓ Successfully registered.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    placeholder="sarah@jenkins.com"
                    className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all"
                  >
                    Subscribe to Journals
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
