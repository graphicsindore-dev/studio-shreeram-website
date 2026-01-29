
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
             <img 
               src="assets/logo-white.png" 
               alt="Shreeram Logo" 
               className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
             />
          </div>
          
          <div className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Shreeram Communications & Marketing. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all group">
              <i className="fab fa-facebook-f group-hover:scale-110"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all group">
              <i className="fab fa-instagram group-hover:scale-110"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all group">
              <i className="fab fa-linkedin-in group-hover:scale-110"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
