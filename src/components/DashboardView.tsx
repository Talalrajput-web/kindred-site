import React, { useState } from 'react';
import { User, Project, Contribution } from '../types';
import { Shield, Sparkles, LayoutGrid, List, FileCheck, ExternalLink, Mail, MessageSquare, Download, Clock, ChevronRight, Award } from 'lucide-react';

interface DashboardViewProps {
  user: User;
  followedProjects: Project[];
  contributions: Contribution[];
  onNavigate: (view: string, projectId?: string) => void;
}

export default function DashboardView({ user, followedProjects, contributions, onNavigate }: DashboardViewProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'followed' | 'contributions'>('followed');
  
  // Interactive widget state
  const [messageText, setMessageText] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      setMessageSent(true);
      setMessageText('');
      setTimeout(() => setMessageSent(false), 4000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top welcome profile panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5 text-center md:text-left flex-col md:flex-row gap-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-emerald-500/20"
              />
              <span className="absolute bottom-0 right-0 p-1.5 bg-emerald-600 rounded-full text-white">
                <Award className="w-4 h-4" />
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">{user.name}</h1>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                  {user.verificationLevel} Level Vetted
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                Your collective impact has directly touched <strong className="text-emerald-700">{user.impactLives} families</strong> this quarter.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('discover')}
              className="px-4.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all"
            >
              Support More Causes
            </button>
            <button className="px-4.5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-xl text-xs font-bold transition-all border border-gray-200">
              Audit Logs
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Total Impact Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Total Contributions</span>
              <span className="text-3xl font-serif font-bold text-gray-950">${user.totalDonated.toLocaleString()}</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between text-xs text-gray-500">
              <span>Reforested: <strong>340 trees</strong></span>
              <span>Water Cleaned: <strong>1,200L</strong></span>
            </div>
          </div>

          {/* Recurring Commitments */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Monthly Direct Pledges</span>
              <span className="text-3xl font-serif font-bold text-gray-950">{user.recurringDonations} Active</span>
            </div>
            <div className="border-t border-gray-100 pt-3 text-[11px] text-gray-500 space-y-1">
              <div className="flex justify-between font-medium">
                <span>🌳 Amazon Watch</span>
                <span className="text-emerald-700 font-bold">$25/mo</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>💧 Colombia Gravity Filters</span>
                <span className="text-emerald-700 font-bold">$15/mo</span>
              </div>
            </div>
          </div>

          {/* Verification / Badges progress */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Impact Level Progress</span>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-lg font-serif font-bold text-emerald-800">{user.verificationLevel}</span>
                <span className="text-xs text-gray-400 font-semibold">82% to Platinum</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed font-semibold">
              ⭐ Platinum donors unlock custom community ledger audits and satellite coordination privileges.
            </p>
          </div>

        </div>

        {/* Dynamic Impact Report Callout */}
        <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left flex-col sm:flex-row gap-3">
            <div className="p-3 bg-emerald-800 text-white rounded-xl">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Q3 Transparent Forest Restoration Report Vetted</h4>
              <p className="text-xs text-emerald-300/80 mt-0.5">Your satellite GPS coordinates for the 340 replanted Kayapó saplings are loaded.</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-all flex items-center space-x-1 whitespace-nowrap">
            <FileCheck className="w-4 h-4" />
            <span>Open Verification Map</span>
          </button>
        </div>

        {/* Split Screen Panel for Projects list vs Side Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main List */}
          <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            
            {/* Headers */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('followed')}
                  className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
                    activeTab === 'followed'
                      ? 'border-emerald-600 text-emerald-700 font-bold'
                      : 'border-transparent text-gray-400 hover:text-gray-900'
                  }`}
                >
                  Followed Projects
                </button>
                <button
                  onClick={() => setActiveTab('contributions')}
                  className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
                    activeTab === 'contributions'
                      ? 'border-emerald-600 text-emerald-700 font-bold'
                      : 'border-transparent text-gray-400 hover:text-gray-900'
                  }`}
                >
                  Contribution History
                </button>
              </div>

              {activeTab === 'followed' && (
                <div className="flex bg-gray-50 border border-gray-100 rounded-lg p-0.5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-400'}`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-400'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {activeTab === 'followed' ? (
              viewMode === 'grid' ? (
                /* Grid View */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {followedProjects.map((project) => {
                    const percent = Math.min(100, Math.round((project.raised / project.goal) * 100));
                    return (
                      <div key={project.id} className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between text-xs text-emerald-600 font-semibold uppercase tracking-wide">
                            <span>{project.category}</span>
                            <span className="text-[10px] bg-emerald-50 px-2 py-0.5 rounded-md">Vetted</span>
                          </div>
                          <h4 className="font-serif font-bold text-gray-950 text-sm mt-1 cursor-pointer hover:text-emerald-700 line-clamp-1" onClick={() => onNavigate('project-detail', project.id)}>
                            {project.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{project.description}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${percent}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                            <span>{percent}% Vetted</span>
                            <span>{project.daysLeft} days remaining</span>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => onNavigate('project-detail', project.id)}
                              className="flex-1 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 text-[10px] font-bold rounded-lg text-center"
                            >
                              Updates
                            </button>
                            <button className="flex-1 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-100 text-[10px] font-bold rounded-lg text-center">
                              Ledger PDF
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* List View */
                <div className="space-y-4">
                  {followedProjects.map((project) => (
                    <div key={project.id} className="p-4 border border-gray-100 rounded-xl flex items-center justify-between hover:border-gray-200 transition-colors gap-4">
                      <div className="flex items-center space-x-3.5">
                        <img src={project.image} alt="" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                        <div>
                          <h4 className="font-serif font-bold text-gray-950 text-sm hover:text-emerald-700 cursor-pointer" onClick={() => onNavigate('project-detail', project.id)}>{project.title}</h4>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{project.organization}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onNavigate('project-detail', project.id)}
                        className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold transition-all whitespace-nowrap"
                      >
                        Vows & Updates
                      </button>
                    </div>
                  ))}
                </div>
              )
            ) : (
              /* Contributions log */
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-bold uppercase tracking-wider">
                      <th className="pb-3 pl-2">Cause Project</th>
                      <th className="pb-3">Pledge Amount</th>
                      <th className="pb-3">Date Vow Cleared</th>
                      <th className="pb-3">Audit Receipt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contributions.map((tx) => (
                      <tr key={tx.id} className="border-b border-gray-50 hover:bg-gray-50/40 transition-colors">
                        <td className="py-3 pl-2 max-w-[200px] truncate">
                          <span className="font-bold text-gray-900 cursor-pointer hover:text-emerald-700" onClick={() => onNavigate('project-detail', tx.projectId)}>
                            {tx.projectTitle}
                          </span>
                        </td>
                        <td className="py-3 font-mono font-bold text-emerald-700">${tx.amount}.00</td>
                        <td className="py-3 text-gray-500 font-semibold">{tx.date}</td>
                        <td className="py-3">
                          <button className="flex items-center space-x-1 p-1 bg-gray-50 hover:bg-emerald-50 border border-gray-100 text-[10px] text-gray-600 hover:text-emerald-800 rounded-lg transition-all font-bold">
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Receipt</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Right Side Support Widget / Warden chat */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct field-chat widget */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-5">
              <div className="flex items-start space-x-3 border-b border-gray-100 pb-3">
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-gray-950">Field Warden Hotline</h4>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase">Direct Connection</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 leading-relaxed">
                As a <strong>Gold Vetted Donor</strong>, you have direct routing rights to message Chief Txucarramãe and the Amazon Watch field unit.
              </p>

              {messageSent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-center text-xs font-semibold animate-pulse">
                  ✓ Vow transmission successfully routed to Amazon satellite node. A reply will register shortly!
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3">
                  <textarea
                    placeholder="Enter message for field rangers..."
                    rows={3}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    required
                    className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Transmit via Satellite</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Platform Credential summary */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 text-center">
              <Award className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900">Vetted Charity Pledge Holder</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">
                You are registered on the public transparent ledger as Sarah Jenkins. Under our standard audit clauses, your total pledge portfolio maintains a 100% directly matched certification rate.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
