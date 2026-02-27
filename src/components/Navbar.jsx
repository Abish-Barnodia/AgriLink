import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onLoginClick }) {
    const [registerOpen, setRegisterOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { to: '/', label: "Farmer's Portal" },
        { to: '/categories', label: 'Categories' },
        { to: '/market-price', label: 'Market Price' },
        { to: '/about', label: 'About Us' },
    ];

    return (
        <header className="sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 px-4 md:px-8 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/logo.webp" alt="AgriLink Logo" className="h-12 w-12 rounded-full border-2 border-white/30 group-hover:border-white transition-all shadow-lg" />
                    <span className="text-white font-heading font-bold text-xl hidden sm:block tracking-tight">AgriLink</span>
                </Link>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20 focus-within:bg-white/25 transition-all w-64 max-w-xs">
                    <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input type="text" placeholder="Search..." className="bg-transparent outline-none text-white placeholder-white/60 text-sm w-full" />
                </div>
                {/* Mobile hamburger */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
                </button>
            </div>

            {/* Navigation */}
            <nav className="bg-primary-800/95 backdrop-blur-md border-b border-primary-900/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                    <div className={`${mobileOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:gap-2 absolute md:relative top-full left-0 w-full md:w-auto bg-primary-800 md:bg-transparent z-50 md:z-auto shadow-lg md:shadow-none`}>
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-5 py-3 md:py-4 text-sm font-medium transition-all relative group
                  ${location.pathname === link.to
                                        ? 'text-accent-400'
                                        : 'text-white/90 hover:text-white'}`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-400 transition-all duration-300 rounded-full
                  ${location.pathname === link.to ? 'w-3/4' : 'w-0 group-hover:w-1/2'}`} />
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 py-2">
                        <button
                            onClick={onLoginClick}
                            className="px-5 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all backdrop-blur-sm"
                        >
                            Login
                        </button>
                        <div className="relative">
                            <button
                                onClick={() => setRegisterOpen(!registerOpen)}
                                className="px-5 py-2 text-sm font-semibold text-primary-900 bg-accent-400 hover:bg-accent-500 rounded-lg transition-all shadow-md hover:shadow-lg"
                            >
                                Register
                            </button>
                            {registerOpen && (
                                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                                    <Link to="/register/farmer" onClick={() => setRegisterOpen(false)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium">
                                        🌾 Register as Farmer
                                    </Link>
                                    <Link to="/register/customer" onClick={() => setRegisterOpen(false)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium border-t border-gray-50">
                                        🛒 Register as Customer
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
