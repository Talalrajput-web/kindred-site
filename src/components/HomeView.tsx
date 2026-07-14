import { motion } from 'motion/react';
import { Project } from '../types';
import { TrendingUp, Shield, MapPin, Users, Heart, ArrowRight, Activity, Globe } from 'lucide-react';

interface HomeViewProps {
  projects: Project[];
  onNavigate: (view: string, projectId?: string) => void;
}

export default function HomeView({ projects, onNavigate }: HomeViewProps) {
  // Filter for urgent or high-priority projects
  const urgentProjects = projects.filter(p => p.urgency === 'critical' || p.urgency === 'high');

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-emerald-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full text-xs font-semibold tracking-wide"
              >
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>Radically Transparent Crowdfunding</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-950 tracking-tight leading-[1.1]"
              >
                Empowering communities through <span className="text-emerald-700 underline decoration-emerald-200 decoration-wavy">collective action</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Every dollar you donate is tracked, audited, and satellite-verified. We deliver resources directly to frontline operators with 0% platform cuts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={() => onNavigate('discover')}
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-200 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Discover Impact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('project-detail', 'roots-of-resilience')}
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Featured Project</span>
                </button>
              </motion.div>
            </div>

            {/* Right Hero Image Collage */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-100"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ybaSWDu3icaYkoGsGaX5S7dl57_3h1azTokjGlgg1o6O2rjd9Z1alVILIg6sDtskH3TnL-jD2v_e6XTIQkYAO0GtsVg2oV9F3XE4GbZ-7NE8ZHZlnCiLXJsrgFbwbllL8VHcpsV5iYVzRoag3i0WXudArPdrzTeO_S_Ao0_5DODCocFvPy5ewSwDogFlUc8AOeFER15GjiV2kDYWs8REE8n6ux42E5uxiVDEV7uhBLoFpB5K90c3rg"
                  alt="Community members collaborating on building shelter and forest infrastructure together"
                  className="w-full h-full object-cover"
                />
                {/* Floating Micro-UI element */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest block mb-0.5">Live Verification</span>
                    <h5 className="text-sm font-semibold text-gray-900 leading-tight">Xingu Seedbank Facility Alpha</h5>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500 text-white rounded-lg text-xs font-bold font-mono">
                    100% Match
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Platform Stats */}
      <section className="bg-gray-950 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-400">$12.4M</span>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Direct-to-Field Funds</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-400">0%</span>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Platform Overhead</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-400">100%</span>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Satellite Verification</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-400">45,000+</span>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Verified Contributions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Urgent Causes Carousel / Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center space-x-2 text-emerald-600 mb-2 font-mono text-xs font-semibold tracking-wider uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>Urgent Interventions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-950">Active Collective Causes</h2>
            </div>
            <button
              onClick={() => onNavigate('discover')}
              className="mt-4 md:mt-0 text-emerald-700 hover:text-emerald-800 font-semibold text-sm flex items-center space-x-1 transition-colors group"
            >
              <span>Explore all {projects.length} projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {urgentProjects.map((project) => {
              const percent = Math.min(100, Math.round((project.raised / project.goal) * 100));
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-200/80 transition-all group flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-1.5">
                      <span className={`px-2.5 py-1 text-[10px] font-bold font-mono uppercase tracking-wider rounded-lg text-white ${
                        project.urgency === 'critical' ? 'bg-rose-500' : 'bg-amber-500'
                      }`}>
                        {project.urgency}
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-bold font-mono uppercase tracking-wider rounded-lg bg-emerald-600 text-white flex items-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">
                        <Globe className="w-3 h-3 text-gray-400" />
                        <span>{project.location}</span>
                      </div>
                      <h3
                        onClick={() => onNavigate('project-detail', project.id)}
                        className="text-lg font-serif font-bold text-gray-900 mb-2 cursor-pointer hover:text-emerald-700 transition-colors line-clamp-2"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between items-end mb-1 text-xs font-semibold">
                          <span className="text-gray-900">${project.raised.toLocaleString()} raised</span>
                          <span className="text-emerald-700">{percent}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-gray-400 font-semibold mt-1">
                          <span>Goal: ${project.goal.toLocaleString()}</span>
                          <span>{project.daysLeft} days left</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => onNavigate('project-detail', project.id)}
                          className="flex-1 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-bold rounded-xl transition-colors border border-gray-100 text-center"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onNavigate('checkout', project.id)}
                          className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all text-center shadow-sm hover:shadow shadow-emerald-100"
                        >
                          Support Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Radical Transparency Bento Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold font-mono tracking-widest text-emerald-700 uppercase">Trust Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-950">A new protocol for social giving</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Traditional platforms hide administrative cuts, overhead charges, and impact delays. Kindred operates with open ledgers and telemetry-based verification maps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Satellite Proof-of-Work</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reforestation and physical development zones are photographed by synthetic aperture satellites, matching planting progress directly against your budget contributions.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Direct Field Transfers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Funds clear directly to Indigenous and frontline community bank accounts via vetted regional micro-payment links, completely routing around municipal administrative cuts.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Zero Platform Cuts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kindred charges 0% transaction fees to nonprofits. The platform is entirely donor-supported through micro-tips, guaranteeing maximum direct-to-field capitalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call-to-Action */}
      <section className="py-20 relative bg-emerald-950 overflow-hidden text-center text-white">
        {/* Background visual detail */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Ready to start your impact story?
          </h2>
          <p className="text-emerald-200/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Join over 45,000 global community members tracking their collective contributions in real-time. Transparent, secure, and infinitely meaningful.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('discover')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"
            >
              Browse Active Causes
            </button>
            <button
              onClick={() => onNavigate('signin')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
