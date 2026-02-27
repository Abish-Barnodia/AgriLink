import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroSlides = [
    { src: 'https://plus.unsplash.com/premium_photo-1663945779273-ebc45569fb9f?q=80&w=1470&auto=format&fit=crop', alt: 'Agriculture' },
    { src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop', alt: 'Farming' },
    { src: '/far3.jpg', alt: 'Farm field' },
];

const fruits = [
    { name: 'Apple', src: 'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?fm=jpg&q=60&w=3000' },
    { name: 'Banana', src: 'https://images.unsplash.com/photo-1667308888281-8030a5f827c5?w=500&auto=format&fit=crop&q=60' },
    { name: 'Mango', src: 'https://plus.unsplash.com/premium_photo-1674382738984-c010d9649904?w=500&auto=format&fit=crop&q=60' },
    { name: 'Grapes', src: 'https://images.unsplash.com/photo-1586845321447-3ed2cbcc06da?w=500&auto=format&fit=crop&q=60' },
    { name: 'Orange', src: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=500&auto=format&fit=crop&q=60' },
    { name: 'Pineapple', src: 'https://plus.unsplash.com/premium_photo-1664391957389-43b217a5f4f3?w=500&auto=format&fit=crop&q=60' },
    { name: 'Strawberry', src: 'https://images.unsplash.com/photo-1684354638444-915f0dddb6ff?w=500&auto=format&fit=crop&q=60' },
    { name: 'Watermelon', src: 'https://images.unsplash.com/photo-1606093569355-1077a5eea6d1?w=500&auto=format&fit=crop&q=60' },
];

const reviews = [
    { name: 'Alison Reynolds', stars: 5, text: 'This platform was recommended to me and it exceeded all expectations. The connection with local farmers is seamless!' },
    { name: 'John Doe', stars: 4, text: 'Great service and support. The market prices feature helps me stay informed daily. Highly recommended!' },
    { name: 'David Wilson', stars: 4, text: 'Very informative and user-friendly platform. Made contract farming so much easier for everyone.' },
    { name: 'Sarah Johnson', stars: 3, text: 'Decent experience overall. Some features could be improved but the core functionality is solid.' },
    { name: 'Sofina Aghios', stars: 5, text: 'Absolutely love this platform! It is revolutionizing how we do agricultural business. A must-have tool.' },
    { name: 'Ramesh Kumar', stars: 4, text: 'As a farmer, this portal has helped me connect with buyers directly. My income has increased significantly!' },
];

export default function Home() {
    return (
        <div>
            {/* Hero Slider */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Swiper modules={[Autoplay, EffectFade]} effect="fade" loop autoplay={{ delay: 3000, disableOnInteraction: false }} className="h-full">
                    {heroSlides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative h-full">
                                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                        Agriculture & Farmers Welfare
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Connecting farmers directly with buyers for fair pricing and sustainable growth.
                    </p>
                    <Link to="/categories" className="inline-block mt-4 px-6 py-3 bg-accent-400 text-primary-900 font-semibold rounded-xl hover:bg-accent-500 transition-all shadow-lg hover:shadow-xl">
                        Explore Categories →
                    </Link>
                </div>
            </section>

            {/* DA & FW Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Organisation</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">DA & FW Organisation</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The DA & FW is organized into 28 Divisions and has five attached offices and twenty-one subordinate offices which are spread across the country for coordination with state-level agencies and implementation of Central Sector Schemes.
                        </p>
                        <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all shadow-md font-medium text-sm">
                            Learn More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <h3 className="font-heading text-2xl font-bold text-gray-900 mt-10 mb-3">Recent Initiatives</h3>
                        <div className="space-y-2">
                            {['Budget 2024-25 Agricultural Reforms', 'e-Compendium of Farm Reforms', 'Central Sector Scheme for Digital Agriculture'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors cursor-pointer">
                                    <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="/farm.jpg" alt="Farmers" className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-48 w-full object-cover" />
                        <img src="https://images.unsplash.com/photo-1615472910606-9d4f7291944f?q=80&w=1474&auto=format&fit=crop" alt="Harvesting" className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-48 w-full object-cover" />
                        <img src="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=1374&auto=format&fit=crop" alt="Agriculture" className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-48 w-full object-cover" />
                        <img src="https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?q=80&w=1470&auto=format&fit=crop" alt="Farm Work" className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-48 w-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Fruits Slider */}
            <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-10">
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Fresh Produce</span>
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mt-2">Our Farm Products</h2>
                    </div>
                    <Swiper modules={[Autoplay]} slidesPerView={3} spaceBetween={20} loop autoplay={{ delay: 2000, pauseOnMouseEnter: true }} breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}>
                        {fruits.map((fruit, i) => (
                            <SwiperSlide key={i}>
                                <Link to="/categories" className="group flex flex-col items-center p-4">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-200 group-hover:border-primary-400 transition-all shadow-lg group-hover:shadow-xl group-hover:scale-110 transform duration-300">
                                        <img src={fruit.src} alt={fruit.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="mt-3 font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">{fruit.name}</span>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Agriculture Reforms + Farming Agreement */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Agriculture Reforms</h3>
                        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&auto=format&fit=crop&q=60" alt="Farming" className="w-full h-40 object-cover rounded-xl mb-4" />
                        <ul className="space-y-2">
                            {['Budget 2022-23 Webinar', 'e-Compendium of Farm Reforms', 'Central Sector Scheme'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 cursor-pointer transition-colors">
                                    <span className="text-primary-500">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Farming Agreement</h3>
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60" alt="Agreement" className="w-full h-40 object-cover rounded-xl mb-4" />
                        <ul className="space-y-2">
                            {['Model farming agreement', 'Farmers Welfare Programs', 'MoUs on database'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 cursor-pointer transition-colors">
                                    <span className="text-primary-500">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <Link to="/categories" className="block p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
                                <p className="font-semibold text-primary-700">🌾 Browse Categories</p>
                                <p className="text-xs text-gray-500 mt-1">Explore fruits, vegetables & grains</p>
                            </Link>
                            <Link to="/market-price" className="block p-4 bg-accent-400/10 rounded-xl hover:bg-accent-400/20 transition-colors">
                                <p className="font-semibold text-earth-700">📊 Market Prices</p>
                                <p className="text-xs text-gray-500 mt-1">Check today's commodity prices</p>
                            </Link>
                            <Link to="/buyer-portal" className="block p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
                                <p className="font-semibold text-primary-700">🤝 Buyer Portal</p>
                                <p className="text-xs text-gray-500 mt-1">Find and connect with farmers</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-10">
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mt-2">What Our Users Say</h2>
                    </div>
                    <Swiper modules={[Autoplay]} slidesPerView={1} spaceBetween={24} loop autoplay={{ delay: 3500, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                        {reviews.map((review, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                            <div className="text-accent-500 text-sm">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* About CTA */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">About AgriLink</h2>
                    <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                        The Department of Agriculture & Farmers Welfare (DA&FW) is dedicated to the development and welfare of farmers across the nation. Our mission is to ensure sustainable agricultural growth and promote innovative farming practices.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Contact Us', 'Careers', 'FAQs', 'Privacy Policy'].map(link => (
                            <a key={link} href="#" className="px-5 py-2 text-sm text-white/80 hover:text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
