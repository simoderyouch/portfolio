import React, { useState, useEffect } from 'react';
import { FiX, FiGithub } from 'react-icons/fi'; // Install react-icons jika belum: npm install react-icons

const ProjectModal = ({ isOpen, onClose, project }) => {
  // State untuk mengontrol animasi penutupan
  const [isClosing, setIsClosing] = useState(false);

  // Fungsi untuk menangani penutupan dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    // Tunggu animasi selesai (300ms) sebelum memanggil onClose dari props
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset state untuk pembukaan berikutnya
    }, 300);
  };

  // Mencegah scroll di background saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    // Overlay
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-[#000000ad] h-full  flex justify-center items-start z-50 p-4 transition-opacity duration-300"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat diklik di dalam
        className={`bg-zinc-900 border top-0 h-full overflow-y-auto border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-lg transform transition-transform duration-300 ${isClosing ? 'animate-out' : 'animate-in'}`}
      >
        {/* --- GAMBAR PROYEK --- */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-56 object-cover rounded-t-2xl"
        />

        <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <button
                    onClick={handleClose}
                    className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2"
                >
                    <FiX size={24} />
                </button>
            </div>

            {/* --- DESKRIPSI LENGKAP --- */}
            <p className="text-zinc-300 text-base leading-relaxed">
                {project.fullDescription}
            </p>

            <div className="flex flex-col gap-4 mt-6">

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 font-semibold bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 px-6 rounded-xl w-full cursor-pointer shadow-lg hover:shadow-xl hover:shadow-violet-500/25 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiGithub size={22} className="relative z-10" />
                <span className="relative z-10">Source Code</span>
              </a>
            )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 px-6 rounded-xl w-full cursor-pointer shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Project Video</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 px-6 rounded-xl w-full cursor-pointer shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Project Demo</span>
                </a>
              )}
            </div>
        </div>
      </div>
       {/* CSS untuk animasi */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
        .animate-out {
          animation: scaleOut 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
