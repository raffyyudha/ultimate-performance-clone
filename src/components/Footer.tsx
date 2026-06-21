import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-[#0B0B0B] text-white border-t border-white/10 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Logo & Brand Col */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-block group mb-6">
              <span className="font-sans font-black text-2xl tracking-[0.25em] text-white transition-colors">
                D’QUATRE<span className="text-maroon">.</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              A Singapore-based fitness and wellness group dedicated to building a refined, results-driven lifestyle ecosystem.
            </p>
            <div className="flex gap-3 items-center">
              {[
                { name: "Instagram", href: "https://instagram.com", icon: (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                )},
                { name: "YouTube", href: "https://youtube.com", icon: (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )},
                { name: "LinkedIn", href: "https://linkedin.com", icon: (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )},
                { name: "Facebook", href: "https://facebook.com", icon: (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )}
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-maroon hover:bg-maroon hover:text-white text-gray-400 transition-all flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-[10px] tracking-[0.25em] text-maroon uppercase mb-6">Explore</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/services" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Personal Training</Link></li>
              <li><Link href="/results" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Success Stories</Link></li>
              <li><Link href="/trainers" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Our Elite Team</Link></li>
              <li><Link href="/gallery" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h4 className="font-extrabold text-[10px] tracking-[0.25em] text-maroon uppercase mb-6">Products & Tools</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/merch" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Quatre Merch</Link></li>
              <li><Link href="/fitline" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">FitLine Supplements</Link></li>
              <li><Link href="/calculator" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Fitness Calculators</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">About Our Vision</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-extrabold text-[10px] tracking-[0.25em] text-maroon uppercase mb-6">Contact</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link href="/contact" className="hover:text-white transition-colors">Get in touch</Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <a href="https://wa.me/6581379850" className="hover:text-white transition-colors text-white font-bold">
                  WhatsApp: +65 8137 9850
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-maroon mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Singapore</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copy */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[11px] text-gray-500 tracking-wider">
            © 2026 D’Quatre Fitness Group Pte Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

        <div className="border-l-2 border-maroon/30 pl-4 mt-8">
          <p className="text-[10px] text-gray-500 leading-relaxed italic max-w-5xl">
            * DISCLAIMER: Results may vary. Results are based on individual circumstances. Timeframes for results are not guaranteed. Consistency, nutrition structure, and dedication to the program are always required!
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/6581379850?text=Hi%20D'Quatre%20Fitness%20Group,%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-[60px] h-[60px] rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba56] transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:animate-none"></span>
        <svg className="w-8 h-8 relative z-10 text-white" fill="currentColor" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L32 503l138.2-36.2c32.5 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-82.1 21.5 21.9-80-4.4-7c-18.5-29.4-28.3-63.5-28.3-98.8 0-101.4 82.5-183.9 184-183.9 49.1 0 95.3 19.2 130 54s54 80.9 54 130c0 101.4-82.6 184-184.1 184.1zm102.2-139.3c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.4-2.3-5.2-3.7-10.9-6.5z"/>
        </svg>
      </a>
    </footer>
  );
}
