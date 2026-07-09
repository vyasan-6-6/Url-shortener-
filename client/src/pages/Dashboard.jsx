import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, Link2, PlusCircle, ExternalLink, BarChart3, Clock, Trash2, Edit2, QrCode } from 'lucide-react';

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Premium Navbar */}
      <header className="border-b border-slate-900 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-violet-600/10 border border-violet-500/30 rounded-xl flex items-center justify-center">
              <Link2 className="w-5 h-5 text-violet-400" />
            </div>
            <span className="font-extrabold text-xl bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              ShortCut
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-slate-200">{user?.name}</div>
              <div className="text-xs text-slate-400">{user?.email}</div>
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition duration-150 border border-slate-750"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Main Area */}
      <main className="max-w-6xl w-full mx-auto px-4 py-8 flex-grow space-y-8">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center space-x-4">
            <div className="p-3 bg-violet-500/15 text-violet-400 rounded-xl">
              <Link2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Total Links</div>
              <div className="text-2xl font-bold text-white mt-1">0</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center space-x-4">
            <div className="p-3 bg-fuchsia-500/15 text-fuchsia-400 rounded-xl">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Total Clicks</div>
              <div className="text-2xl font-bold text-white mt-1">0</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/15 text-emerald-400 rounded-xl">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Active Links</div>
              <div className="text-2xl font-bold text-white mt-1">0</div>
            </div>
          </div>
        </div>

        {/* URL Creation Form */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-4">Shorten a new URL</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="flex-grow bg-slate-950 border border-slate-800 focus:border-violet-500 focus:outline-none rounded-xl py-3 px-4 text-sm transition"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-xl text-sm font-semibold transition duration-150 shadow-lg shadow-violet-500/25 flex items-center justify-center space-x-2">
              <PlusCircle className="w-4 h-4" />
              <span>Shorten</span>
            </button>
          </div>
        </section>

        {/* URL List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Your Shortened Links</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl divide-y divide-slate-800 overflow-hidden">
            <div className="p-8 text-center text-slate-400">
              <Clock className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-sm">You haven't shortened any links yet. Start by creating one above!</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;
