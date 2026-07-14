import { useState, useMemo } from 'react';
import { Project } from '../types';
import { Shield, MapPin, Sliders, X, Globe, Calendar } from 'lucide-react';

interface DiscoverViewProps {
  projects: Project[];
  onNavigate: (view: string, projectId?: string) => void;
}

export default function DiscoverView({ projects, onNavigate }: DiscoverViewProps) {
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedUrgencies, setSelectedUrgencies] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique locations and categories
  const categoriesList = ['Environment', 'Humanitarian', 'Education', 'Water Sanitation'];
  const locationsList = ['All', 'Brazil', 'Colombia', 'Mexico', 'Chicago, IL'];

  // Toggle Category Filter
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Toggle Urgency Filter
  const handleUrgencyToggle = (urgency: string) => {
    setSelectedUrgencies((prev) =>
      prev.includes(urgency)
        ? prev.filter((u) => u !== urgency)
        : [...prev, urgency]
    );
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedLocation('All');
    setSelectedUrgencies([]);
    setSearchQuery('');
  };

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Search Query Match
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesOrg = project.organization.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesOrg) return false;
      }

      // 2. Category Match
      if (selectedCategories.length > 0 && !selectedCategories.includes(project.category)) {
        return false;
      }

      // 3. Location Match
      if (selectedLocation !== 'All') {
        const matchesLoc = project.location.toLowerCase().includes(selectedLocation.toLowerCase());
        if (!matchesLoc) return false;
      }

      // 4. Urgency Match
      if (selectedUrgencies.length > 0 && !selectedUrgencies.includes(project.urgency)) {
        return false;
      }

      return true;
    });
  }, [projects, searchQuery, selectedCategories, selectedLocation, selectedUrgencies]);

  return (
    <div className="bg-gray-50/50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="border-b border-gray-100 pb-8 mb-10 text-center md:text-left">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-700 uppercase block mb-2">
            Platform Catalogue
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-950 tracking-tight mb-3">
            Discover Impact
          </h1>
          <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
            Transparency-first crowdfunding. Every dollar contributed is split-tracked, certified, and matched directly with local field progress.
          </p>
        </div>

        {/* Filters and Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-8 h-fit lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2 text-sm font-bold text-gray-950">
                <Sliders className="w-4 h-4 text-emerald-600" />
                <span>Filters</span>
              </span>
              {(selectedCategories.length > 0 || selectedLocation !== 'All' || selectedUrgencies.length > 0 || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Search Causes
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="E.g., Amazon, forest..."
                className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Categories Checklist */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Categories
              </label>
              <div className="space-y-2">
                {categoriesList.map((category) => (
                  <label key={category} className="flex items-center space-x-3 text-sm font-medium text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 transition-colors"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Select */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Target Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-gray-700"
              >
                {locationsList.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'All' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Urgency Tags */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Urgency Level
              </label>
              <div className="flex flex-wrap gap-2">
                {['low', 'medium', 'high', 'critical'].map((level) => {
                  const isSelected = selectedUrgencies.includes(level);
                  return (
                    <button
                      key={level}
                      onClick={() => handleUrgencyToggle(level)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                        isSelected
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Project List / Grid Column */}
          <div className="lg:col-span-3 space-y-8">
            {filteredProjects.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mx-auto">
                  <X className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-950">No matches found</h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  We couldn't find any active causes matching your filters. Try clearing some constraints or refining your search.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredProjects.map((project) => {
                    const percent = Math.min(100, Math.round((project.raised / project.goal) * 100));
                    return (
                      <div
                        key={project.id}
                        id={`discover-card-${project.id}`}
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
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
                            <div className="flex justify-between items-center text-xs text-gray-400 font-semibold mb-2">
                              <span>{project.category}</span>
                              <span className="flex items-center space-x-0.5">
                                <Globe className="w-3 h-3 text-gray-400 inline" />
                                <span>{project.location}</span>
                              </span>
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
                            {/* Progress bar */}
                            <div>
                              <div className="flex justify-between items-end mb-1 text-xs font-semibold">
                                <span className="text-gray-900">${project.raised.toLocaleString()} raised</span>
                                <span className="text-emerald-700">{percent}%</span>
                              </div>
                              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                                  style={{ width: `${percent}%` }}
                                />
                              </div>
                              <div className="flex justify-between items-center text-[11px] text-gray-400 font-semibold mt-1">
                                <span>Goal: ${project.goal.toLocaleString()}</span>
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{project.daysLeft} days left</span>
                                </span>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2 border-t border-gray-55">
                              <button
                                onClick={() => onNavigate('project-detail', project.id)}
                                className="flex-1 py-2 bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-bold rounded-lg transition-colors border border-gray-100 text-center"
                              >
                                Detail Page
                              </button>
                              <button
                                onClick={() => onNavigate('checkout', project.id)}
                                className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors text-center"
                              >
                                Direct Donate
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <span className="text-xs font-medium text-gray-500">
                    Showing <strong className="text-gray-900">{filteredProjects.length}</strong> of{' '}
                    <strong className="text-gray-900">{projects.length}</strong> active causes
                  </span>
                  <div className="flex space-x-1">
                    <button className="px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-400 cursor-not-allowed">
                      Prev
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg border border-emerald-600 bg-emerald-50 text-xs font-semibold text-emerald-800">
                      1
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
