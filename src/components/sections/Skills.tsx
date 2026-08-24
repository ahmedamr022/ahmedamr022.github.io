import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  BrainCircuitIcon, 
  DatabaseIcon, 
  RocketIcon, 
  LayersIcon, 
  SparklesIcon, 
  CheckCircle2Icon,
  SearchIcon
} from 'lucide-react';

/* ═══════════ CUSTOM FLATICON VECTOR ICONS ═══════════ */

function PyTorchFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <path d="M 28 8 C 28 8 36 16 36 26 C 36 33.7 29.7 40 22 40 C 14.3 40 8 33.7 8 26 C 8 19 14 13 18 10 C 18 16 22 18 22 22 C 22 25.3 19.3 28 16 28 C 17.5 31.5 21 34 25 34 C 29.4 34 33 30.4 33 26 C 33 20 28 15 28 8 Z" fill={color} fillOpacity="0.85" />
      <circle cx="34" cy="12" r="3" fill="#fb7185" />
    </svg>
  );
}

function TensorFlowFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <path d="M 24 6 L 40 15 V 33 L 24 42 L 8 33 V 15 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" fill={color} fillOpacity="0.12" />
      <path d="M 24 6 V 42" stroke={color} strokeWidth="2" />
      <path d="M 8 15 L 40 33" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M 40 15 L 8 33" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="24" cy="24" r="4" fill={color} />
    </svg>
  );
}

function OpenCVFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="2.5" />
      <circle cx="24" cy="24" r="9" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="24" cy="24" r="4" fill={color} />
      <line x1="24" y1="4" x2="24" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="4" y1="24" x2="10" y2="24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="24" x2="44" y2="24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ScikitFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.2" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 24 + 9 * Math.cos(rad);
        const y1 = 24 + 9 * Math.sin(rad);
        const x2 = 24 + 16 * Math.cos(rad);
        const y2 = 24 + 16 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeLinecap="round" />;
      })}
      <circle cx="24" cy="24" r="3" fill="#fff" />
    </svg>
  );
}

function PandasFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="28" rx="6" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.1" />
      <line x1="8" y1="20" x2="40" y2="20" stroke={color} strokeWidth="2" />
      <line x1="8" y1="29" x2="40" y2="29" stroke={color} strokeWidth="2" />
      <line x1="20" y1="10" x2="20" y2="38" stroke={color} strokeWidth="2" />
      <line x1="31" y1="10" x2="31" y2="38" stroke={color} strokeWidth="2" />
      <circle cx="14" cy="15" r="2" fill={color} />
      <circle cx="25.5" cy="24.5" r="2" fill={color} />
      <circle cx="35.5" cy="33.5" r="2" fill={color} />
    </svg>
  );
}

function SqlFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="12" rx="15" ry="5.5" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.2" />
      <path d="M 9 12 V 24 C 9 27.5 15.7 30 24 30 C 32.3 30 39 27.5 39 24 V 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 9 24 V 36 C 9 39.5 15.7 42 24 42 C 32.3 42 39 39.5 39 36 V 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function FastApiFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="17" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.1" />
      <path d="M 26 8 L 14 26 H 24 L 22 40 L 34 22 H 24 L 26 8 Z" fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function HuggingFaceFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="28" rx="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.12" />
      <circle cx="18" cy="22" r="3.5" fill={color} />
      <circle cx="30" cy="22" r="3.5" fill={color} />
      <path d="M 18 30 C 21 34 27 34 30 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 6 22 C 3 22 3 26 6 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 42 22 C 45 22 45 26 42 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PythonFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <path d="M 23.5 6 C 16 6 16.5 9.5 16.5 9.5 L 16.5 13 L 24 13 L 24 14.5 L 13.5 14.5 C 9 14.5 6 17 6 24 C 6 30.5 8.5 30.5 8.5 30.5 L 11 30.5 L 11 27 C 11 23 14.5 23 14.5 23 L 22 23 C 24 23 25.5 21.5 25.5 19.5 L 25.5 10 C 25.5 7.5 24.5 6 23.5 6 Z" fill={color} fillOpacity="0.9" />
      <path d="M 24.5 42 C 32 42 31.5 38.5 31.5 38.5 L 31.5 35 L 24 35 L 24 33.5 L 34.5 33.5 C 39 33.5 42 31 42 24 C 42 17.5 39.5 17.5 39.5 17.5 L 37 17.5 L 37 21 C 37 25 33.5 25 33.5 25 L 26 25 C 24 25 22.5 26.5 22.5 28.5 L 22.5 38 C 22.5 40.5 23.5 42 24.5 42 Z" fill="#38bdf8" fillOpacity="0.9" />
      <circle cx="19.5" cy="9.5" r="1.5" fill="#fff" />
      <circle cx="28.5" cy="38.5" r="1.5" fill="#fff" />
    </svg>
  );
}

/* ═══════════ TECH STACK DATA ═══════════ */

interface TechItem {
  name: string;
  category: 'ml' | 'data' | 'deploy' | 'tools';
  role: string;
  level: 'Expert' | 'Advanced' | 'Production Ready';
  IconComponent: React.ComponentType<{ color: string }>;
  color: string;
  projectsUsed: string;
}

const TECH_STACK: TechItem[] = [
  {
    name: 'PyTorch',
    category: 'ml',
    role: 'Deep Learning & Transfer Learning',
    level: 'Advanced',
    IconComponent: PyTorchFlaticon,
    color: '#ef4444',
    projectsUsed: 'Food Classifier (ResNet50)'
  },
  {
    name: 'TensorFlow & Keras',
    category: 'ml',
    role: 'CNN Architectures & Training',
    level: 'Expert',
    IconComponent: TensorFlowFlaticon,
    color: '#f97316',
    projectsUsed: "Axon Alzheimer's Detection (93.2% Acc)"
  },
  {
    name: 'OpenCV & YOLO',
    category: 'ml',
    role: 'Computer Vision & Image Processing',
    level: 'Advanced',
    IconComponent: OpenCVFlaticon,
    color: '#06b6d4',
    projectsUsed: 'Medical MRI Augmentation & Object Detection'
  },
  {
    name: 'Scikit-Learn',
    category: 'ml',
    role: 'Classical ML, Ensemble Models & Tuning',
    level: 'Expert',
    IconComponent: ScikitFlaticon,
    color: '#3b82f6',
    projectsUsed: 'Customer Churn (440K Records, Random Forest)'
  },
  {
    name: 'Pandas & NumPy',
    category: 'data',
    role: 'Data Wrangling, Vectorization & EDA',
    level: 'Expert',
    IconComponent: PandasFlaticon,
    color: '#8b5cf6',
    projectsUsed: 'Full Dataset Cleaning & Feature Engineering'
  },
  {
    name: 'SQL & Database Design',
    category: 'data',
    role: 'Relational Queries & Data Extraction',
    level: 'Advanced',
    IconComponent: SqlFlaticon,
    color: '#0284c7',
    projectsUsed: 'ETL Pipelines & Structured Analytics'
  },
  {
    name: 'FastAPI & REST APIs',
    category: 'deploy',
    role: 'High-Performance Backend Model Serving',
    level: 'Production Ready',
    IconComponent: FastApiFlaticon,
    color: '#10b981',
    projectsUsed: 'Model Inference Microservices'
  },
  {
    name: 'Gradio & Hugging Face',
    category: 'deploy',
    role: 'Interactive Web Demos & Cloud Spaces',
    level: 'Expert',
    IconComponent: HuggingFaceFlaticon,
    color: '#f59e0b',
    projectsUsed: 'Live Axon & Food Classifier Spaces'
  },
  {
    name: 'Python & Git',
    category: 'tools',
    role: 'Core OOP, Scripting & Version Control',
    level: 'Expert',
    IconComponent: PythonFlaticon,
    color: '#38bdf8',
    projectsUsed: 'All Repositories & Collaborative Workflows'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Technologies', icon: <LayersIcon size={14} /> },
  { id: 'ml', label: 'Machine Learning', icon: <BrainCircuitIcon size={14} /> },
  { id: 'data', label: 'Data Engineering', icon: <DatabaseIcon size={14} /> },
  { id: 'deploy', label: 'Deployment', icon: <RocketIcon size={14} /> },
];

export function Skills(): JSX.Element {
  const { theme } = useTheme();
  const [activeCat, setActiveCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTech = TECH_STACK.filter((t) => {
    const matchesCat = activeCat === 'all' || t.category === activeCat;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.projectsUsed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="site-section">
      <div className="container">
        
        {/* Section Header */}
        <header className="mb-10 text-center">
          <p className="section-label justify-center">Technical Arsenal</p>
          <h2 className="section-title">Skills &amp; <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle mx-auto">
            Production-tested stack spanning Machine Learning, Computer Vision, Data Pipelines, and Cloud MLOps
          </p>
        </header>

        {/* ── Category Filters & Search Bar (Responsive Stack) ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-[1100px] mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? theme === 'dark'
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                        : 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm'
                      : theme === 'dark'
                        ? 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20'
                        : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Filter Search */}
          <div className={`relative w-full sm:w-64 flex items-center rounded-xl border px-3.5 py-2 transition-all ${
            theme === 'dark'
              ? 'border-white/10 bg-[#060c20]/80 focus-within:border-cyan-400/50'
              : 'border-slate-300 bg-white shadow-sm focus-within:border-blue-500'
          }`}>
            <SearchIcon size={14} className={theme === 'dark' ? 'text-slate-500' : 'text-slate-400'} />
            <input
              type="text"
              placeholder="Search stack or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-transparent pl-2 text-xs font-medium outline-none placeholder:text-slate-500 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            />
          </div>

        </div>

        {/* ── High-Tech Flaticon Vector Cards Grid (Responsive 1/2/3 cols) ── */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto">
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border p-5 sm:p-7 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-white/[0.08] bg-gradient-to-b from-[#070e24]/85 to-[#030614]/85 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#38bdf8]/50 hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] hover:-translate-y-1'
                  : 'border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-blue-400 hover:shadow-[0_12px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1'
              }`}
            >
              {/* Subtle top corner ambient flare */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: item.color }}
              />

              <div>
                {/* Card Top: Flaticon Vector & Proficiency Pill */}
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      borderColor: `${item.color}33`,
                      backgroundColor: `${item.color}15`
                    }}
                  >
                    <item.IconComponent color={item.color} />
                  </div>

                  <span 
                    className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border"
                    style={{
                      color: item.color,
                      borderColor: `${item.color}40`,
                      backgroundColor: `${item.color}10`
                    }}
                  >
                    <CheckCircle2Icon size={12} /> {item.level}
                  </span>
                </div>

                {/* Tech Name */}
                <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-1.5 transition-colors ${
                  theme === 'dark' ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {item.name}
                </h3>

                {/* Role / Description */}
                <p className={`text-xs leading-relaxed font-medium mb-4 sm:mb-5 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.role}
                </p>
              </div>

              {/* Applied In (Project Badge) */}
              <div className={`pt-3.5 sm:pt-4 border-t flex items-center gap-2 ${
                theme === 'dark' ? 'border-white/[0.06]' : 'border-slate-100'
              }`}>
                <SparklesIcon size={12} className="text-amber-400 flex-none" />
                <span className={`text-[11px] font-medium truncate ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <strong className="font-semibold">Used in:</strong> {item.projectsUsed}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* ── Summary Stats Banner (Responsive Grid) ── */}
        <div className={`mt-10 sm:mt-14 max-w-[1100px] mx-auto rounded-2xl border p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 text-center transition-colors ${
          theme === 'dark' ? 'bg-[#04091e]/60 border-white/10' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-black text-[#38bdf8]">93.2%</div>
            <div className={`text-xs font-semibold mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Model Peak Accuracy</div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-black text-[#a855f7]">440K+</div>
            <div className={`text-xs font-semibold mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Records Preprocessed</div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-black text-[#10b981]">100%</div>
            <div className={`text-xs font-semibold mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Deployed to Cloud</div>
          </div>
        </div>

      </div>
    </section>
  );
}