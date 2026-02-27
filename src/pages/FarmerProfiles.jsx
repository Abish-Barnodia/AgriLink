import { useNavigate } from 'react-router-dom';

const farmers = [
    { name: 'Rahul', specialty: 'Wheat Farmer | 10+ years experience', img: '/images/f1.jpg', linkTo: '/cart' },
    { name: 'Shamu', specialty: 'Rice Specialist | Organic Farming', img: '/images/f2.jpg', linkTo: '/contract' },
    { name: 'Ali', specialty: 'Dairy Farming | Sustainable Methods', img: '/images/f3.jpg', linkTo: '/contract' },
    { name: 'Ramesh', specialty: 'Corn Farmer | Precision Agriculture', img: '/images/f4.jpg', linkTo: '/contract' },
    { name: 'Subhash', specialty: 'Livestock Farmer | Ethical Practices', img: '/images/f5.jpg', linkTo: '/contract' },
    { name: 'Mohit', specialty: 'Fruit Grower | Organic Practices', img: '/images/f6.webp', linkTo: '/contract' },
    { name: 'Lalu', specialty: 'Vegetable Farmer | Hydroponics Expert', img: '/images/f7.jpeg', linkTo: '/contract' },
];

export default function FarmerProfiles() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-700 to-primary-800 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="font-heading text-3xl font-bold text-white">Farmers Directory</h1>
                    <p className="text-white/70 text-sm mt-1">Connect with experienced farmers across the country</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {farmers.map((farmer, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-primary-200 group-hover:border-primary-400 transition-colors shadow-md">
                                <img src={farmer.img} alt={farmer.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-heading font-bold text-lg text-primary-700 mt-4">{farmer.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{farmer.specialty}</p>
                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => navigate(farmer.linkTo)}
                                    className="flex-1 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold text-sm"
                                >
                                    {farmer.linkTo === '/cart' ? '🛒 Add to Cart' : '📝 Create Contract'}
                                </button>
                                <button
                                    onClick={() => { const msg = prompt(`Send a message to ${farmer.name}:`); if (msg) alert(`Message sent to ${farmer.name}: ${msg}`); }}
                                    className="px-4 py-2.5 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-all text-sm font-semibold"
                                >
                                    💬
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
