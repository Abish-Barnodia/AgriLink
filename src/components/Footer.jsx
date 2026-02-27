import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-primary-800 to-primary-950 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.webp" alt="AgriLink" className="h-10 w-10 rounded-full border-2 border-white/20" />
                            <span className="font-heading font-bold text-xl">AgriLink</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Empowering farmers by connecting them directly with buyers, ensuring fair pricing and a sustainable agricultural ecosystem.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4 text-accent-400">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/categories', label: 'Categories' },
                                { to: '/market-price', label: 'Market Price' },
                                { to: '/about', label: 'About Us' },
                            ].map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                                        → {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4 text-accent-400">Resources</h4>
                        <ul className="space-y-2">
                            {['FAQ', 'Terms of Service', 'Privacy Policy', 'Careers'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                                        → {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4 text-accent-400">Contact Us</h4>
                        <div className="space-y-3 text-sm text-white/60">
                            <p className="flex items-center gap-2">📧 contact@agrilink.com</p>
                            <p className="flex items-center gap-2">📞 +91 234 567 890</p>
                            <p className="flex items-center gap-2">📍 123 Green Fields, Agri City</p>
                        </div>
                        <div className="flex gap-3 mt-4">
                            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(social => (
                                <a key={social} href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-xs font-bold transition-all" title={social}>
                                    {social[0]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-sm">
                    © 2025 AgriLink - Contract Farming. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
