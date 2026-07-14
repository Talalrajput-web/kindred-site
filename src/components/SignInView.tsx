import React, { useState } from 'react';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';

interface SignInViewProps {
  onLoginSuccess: () => void;
  onNavigate: (view: string) => void;
}

export default function SignInView({ onLoginSuccess, onNavigate }: SignInViewProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('sarah.jenkins@impact.org');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login of Sarah Jenkins
    onLoginSuccess();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 flex items-center justify-center font-sans text-gray-800">
      <div className="max-w-md w-full px-6 space-y-6">
        
        {/* Card Frame */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
          
          {/* Logo & Headline */}
          <div className="text-center space-y-2">
            <div 
              onClick={() => onNavigate('home')} 
              className="inline-flex w-12 h-12 rounded-xl bg-emerald-600 items-center justify-center text-white font-serif font-bold text-xl cursor-pointer hover:scale-105 transition-transform"
            >
              K
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-950 tracking-tight">
              {isSignUp ? 'Create your impact account' : 'Welcome back'}
            </h2>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
              {isSignUp ? 'Join transparent social giving' : 'Sign in to continue your impact journey'}
            </p>
          </div>

          {/* Social Sign In Button */}
          <button
            onClick={onLoginSuccess}
            className="w-full py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl text-xs font-bold text-gray-700 transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            {/* Google Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider line */}
          <div className="flex items-center space-x-3 text-xs text-gray-300 font-semibold uppercase">
            <span className="h-px bg-gray-100 flex-1" />
            <span>or email credentials</span>
            <span className="h-px bg-gray-100 flex-1" />
          </div>

          {/* Login Credentials Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah.jenkins@impact.org"
                className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="space-y-1 relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-7.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Remember & forgot */}
            {!isSignUp && (
              <div className="flex items-center justify-between text-xs font-semibold">
                <label className="flex items-center space-x-2 text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Keep me signed in</span>
                </label>
                <a href="#" className="text-emerald-700 hover:underline">Forgot password?</a>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-emerald-100 hover:shadow-lg transition-all"
            >
              {isSignUp ? 'Create Free Account' : 'Sign In with Email'}
            </button>
          </form>

          {/* Toggle View */}
          <div className="text-center pt-2">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-xs font-semibold text-gray-500 hover:text-emerald-700 transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>

        </div>

        {/* Outer Links / Footnote */}
        <div className="text-center text-[10px] text-gray-400 space-x-4 font-semibold uppercase tracking-wider">
          <a href="#" className="hover:text-gray-600">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-gray-600">Security Center</a>
          <span>•</span>
          <a href="#" className="hover:text-gray-600">Platform Help</a>
        </div>

      </div>
    </div>
  );
}
