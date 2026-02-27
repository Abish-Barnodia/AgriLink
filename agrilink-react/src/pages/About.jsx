import { Link } from 'react-router-dom';

const team = [
    { name: 'Abish Barnodia', role: 'Founder' },
    { name: 'Aniket Das', role: 'Founder' },
    { name: 'Anagha', role: 'Founder' },
    { name: 'Chaitra', role: 'Founder' },
];

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-700 to-primary-800 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="font-heading text-4xl font-bold text-white mb-3">About AgriLink</h1>
                    <p className="text-white/70">Bridging the gap between farmers and buyers</p>
                    <div className="flex justify-center gap-4 mt-6">
                        <Link to="/" className="px-4 py-2 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all border border-white/20">Home</Link>
                        <a href="#team" className="px-4 py-2 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all border border-white/20">Our Team</a>
                        <a href="#contact" className="px-4 py-2 text-sm bg-accent-400 text-primary-900 rounded-lg hover:bg-accent-500 transition-all font-semibold">Contact</a>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
                {/* Mission */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
                    <h2 className="font-heading text-2xl font-bold text-primary-700 mb-4 text-center">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify mb-4">
                        Welcome to our Contract Farming platform, where we empower farmers by connecting them directly with buyers, ensuring fair pricing and a sustainable agricultural ecosystem. Our goal is to revolutionize the farming sector by providing seamless communication, resources, and trust between farmers and businesses.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                        We prioritize transparency and efficiency in contract farming, making it easier for both farmers and buyers to collaborate for mutual benefit. Our platform is designed to bridge the gap, enhance productivity, and create lasting partnerships in the agricultural industry.
                    </p>
                </div>

                {/* Team */}
                <section id="team" className="mb-12 scroll-mt-20">
                    <h2 className="font-heading text-2xl font-bold text-primary-700 mb-8 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {team.map(member => (
                            <div key={member.name} className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                                    {member.name[0]}
                                </div>
                                <h3 className="font-heading font-bold text-primary-700">{member.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-20">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                        <h2 className="font-heading text-2xl font-bold text-primary-700 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-2">📧 contact@contractfarming.com &nbsp;|&nbsp; 📞 +1 234 567 890</p>
                        <p className="text-gray-600 mb-6">📍 123 Green Fields, Agri City, Country</p>
                        <div className="flex justify-center gap-4">
                            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                                <a key={social} href="#" className="px-4 py-2 bg-primary-50 text-primary-700 rounded-xl text-sm font-semibold hover:bg-primary-100 transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
