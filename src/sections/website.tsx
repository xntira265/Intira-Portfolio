import { useState } from 'react'

// Web Development projects data
const webProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'ระบบร้านค้าออนไลน์ที่ทันสมัย พร้อมระบบชำระเงินและจัดการสินค้า',
    image: '/projects/ecommerce.jpg',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'แดชบอร์ดวิเคราะห์ข้อมูลแบบ Real-time พร้อมกราฟและรายงาน',
    image: '/projects/dashboard.jpg',
    color: 'from-emerald-400 to-teal-400'
  },
  {
    id: 3,
    title: 'Booking System',
    description: 'ระบบจองออนไลน์ที่ใช้งานง่าย พร้อมการจัดการตารางเวลา',
    image: '/projects/booking.jpg',
    color: 'from-blue-400 to-indigo-400'
  }
]

export default function WebDevelopment() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden min-h-screen py-20 bg-white">
      {/* Background Elements - Light Theme */}
      <div className="absolute inset-0">
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        </div>

        {/* Animated Gradient Orbs - Light Theme */}
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 via-cyan-300/25 to-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-scale" />
        <div className="absolute bottom-20 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-indigo-300/30 via-purple-300/25 to-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob-scale" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-emerald-300/25 via-teal-300/20 to-cyan-300/25 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-scale" style={{ animationDelay: '4s' }} />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-20 w-6 h-6 border-2 border-cyan-400/40 rotate-45 animate-float-gentle" />
        <div className="absolute top-48 right-32 w-8 h-8 border-2 border-blue-400/40 rounded-full animate-pulse-float" />
        <div className="absolute bottom-40 left-40 w-5 h-5 border-2 border-emerald-400/35 animate-float-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-16 w-7 h-7 border-2 border-purple-400/35 rotate-45 animate-float-gentle" style={{ animationDelay: '2s' }} />
        
        {/* Stars */}
        <div className="absolute top-40 right-1/4 animate-spin-slow-large" style={{ animationDuration: '30s' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400/50">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-spin-reverse" style={{ animationDuration: '35s' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-400/45">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-1/4 left-20 animate-spin-slow-large" style={{ animationDuration: '40s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-400/40">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Plus signs */}
        <div className="absolute top-1/4 left-1/4 text-3xl text-cyan-400/40 animate-rotate-slow" style={{ animationDuration: '20s' }}>+</div>
        <div className="absolute bottom-1/3 right-1/3 text-2xl text-blue-400/35 animate-rotate-slow" style={{ animationDuration: '25s', animationDelay: '2s' }}>+</div>

        {/* Dots pattern */}
        <div className="absolute top-1/3 right-1/4 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400/40 animate-bounce-subtle" />
          <div className="w-2 h-2 rounded-full bg-cyan-400/30 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-cyan-400/25 animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-400/50 shadow-lg mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-cyan-700">WEB DEVELOPMENT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">
              ผลงาน
            </span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              เว็บไซต์
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            รวมโปรเจคเว็บไซต์ที่สร้างด้วยเทคโนโลยีทันสมัย ตอบโจทย์ทุกความต้องการ
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl scale-110`} />

              {/* Project Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl border border-gray-200/50 group-hover:border-cyan-400/50">
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Icon Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl border border-gray-200/50">
                      <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Animated Grid Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(to right, rgb(59,130,246) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(59,130,246) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }} />
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 px-4 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          ดูรายละเอียด
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-200/50 shadow-lg">
                      <span className="text-cyan-600 font-bold text-sm">#{project.id}</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Shine Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fadeIn animation-delay-500">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              ดูผลงานทั้งหมด
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blob-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          33% {
            transform: scale(1.15);
            opacity: 0.4;
          }
          66% {
            transform: scale(0.9);
            opacity: 0.25;
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(10px, -15px) rotate(5deg);
          }
          66% {
            transform: translate(-8px, 10px) rotate(-5deg);
          }
        }

        @keyframes pulse-float {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1) translateY(-10px);
            opacity: 0.6;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.6;
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-large {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob-scale {
          animation: blob-scale 8s infinite ease-in-out;
        }

        .animate-float-gentle {
          animation: float-gentle 6s infinite ease-in-out;
        }

        .animate-pulse-float {
          animation: pulse-float 4s infinite ease-in-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }

        .animate-rotate-slow {
          animation: rotate-slow linear infinite;
        }

        .animate-spin-slow-large {
          animation: spin-slow-large linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}