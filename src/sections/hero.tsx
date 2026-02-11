import { useState, useEffect } from 'react'
import heroImg from '../assets/images/main-hero.svg'

// ─── Shared Data ─────────────────────────────────────────────
const categories = [
  { 
    name: 'Graphic Design', 
    icon: '🎨',
    count: 24,
    color: 'bg-slate-800/50 backdrop-blur-sm border border-blue-400/30',
    hoverColor: 'hover:border-blue-400/70'
  },
  { 
    name: 'UX/UI Design', 
    icon: '📱',
    count: 18,
    color: 'bg-slate-800/50 backdrop-blur-sm border border-sky-400/30',
    hoverColor: 'hover:border-sky-400/70'
  },
  { 
    name: 'Web Development', 
    icon: '💻',
    count: 32,
    color: 'bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30',
    hoverColor: 'hover:border-cyan-400/70'
  },
  { 
    name: 'Branding', 
    icon: '✨',
    count: 15,
    color: 'bg-slate-800/50 backdrop-blur-sm border border-teal-400/30',
    hoverColor: 'hover:border-teal-400/70'
  }
]

// ─── Hook ────────────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    setIsReady(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return { isMobile, isReady }
}

// ─── Mobile Render ───────────────────────────────────────────
function renderMobile(activeCategory: number | null, setActiveCategory: (v: number | null) => void) {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Rich layered mesh gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(16,185,129,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(59,130,246,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(20,184,166,0.12),transparent_50%)]" />
        </div>

        {/* Gradient Orbs - tuned for mobile depth */}
        <div
          className="absolute -top-16 right-[-10%] w-[320px] h-[320px] bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-full mix-blend-lighten filter blur-3xl opacity-50 animate-blob-scale"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-[40%] left-[-15%] w-[280px] h-[280px] bg-gradient-to-br from-green-500/25 via-emerald-500/18 to-teal-500/25 rounded-full mix-blend-lighten filter blur-3xl opacity-40 animate-blob-scale"
          style={{ animationDelay: '2.5s' }}
        />
        <div
          className="absolute bottom-[10%] right-[-8%] w-[260px] h-[260px] bg-gradient-to-br from-teal-500/22 via-cyan-500/16 to-blue-500/22 rounded-full mix-blend-lighten filter blur-3xl opacity-35 animate-blob-scale"
          style={{ animationDelay: '5s' }}
        />

        {/* Decorative shapes */}
        <div className="absolute top-24 right-5 w-4 h-4 border-2 border-emerald-400/50 rotate-45 animate-float-gentle" />
        <div className="absolute top-[55%] left-4 w-3 h-3 border-2 border-teal-400/45 rotate-12 animate-float-gentle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[30%] right-6 w-5 h-5 border border-cyan-400/40 rounded-full animate-pulse-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[18%] left-5 w-4 h-4 border-2 border-emerald-400/40 rounded-full animate-pulse-float" style={{ animationDelay: '0.5s' }} />

        {/* Corner brackets */}
        <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-emerald-400/30 animate-scale-pulse" />
        <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-teal-400/30 animate-scale-pulse" style={{ animationDelay: '1s' }} />

        {/* Stars */}
        <div className="absolute top-14 right-10 animate-spin-slow-large" style={{ animationDuration: '25s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-400/60">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-[35%] left-5 animate-spin-reverse" style={{ animationDuration: '30s' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-teal-400/55">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-[45%] right-4 animate-spin-slow-large" style={{ animationDuration: '35s' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-cyan-400/50">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Dots cluster */}
        <div className="absolute bottom-[22%] right-5 flex flex-col gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400/45 animate-bounce-subtle" />
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400/35 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 rounded-full bg-teal-400/25 animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
        </div>
        <div className="absolute top-[32%] left-3 flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 animate-bounce-subtle" style={{ animationDelay: '0.1s' }} />
          <div className="w-1 h-1 rounded-full bg-emerald-400/30 animate-bounce-subtle" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Subtle line accents */}
        <div className="absolute top-[60%] left-0 w-16 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-slide-x" />
        <div className="absolute top-[25%] right-0 w-12 h-px bg-gradient-to-l from-transparent via-teal-400/25 to-transparent animate-slide-x" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center px-5 w-full min-h-screen">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-7">

            {/* Badge */}
            <div className='mb-20 mt-10'>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-800/70 backdrop-blur-md rounded-full border border-emerald-400/25 shadow-lg shadow-emerald-500/5 animate-fadeIn">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              </div>
              <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                <div className="text-[11px] font-semibold tracking-[0.15em]">MY CREATIVE SPACE</div>
              </span>
            </div>
            </div>

            {/* Hero Image - Mobile with orbital icons */}
            <div className="relative animate-fadeInUp w-full flex justify-center" style={{ padding: '50% 0' }}>
              {/* Multi-layer glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 via-teal-400/15 to-cyan-400/10 blur-3xl scale-150 opacity-70 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-2xl rounded-full opacity-60" />

              {/* Orbit ring visual */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] border border-emerald-400/10 rounded-full animate-scale-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-teal-400/[0.06] rounded-full animate-scale-pulse" style={{ animationDelay: '1.5s' }} />

              {/* Floating Icons - orbital placement */}
              {/* Top Center */}
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-11 h-11 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg shadow-amber-500/10 flex items-center justify-center animate-float-icon-2 border border-amber-400/40 z-20">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Top Left */}
              <div className="absolute top-[15%] left-[10%] w-10 h-10 bg-slate-800/90 backdrop-blur-md rounded-lg shadow-lg shadow-teal-500/10 flex items-center justify-center animate-float-icon-6 border border-teal-400/35 z-20">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>

              {/* Top Right */}
              <div className="absolute top-[10%] right-[10%] w-10 h-10 bg-slate-800/90 backdrop-blur-md rounded-lg shadow-lg shadow-blue-500/10 flex items-center justify-center animate-float-icon-4 border border-blue-400/35 z-20">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Middle Left */}
              <div className="absolute top-1/2 -translate-y-1/2 top-[80%] left-[10%] w-11 h-11 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg shadow-red-500/10 flex items-center justify-center animate-float-icon-3 border border-red-400/35 z-20">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Middle Right */}
              <div className="absolute top-1/2 -translate-y-1/2 top-[80%] right-[10%] w-11 h-11 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg shadow-pink-500/10 flex items-center justify-center animate-float-icon-1 border border-pink-400/35 z-20">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>

              {/* Bottom Center */}
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-11 h-11 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg shadow-purple-500/10 flex items-center justify-center animate-float-icon-5 border border-purple-400/35 z-20">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <img
                src={heroImg}
                alt="Hero"
                className="relative w-full max-w-4xl   drop-shadow-[0_0_40px_rgba(16,185,129,0.15)] transform transition-all duration-500 active:scale-95 z-10"
              />

              {/* Corner accents on image */}
              <div className="absolute top-[10px] left-[10%] w-7 h-7 border-t-2 border-l-2 border-emerald-400/40 z-10 animate-scale-pulse" />
              <div className="absolute bottom-[10px] right-[10%] w-7 h-7 border-b-2 border-r-2 border-teal-400/40 z-10 animate-scale-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Categories - Mobile Enhanced */}
            <div className="w-full animate-fadeIn animation-delay-300">
              {/* Section header with line accents */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-400/50" />
                <h3 className="text-xs font-semibold text-emerald-400 tracking-[0.2em] uppercase">
                  หมวดหมู่ผลงาน
                </h3>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-400/50" />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onTouchStart={() => setActiveCategory(index)}
                    onTouchEnd={() => setTimeout(() => setActiveCategory(null), 150)}
                    className={`group relative transition-all duration-300 active:scale-[0.97] ${activeCategory === index ? 'scale-[1.03]' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Active glow */}
                    {activeCategory === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-teal-400/15 to-cyan-400/15 blur-xl rounded-2xl scale-110 transition-opacity duration-300" />
                    )}

                    <div className="relative">
                      {/* Folder Tab */}
                      <div className={`absolute -top-2.5 left-3 w-14 h-6 bg-gradient-to-br ${category.color} rounded-t-lg shadow-md transition-all duration-300 ${activeCategory === index ? 'scale-105 -translate-y-0.5' : ''}`}>
                        <div className="absolute inset-0 bg-slate-700/20 rounded-t-lg" />
                      </div>

                      {/* Main Folder Body */}
                      <div className={`relative w-full aspect-[3/2] bg-gradient-to-br ${category.color} rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${activeCategory === index ? 'shadow-2xl shadow-emerald-500/10' : ''}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                        {/* Shimmer on active */}
                        {activeCategory === index && (
                          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 animate-shimmer" />
                        )}

                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`text-[2.5rem] filter drop-shadow-lg transition-transform duration-300 ${activeCategory === index ? 'scale-110 rotate-3' : ''}`}>
                            {category.icon}
                          </div>
                        </div>

                        {/* Floating particles on active */}
                        {activeCategory === index && (
                          <div className="absolute inset-0">
                            <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-float-particle" />
                            <div className="absolute top-5 right-5 w-1 h-1 bg-cyan-400/50 rounded-full animate-float-particle" style={{ animationDelay: '0.3s' }} />
                            <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-particle" style={{ animationDelay: '0.6s' }} />
                          </div>
                        )}

                        {/* Corner shine */}
                        <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-white/15 to-transparent rounded-bl-full opacity-50" />
                      </div>

                      {/* Folder shadow */}
                      <div className={`absolute top-1 left-1 right-1 bottom-0 bg-slate-700/30 rounded-xl -z-10 blur-md transition-opacity duration-300 ${activeCategory === index ? 'opacity-50' : 'opacity-25'}`} />
                    </div>

                    {/* Category Info */}
                    <div className={`mt-3.5 text-center transition-all duration-300 ${activeCategory === index ? 'translate-y-0.5' : ''}`}>
                      <h4 className={`font-semibold text-[13px] leading-tight transition-colors duration-300 ${activeCategory === index ? 'text-emerald-400' : 'text-slate-200'}`}>
                        {category.name}
                      </h4>
                      <p className={`text-[10px] font-medium mt-1 flex items-center justify-center gap-1.5 transition-colors duration-300 ${activeCategory === index ? 'text-emerald-400/80' : 'text-slate-500'}`}>
                        <span className={`inline-block w-1 h-1 bg-emerald-400 rounded-full transition-opacity duration-300 ${activeCategory === index ? 'opacity-100' : 'opacity-40'}`} />
                        {category.count} โปรเจค
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{heroKeyframes}</style>
    </section>
  )
}

// ─── Desktop Render ──────────────────────────────────────────
function renderDesktop(
  mousePosition: { x: number; y: number },
  activeCategory: number | null,
  setActiveCategory: (v: number | null) => void
) {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-radial from-slate-900 via-slate-900 via-65% to-transparent" />
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        </div>
        
        {/* Gradient Orbs with mouse parallax */}
        <div 
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 rounded-full mix-blend-lighten filter blur-3xl opacity-40 animate-blob-scale"
          style={{ transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`, animationDelay: '0s' }}
        />
        <div 
          className="absolute top-1/4 -left-40 w-[550px] h-[550px] bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-teal-500/20 rounded-full mix-blend-lighten filter blur-3xl opacity-35 animate-blob-scale"
          style={{ transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * 0.012}px)`, animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-1/3 -left-32 w-[520px] h-[520px] bg-gradient-to-br from-lime-400/15 via-green-500/12 to-emerald-500/15 rounded-full mix-blend-lighten filter blur-3xl opacity-30 animate-blob-scale"
          style={{ transform: `translate(${mousePosition.x * -0.018}px, ${mousePosition.y * -0.012}px)`, animationDelay: '3s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-[480px] h-[480px] bg-gradient-to-br from-teal-500/15 via-cyan-500/12 to-blue-500/15 rounded-full mix-blend-lighten filter blur-3xl opacity-25 animate-blob-scale"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px)`, animationDelay: '4s' }}
        />
      
        {/* Full decorations */}
        <div className="absolute top-24 right-24 w-6 h-6 border-2 border-emerald-400/50 rotate-45 animate-float-gentle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-40 w-4 h-4 bg-teal-400/40 rotate-12 animate-float-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-5 h-5 border-2 border-green-400/45 animate-float-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-24 right-1/3 w-7 h-7 border-2 border-cyan-400/40 rotate-45 animate-float-gentle" style={{ animationDelay: '1.5s' }} />
        
        <div className="absolute top-1/3 right-20 w-8 h-8 border-2 border-teal-400/50 rounded-full animate-pulse-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/4 left-28 w-6 h-6 border-2 border-emerald-400/45 rounded-full animate-pulse-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-24 w-10 h-10 border border-green-400/40 rounded-full animate-pulse-float" style={{ animationDelay: '3s' }} />
        
        <div className="absolute top-1/4 right-1/4 w-16 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent rotate-45 animate-slide-x" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-teal-400/45 to-transparent -rotate-12 animate-slide-x" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-16 left-16 w-20 h-20 border-t-2 border-l-2 border-emerald-400/35 animate-scale-pulse" />
        <div className="absolute bottom-16 right-16 w-20 h-20 border-b-2 border-r-2 border-teal-400/35 animate-scale-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-12 w-16 h-16 border-t-2 border-r-2 border-cyan-400/30 animate-scale-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Stars */}
        <div className="absolute top-20 right-1/4 animate-spin-slow-large" style={{ animationDuration: '25s' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-emerald-400/60"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/></svg>
        </div>
        <div className="absolute top-1/3 right-32 animate-spin-reverse" style={{ animationDuration: '30s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal-400/55"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/></svg>
        </div>
        <div className="absolute top-32 left-32 animate-spin-slow-large" style={{ animationDuration: '35s' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-green-400/50"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/></svg>
        </div>
        <div className="absolute bottom-1/3 left-28 animate-spin-reverse" style={{ animationDuration: '28s' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-cyan-400/58"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/></svg>
        </div>
        <div className="absolute bottom-32 right-28 animate-spin-slow-large" style={{ animationDuration: '32s' }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-teal-400/60"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/></svg>
        </div>

        <div className="absolute top-1/2 right-1/4 text-3xl text-emerald-400/45 animate-rotate-slow" style={{ animationDuration: '20s' }}>+</div>
        <div className="absolute bottom-1/3 left-1/3 text-2xl text-teal-400/40 animate-rotate-slow" style={{ animationDuration: '25s', animationDelay: '2s' }}>+</div>
        
        <div className="absolute top-1/3 left-1/4 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400/40 animate-bounce-subtle" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/35 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-emerald-400/30 animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 flex flex-col gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-400/40 animate-bounce-subtle" />
          <div className="w-2 h-2 rounded-full bg-teal-400/35 animate-bounce-subtle" style={{ animationDelay: '0.3s' }} />
        </div>
        
        <div className="absolute left-12 top-0 bottom-0 flex gap-6 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" style={{ animationDelay: `${i * 300}ms`, animation: 'fadeInOut 4s ease-in-out infinite' }} />
          ))}
        </div>
        <div className="absolute right-12 top-0 bottom-0 flex gap-6 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-px bg-gradient-to-b from-transparent via-teal-400/50 to-transparent" style={{ animationDelay: `${i * 350}ms`, animation: 'fadeInOut 4s ease-in-out infinite' }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center p-2 w-full min-h-screen">
        <div className="max-w-7xl w-full pt-12 pb-24">
          <div className="flex flex-col items-center justify-center space-y-12">
            
            {/* Badge */}
            <div className="group inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 backdrop-blur-sm rounded-full border border-emerald-400/30 shadow-lg animate-fadeIn hover:shadow-emerald-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              </div>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                <div className='text-sm font-medium tracking-wide'>MY CREATIVE SPACE</div>
              </span>
            </div>

            {/* Hero Image - Desktop */}
            <div className="relative group animate-fadeInUp">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              
              {/* Floating Icons */}
              <div className="absolute -top-2 left-[600px] w-12 h-12 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center animate-float-icon-2 group-hover:scale-110 transition-transform duration-500 border border-amber-400/30">
                <svg className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div className="absolute top-1/4 -left-20 w-14 h-14 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center animate-float-icon-3 group-hover:scale-110 transition-transform duration-500 border border-red-400/30">
                <svg className="w-7 h-7 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
              <div className="absolute top-[240px] left-[30px] w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center animate-float-icon-1 group-hover:scale-110 transition-transform duration-500 border border-pink-400/30">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <div className="absolute top-1/4 -right-20 w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center animate-float-icon-4 group-hover:scale-110 transition-transform duration-500 border border-blue-400/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <div className="absolute -bottom-5 right-[240px] w-14 h-14 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center animate-float-icon-5 group-hover:scale-110 transition-transform duration-500 border border-purple-400/30">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="absolute -top-8 left-[85px] w-12 h-12 bg-slate-800/90 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center animate-float-icon-6 group-hover:scale-110 transition-transform duration-500 border border-teal-400/30">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              
              <img src={heroImg} alt="Hero" className="relative w-200 drop-shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 z-10" />
              
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/60 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 z-10" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-teal-400/60 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 z-10" />
              <div className="absolute -top-4 -right-4 w-6 h-6 border-t border-r border-emerald-400/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-b border-l border-teal-400/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
            </div>

            {/* Categories - Desktop */}
            <div className="w-full max-w-4xl animate-fadeIn animation-delay-300">
              <h3 className="text-center text-sm font-medium text-emerald-400 mb-8 tracking-wide uppercase">หมวดหมู่ผลงาน</h3>
              <div className="grid grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveCategory(index)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="group relative transition-all duration-500 hover:scale-110 hover:-translate-y-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl scale-110" />
                    <div className="relative cursor-pointer">
                      <div className={`absolute -top-3 left-4 w-16 h-8 bg-gradient-to-br ${category.color} rounded-t-lg shadow-md transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 ${category.hoverColor}`}>
                        <div className="absolute inset-0 bg-slate-700/20 rounded-t-lg" />
                      </div>
                      <div className={`relative w-full aspect-[3/2] bg-gradient-to-br ${category.color} rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl ${category.hoverColor}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-5xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 filter drop-shadow-lg">{category.icon}</div>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400/60 rounded-full animate-float-particle" style={{ animationDelay: '0s' }} />
                          <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-float-particle" style={{ animationDelay: '0.3s' }} />
                          <div className="absolute bottom-8 left-8 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-particle" style={{ animationDelay: '0.6s' }} />
                        </div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                      </div>
                      <div className="absolute top-1 left-1 right-1 bottom-0 bg-slate-700/30 rounded-lg -z-10 blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                    <div className="mt-6 text-center transform transition-all duration-500 group-hover:translate-y-1">
                      <h4 className="font-semibold text-sm mb-1 text-slate-200 group-hover:text-emerald-400 transition-colors">{category.name}</h4>
                      <p className="text-xs text-slate-400 font-medium group-hover:text-emerald-400 transition-colors flex items-center justify-center gap-1.5">
                        <span className="inline-block w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                        {category.count} โปรเจค
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{heroKeyframes}</style>
    </section>
  )
}

// ─── Shared Keyframes ────────────────────────────────────────
const heroKeyframes = `
  @keyframes blob-scale {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    33% { transform: scale(1.15); opacity: 0.5; }
    66% { transform: scale(0.9); opacity: 0.35; }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%) skewX(-15deg); }
    100% { transform: translateX(200%) skewX(-15deg); }
  }
  @keyframes float-particle {
    0%, 100% { transform: translate(0, 0); opacity: 0.6; }
    50% { transform: translate(-10px, -20px); opacity: 1; }
  }
  @keyframes float-gentle {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(10px, -15px) rotate(5deg); }
    66% { transform: translate(-8px, 10px) rotate(-5deg); }
  }
  @keyframes pulse-float {
    0%, 100% { transform: scale(1) translateY(0); opacity: 0.5; }
    50% { transform: scale(1.1) translateY(-10px); opacity: 0.7; }
  }
  @keyframes slide-x {
    0%, 100% { transform: translateX(0) rotate(45deg); opacity: 0.5; }
    50% { transform: translateX(30px) rotate(45deg); opacity: 0.3; }
  }
  @keyframes scale-pulse {
    0%, 100% { transform: scale(1); opacity: 0.35; }
    50% { transform: scale(1.05); opacity: 0.5; }
  }
  @keyframes bounce-subtle {
    0%, 100% { transform: translateY(0); opacity: 0.4; }
    50% { transform: translateY(-8px); opacity: 0.6; }
  }
  @keyframes rotate-slow {
    from { transform: rotate(0deg); } to { transform: rotate(360deg); }
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes float-icon-1 {
    0%, 100% { transform: translate(0, 0) rotate(-5deg); }
    50% { transform: translate(-8px, -12px) rotate(5deg); }
  }
  @keyframes float-icon-2 {
    0%, 100% { transform: translate(0, 0) rotate(5deg); }
    50% { transform: translate(10px, -10px) rotate(-5deg); }
  }
  @keyframes float-icon-3 {
    0%, 100% { transform: translate(0, 0) rotate(8deg); }
    50% { transform: translate(-10px, 8px) rotate(-8deg); }
  }
  @keyframes float-icon-4 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(12px, 8px) rotate(10deg); }
  }
  @keyframes float-icon-5 {
    0%, 100% { transform: translate(0, 0) rotate(-8deg); }
    50% { transform: translate(8px, 10px) rotate(8deg); }
  }
  @keyframes float-icon-6 {
    0%, 100% { transform: translate(0, 0) rotate(10deg); }
    50% { transform: translate(5px, -15px) rotate(-10deg); }
  }
  @keyframes fadeInOut {
    0%, 100% { opacity: 0.1; } 50% { opacity: 0.2; }
  }
  @keyframes spin-slow-large {
    from { transform: rotate(0deg); } to { transform: rotate(360deg); }
  }
  @keyframes spin-reverse {
    from { transform: rotate(360deg); } to { transform: rotate(0deg); }
  }
  .bg-gradient-radial { background: radial-gradient(circle at center, var(--tw-gradient-stops)); }
  .animate-blob-scale { animation: blob-scale 8s infinite ease-in-out; }
  .animate-shimmer { animation: shimmer 3s infinite; }
  .animate-float-particle { animation: float-particle 3s infinite ease-in-out; }
  .animate-float-gentle { animation: float-gentle 6s infinite ease-in-out; }
  .animate-pulse-float { animation: pulse-float 4s infinite ease-in-out; }
  .animate-slide-x { animation: slide-x 5s infinite ease-in-out; }
  .animate-scale-pulse { animation: scale-pulse 3s infinite ease-in-out; }
  .animate-bounce-subtle { animation: bounce-subtle 2s infinite ease-in-out; }
  .animate-rotate-slow { animation: rotate-slow linear infinite; }
  .animate-spin-slow-large { animation: spin-slow-large linear infinite; }
  .animate-spin-reverse { animation: spin-reverse linear infinite; }
  .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
  .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }
  .animate-float-icon-1 { animation: float-icon-1 4s ease-in-out infinite; }
  .animate-float-icon-2 { animation: float-icon-2 4.5s ease-in-out infinite; }
  .animate-float-icon-3 { animation: float-icon-3 4.8s ease-in-out infinite; }
  .animate-float-icon-4 { animation: float-icon-4 5s ease-in-out infinite; }
  .animate-float-icon-5 { animation: float-icon-5 4.2s ease-in-out infinite; }
  .animate-float-icon-6 { animation: float-icon-6 4.6s ease-in-out infinite; }
  .animation-delay-300 { animation-delay: 0.3s; }
`

// ─── Main Component ──────────────────────────────────────────
export default function Hero() {
  const { isMobile, isReady } = useIsMobile()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  useEffect(() => {
    if (isMobile) return
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  if (!isReady) {
    return <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
  }

  return isMobile
    ? renderMobile(activeCategory, setActiveCategory)
    : renderDesktop(mousePosition, activeCategory, setActiveCategory)
}