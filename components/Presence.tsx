
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Presence: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const L = (window as any).L;
    if (!L) return;

    mapInstance.current = L.map(mapRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false,
      dragging: false,
      touchZoom: false,
    }).setView([22.9734, 78.6569], 5.5);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(mapInstance.current);

    const cities = [
      { name: 'Bhopal (HQ)', lat: 23.2599, lon: 77.4126, info: 'Corporate Headquarters' },
      { name: 'Indore', lat: 22.7196, lon: 75.8577, info: 'Strategic Growth Hub' },
      { name: 'Raipur', lat: 21.2514, lon: 81.6296, info: 'Regional Media Center' },
      { name: 'Gwalior', lat: 26.2183, lon: 78.1828, info: 'Creative Outreach' },
      { name: 'Jabalpur', lat: 23.1815, lon: 79.9864, info: 'Brand Development' },
      { name: 'Mumbai', lat: 19.0760, lon: 72.8777, info: 'National Media Strategy' },
    ];

    cities.forEach(city => {
      const pinHtml = `
        <div class="relative flex items-center justify-center">
          <div class="absolute w-12 h-12 bg-blue-500 rounded-full animate-[ping_3s_linear_infinite] opacity-20"></div>
          <div class="absolute w-8 h-8 bg-blue-400 rounded-full animate-[ping_2s_linear_infinite] opacity-30"></div>
          <div class="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_20px_rgba(37,99,235,0.6)] z-10"></div>
        </div>
      `;

      const icon = L.divIcon({
        html: pinHtml,
        className: 'custom-pin',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      L.marker([city.lat, city.lon], { icon })
        .addTo(mapInstance.current)
        .bindTooltip(`
          <div class="p-2">
            <div class="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-0.5">${city.name}</div>
            <div class="text-[9px] font-bold text-slate-400 uppercase">${city.info}</div>
          </div>
        `, {
          permanent: true,
          direction: 'top',
          className: 'bg-white/90 backdrop-blur-md rounded-xl p-0 border-none shadow-2xl overflow-hidden',
          offset: [0, -10]
        });
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Geographic Dominance
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Our Regional <br /><span className="text-blue-600 font-script text-5xl md:text-7xl">Power Hubs</span>
          </h2>
        </div>
        <p className="text-slate-500 text-xl max-w-sm mb-4 font-medium italic">
          Localized intelligence powered by national scale across India's key markets.
        </p>
      </div>

      <div className="relative h-[650px] w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white group">
        <div ref={mapRef} className="w-full h-full grayscale-[40%] hover:grayscale-0 transition-all duration-1000"></div>
        
        {/* Floating Stats Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute bottom-10 left-10 z-[1000] hidden md:block"
        >
           <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl w-72 border border-white/10 backdrop-blur-xl bg-opacity-90">
             <div className="flex items-center gap-5 mb-6">
               <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-600/30">
                 <i className="fas fa-satellite"></i>
               </div>
               <div>
                 <h4 className="font-black text-lg leading-tight">Central Hub</h4>
                 <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">Bhopal HQ</p>
               </div>
             </div>
             <p className="text-sm text-slate-400 leading-relaxed font-medium">
               Orchestrating campaigns for 500+ brands from the heart of India since 2002.
             </p>
             <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-tighter">Active Markets</span>
                <span className="bg-blue-600 text-[10px] px-3 py-1 rounded-full font-black">6 Cities</span>
             </div>
           </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 z-[1000] pointer-events-none">
          <div className="w-20 h-20 border-t-2 border-r-2 border-blue-600/30 rounded-tr-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Presence;
