import React, { useState } from 'react';
import { Project, ProjectComment } from '../types';
import { Shield, MapPin, Users, Calendar, Download, FileText, CheckCircle, MessageSquare, ArrowLeft, Heart, Sparkles } from 'lucide-react';

interface ProjectDetailViewProps {
  project: Project;
  onNavigate: (view: string, projectId?: string, amount?: number) => void;
  onAddComment: (projectId: string, comment: ProjectComment) => void;
}

type TabType = 'story' | 'updates' | 'comments' | 'transparency';

export default function ProjectDetailView({ project, onNavigate, onAddComment }: ProjectDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('story');
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  
  // Comment Form States
  const [commentName, setCommentName] = useState('Sarah Jenkins');
  const [commentText, setCommentText] = useState('');
  const [commentAmount, setCommentAmount] = useState<number>(250);

  const percent = Math.min(100, Math.round((project.raised / project.goal) * 100));

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  const finalDonationAmount = selectedAmount || parseFloat(customAmount) || 25;

  const handleDonateClick = () => {
    onNavigate('checkout', project.id, finalDonationAmount);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: ProjectComment = {
      id: `comment-${Date.now()}`,
      authorName: commentName,
      authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqkZoCajPd_G3y6w2YKp2ZgB2Bz2_VRCd5TlYoLz-I-yntX0zGShKis2yNW6j3OuJnfglW5nleCPQJfu4hfOIlUufkPDKOaUTDGvXchkjjyoQn9GZGRYP4KSZZIMs78tenRgHvEmuWXMbVDT0JHb5iDKGQyAonNeuPV6qhe2B4yjyvsDwf4sGmsR5Q5u2QIx57xsf2-CQAxMPet17M7wq0c2owC5ZLwRKX3xsHsCAJpkFUbDPGqRfHEQ',
      content: commentText,
      date: 'Today',
      amount: commentAmount || undefined
    };

    onAddComment(project.id, newComment);
    setCommentText('');
  };

  return (
    <div className="bg-white min-h-screen py-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs / Back button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => onNavigate('discover')}
            className="flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-emerald-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Discover</span>
          </button>
          
          <div className="hidden sm:flex items-center space-x-1.5 text-xs font-semibold text-gray-400">
            <span>Discover</span>
            <span>/</span>
            <span>{project.category}</span>
            <span>/</span>
            <span className="text-gray-950 truncate max-w-[200px]">{project.title}</span>
          </div>
        </div>

        {/* Title Block */}
        <div className="space-y-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold font-mono tracking-wider bg-emerald-50 text-emerald-800 rounded-lg uppercase">
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs font-bold font-mono tracking-wider bg-rose-50 text-rose-800 rounded-lg uppercase flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 inline" />
              <span>RADICAL TRANSPARENCY VERIFIED</span>
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-gray-950 tracking-tight leading-tight">
            {project.title}
          </h1>
          
          <p className="text-sm font-medium text-gray-500">
            By <span onClick={() => onNavigate('org-profile')} className="text-emerald-700 hover:underline cursor-pointer font-bold">{project.organization}</span>
          </p>
        </div>

        {/* Image Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2 relative aspect-[16/10] md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden shadow-md group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs font-bold font-mono uppercase tracking-widest bg-emerald-600 px-2.5 py-1 rounded-lg">
                Active Restoration Area
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:h-[400px]">
            {project.gallery.slice(0, 2).map((imgUrl, idx) => (
              <div key={idx} className="aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden shadow-sm hover:scale-[1.02] transition-all border border-gray-100">
                <img src={imgUrl} alt="Gallery item" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Story, Updates, Comments, Transparency tabs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tab navigation */}
            <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-none">
              {(['story', 'updates', 'comments', 'transparency'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap capitalize ${
                    activeTab === tab
                      ? 'border-emerald-600 text-emerald-700 font-bold'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {tab === 'transparency' ? 'Transparency Report' : tab}
                  {tab === 'comments' && ` (${project.comments.length})`}
                  {tab === 'updates' && ` (${project.updates.length})`}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="py-4">
              
              {/* Tab 1: Story */}
              {activeTab === 'story' && (
                <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <div className="whitespace-pre-line font-normal text-gray-600">
                    {project.longStory}
                  </div>
                  
                  {/* Highlights section */}
                  <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100/50 space-y-4">
                    <h4 className="text-emerald-900 font-bold text-sm uppercase tracking-wider flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Direct Field Impact Breakdown</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm flex items-start space-x-3">
                        <span className="text-xl">🌳</span>
                        <div>
                          <h5 className="font-bold text-gray-900 text-xs">Agroforestry & Nurseries</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Empowering Indigenous women managing native seed collections.</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm flex items-start space-x-3">
                        <span className="text-xl">📡</span>
                        <div>
                          <h5 className="font-bold text-gray-900 text-xs">Drone Flight Systems</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Vetting log incursions and mapping sapling health in real-time.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Updates */}
              {activeTab === 'updates' && (
                <div className="space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
                  {project.updates.map((update) => (
                    <div key={update.id} className="relative pl-10 space-y-3">
                      {/* Timeline dot */}
                      <span className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-white" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">{update.date}</span>
                        <span className="text-xs text-gray-400 font-medium">{update.author}</span>
                      </div>
                      
                      <h3 className="text-lg font-serif font-bold text-gray-950">{update.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{update.content}</p>
                      
                      {update.image && (
                        <div className="rounded-xl overflow-hidden aspect-[16/9] border border-gray-100 shadow-sm max-w-md">
                          <img src={update.image} className="w-full h-full object-cover" alt="" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Comments & Vetted Guestbook */}
              {activeTab === 'comments' && (
                <div className="space-y-8">
                  {/* Comments list */}
                  <div className="space-y-6">
                    {project.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-4 bg-gray-50/50 p-5 rounded-2xl border border-gray-50">
                        <img src={comment.authorAvatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-gray-950 text-sm">{comment.authorName}</span>
                            <span className="text-[10px] text-gray-400 font-semibold">{comment.date}</span>
                          </div>
                          
                          {comment.amount && (
                            <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded-md text-[10px] font-bold uppercase tracking-wider">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                              <span>Verified Donor • ${comment.amount}</span>
                            </span>
                          )}
                          
                          <p className="text-sm text-gray-600 leading-relaxed mt-2">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comment Form */}
                  <form onSubmit={handleCommentSubmit} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                    <h4 className="text-gray-950 font-serif font-bold text-base flex items-center space-x-1.5">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Post verified guestbook note</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Name</label>
                        <input
                          type="text"
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Donor Level (Optional)</label>
                        <select
                          value={commentAmount}
                          onChange={(e) => setCommentAmount(parseInt(e.target.value) || 0)}
                          className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
                        >
                          <option value="250">Verified Bronze Donor ($250)</option>
                          <option value="500">Verified Silver Donor ($500)</option>
                          <option value="100">Vetted Donor ($100)</option>
                          <option value="0">Guest observer (Unverified)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Your Message</label>
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Share your encouragement..."
                        rows={3}
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Publish Note
                    </button>
                  </form>
                </div>
              )}

              {/* Tab 4: Transparency Report */}
              {activeTab === 'transparency' && (
                <div className="space-y-8">
                  {/* Certified banner */}
                  <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-emerald-50 border border-emerald-100 rounded-2xl gap-4">
                    <div className="flex items-center space-x-3 text-center sm:text-left">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-bold font-serif text-lg">
                        G
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-950 text-sm">Transparency Grade A+ Certified</h4>
                        <p className="text-xs text-emerald-700/80 mt-0.5">Audited in compliance with global donor disclosure standards.</p>
                      </div>
                    </div>
                    <span className="px-3.5 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold">
                      Verified On-chain
                    </span>
                  </div>

                  {/* Budget Allocation Progress representation */}
                  <div className="space-y-4">
                    <h3 className="text-gray-950 font-serif font-bold text-lg">Budget Allocation</h3>
                    <div className="space-y-3.5">
                      {project.transparencyReport.breakdown.map((item, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs font-semibold">
                            <span className="text-gray-800">{item.item}</span>
                            <span className="text-emerald-700 font-bold">{item.percentage}% ({item.amount ? `$${item.amount.toLocaleString()}` : ''})</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-600 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Audit Documents */}
                  <div className="space-y-4 border-t border-gray-100 pt-6">
                    <h3 className="text-gray-950 font-serif font-bold text-lg">Audit Documents</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.transparencyReport.documents.map((doc, idx) => (
                        <div key={idx} className="p-4 bg-white border border-gray-100 rounded-xl flex items-center justify-between hover:border-gray-200 transition-colors shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-900 text-xs truncate max-w-[150px]">{doc.name}</h5>
                              <p className="text-[10px] text-gray-400 mt-0.5">{doc.size} • PDF</p>
                            </div>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-emerald-700 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Donation Sidebar */}
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-xl space-y-6 lg:sticky lg:top-24">
            
            {/* Headline values */}
            <div className="space-y-1">
              <div className="flex items-end justify-between">
                <span className="text-3xl font-serif font-bold text-gray-950">${project.raised.toLocaleString()}</span>
                <span className="text-emerald-700 font-bold text-sm">{percent}%</span>
              </div>
              <p className="text-xs text-gray-400 font-semibold uppercase">Raised of ${project.goal.toLocaleString()} target</p>
            </div>

            {/* Main big bar */}
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                style={{ width: `${percent}%` }}
              />
            </div>

            {/* Quick stats columns */}
            <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-4 text-center">
              <div>
                <span className="text-lg font-bold text-gray-950 block">{project.donorsCount}</span>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Verified Donors</span>
              </div>
              <div className="border-l border-gray-100">
                <span className="text-lg font-bold text-gray-950 block">{project.daysLeft}</span>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Days Remaining</span>
              </div>
            </div>

            {/* Donation selector buttons */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Select Contribution Amount
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-2 text-xs font-bold rounded-xl transition-all border ${
                      selectedAmount === amount
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-100'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom amount text field */}
              <div className="relative mt-2">
                <span className="absolute left-3.5 top-2.5 text-sm font-semibold text-gray-400">$</span>
                <input
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-4 py-2.5 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-semibold"
                />
              </div>
            </div>

            {/* CTA action button */}
            <button
              onClick={handleDonateClick}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-emerald-200 transition-all hover:scale-[1.01] flex items-center justify-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate ${finalDonationAmount} Now</span>
            </button>

            {/* Proof block / trust footer in card */}
            <div className="space-y-3 pt-4 border-t border-gray-100 text-[11px] text-gray-500 leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <Shield className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <p>
                  <strong>100% Direct-to-Field pledge:</strong> Kindred routes 100% of your chosen amount directly to Xingu communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
