import { Shield, Sparkles, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Footer({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubsubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubsubscribed(true);
      setEmail('');
      setTimeout(() => setSubsubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 font-sans border-t border-gray-800">
      {/* Top Banner section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-2 text-white mb-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="font-sans font-bold text-lg tracking-wider uppercase">Radical Transparency</span>
            </div>
            <p className="text-sm text-gray-400">
              Every single transaction is tracked, audited, and satellite-verified. We take 0% platform cuts on your donations.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 text-white mb-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              <span className="font-sans font-bold text-lg tracking-wider uppercase">Community Powered</span>
            </div>
            <p className="text-sm text-gray-400">
              Direct connection between donors and local implementers. No administrative bloating, no middle agents.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
            <h4 className="text-white text-sm font-semibold mb-2">Subscribe to Impact Ledger</h4>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-950 text-white border border-gray-700 px-4 py-2 text-sm rounded-xl focus:outline-none focus:border-emerald-500 flex-1 transition-colors"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-all flex items-center space-x-1"
              >
                <span>{subscribed ? 'Joined!' : 'Join'}</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-400 text-xs mt-2 animate-pulse">
                Successfully subscribed! Get ready for direct field reports.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-serif font-semibold text-sm">
                K
              </div>
              <span className="font-sans font-bold text-lg tracking-tight">Kindred</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Empowering communities through collective action. Radically transparent crowdfunding built for trust, tracking, and absolute impact.
            </p>
            <div className="flex space-x-3">
              <span className="inline-block px-3 py-1 bg-gray-800 rounded-lg text-xs font-semibold text-emerald-400 border border-emerald-500/10">
                Tier 1 Audit Verified
              </span>
              <span className="inline-block px-3 py-1 bg-gray-800 rounded-lg text-xs font-semibold text-emerald-400 border border-emerald-500/10">
                501(c)(3) Compliant
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('discover')} className="hover:text-emerald-400 transition-colors">Discover Impact</button></li>
              <li><button onClick={() => onNavigate('org-profile')} className="hover:text-emerald-400 transition-colors">Verified NGOs</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors">Urgent Causes</button></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Transparency</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Platform Ledger</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Satellite Verification</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Third-party Audits</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Kindred Standards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Donor Rights</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">NGO Guidelines</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © 2026 Kindred Crowdfunding Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Security Audit Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
