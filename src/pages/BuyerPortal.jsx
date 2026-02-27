import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const regions = {
    maharashtra: ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad"],
    gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    tamilnadu: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"],
    rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
};

const farmerData = {
    maharashtra: {
        pune: [{ name: "Ramesh Patil", crops: "Wheat, Rice", lat: 18.5204, lon: 73.8567 }],
        mumbai: [{ name: "Suresh More", crops: "Vegetables", lat: 19.076, lon: 72.8777 }],
    },
    gujarat: {
        ahmedabad: [{ name: "Patel Farm", crops: "Cotton, Groundnut", lat: 23.0225, lon: 72.5714 }],
    },
    karnataka: {
        bangalore: [{ name: "Kumar Agri", crops: "Coffee, Spices", lat: 12.9716, lon: 77.5946 }],
    },
    tamilnadu: {
        chennai: [{ name: "Tamil Farms", crops: "Paddy, Sugarcane", lat: 13.0827, lon: 80.2707 }],
    },
    rajasthan: {
        jaipur: [{ name: "Rajput Farms", crops: "Millets, Pulses", lat: 26.9124, lon: 75.7873 }],
    },
};

export default function BuyerPortal() {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('buyer');
    const [selectedState, setSelectedState] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [farmerList, setFarmerList] = useState([]);
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        // Dynamically load Leaflet
        const loadLeaflet = async () => {
            if (typeof window !== 'undefined' && !window.L) {
                await new Promise((resolve) => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                    link.onload = resolve;
                    // Fallback resolve in case of error or cache
                    link.onerror = resolve;
                    document.head.appendChild(link);
                });

                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                    script.onload = resolve;
                    script.onerror = resolve;
                    document.body.appendChild(script);
                });
            }
            initMap();
        };
        loadLeaflet();

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    const initMap = () => {
        if (!mapRef.current || mapInstance.current) return;
        const L = window.L;
        mapInstance.current = L.map(mapRef.current).setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstance.current);
        // Load all farmer markers
        Object.keys(farmerData).forEach(state => {
            Object.keys(farmerData[state]).forEach(region => {
                farmerData[state][region].forEach(farmer => {
                    L.marker([farmer.lat, farmer.lon]).addTo(mapInstance.current)
                        .bindPopup(`<b>${farmer.name}</b><br/>Crops: ${farmer.crops}<br/>Location: ${region}, ${state}`);
                });
            });
        });
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedRegion('');
        setFarmerList([]);
    };

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
        const state = selectedState;
        const region = e.target.value.toLowerCase();
        if (state && region && farmerData[state]?.[region]) {
            const farmer = farmerData[state][region][0];
            mapInstance.current?.setView([farmer.lat, farmer.lon], 10);
        }
    };

    const findFarmers = () => {
        const state = selectedState;
        const region = selectedRegion.toLowerCase();
        if (state && region && farmerData[state]?.[region]) {
            setFarmerList(farmerData[state][region]);
        } else {
            setFarmerList([]);
        }
        navigate('/farmer-profiles');
    };

    const searchLocation = async () => {
        if (!searchInput || !window.L) return;
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchInput)}`);
            const data = await response.json();
            if (data.length > 0) {
                const loc = data[0];
                const lat = parseFloat(loc.lat);
                const lon = parseFloat(loc.lon);
                if (markerRef.current) mapInstance.current.removeLayer(markerRef.current);
                markerRef.current = window.L.marker([lat, lon]).addTo(mapInstance.current).bindPopup(`<b>${loc.display_name}</b>`).openPopup();
                mapInstance.current.setView([lat, lon], 10);
            } else {
                alert('Location not found');
            }
        } catch {
            alert('Error searching location');
        }
    };

    const messageSeller = () => {
        if (userType === 'buyer') {
            const msg = prompt('Enter your message to the farmer:');
            if (msg) alert('Message sent to farmer: ' + msg);
        } else {
            alert("Please select 'Buyer' to message sellers.");
        }
    };

    return (
        <div className="min-h-screen bg-earth-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                <div className="grid md:grid-cols-[280px_1fr] gap-6">
                    {/* Sidebar */}
                    <div className="bg-gradient-to-b from-primary-500 to-primary-700 rounded-2xl p-6 text-white h-fit">
                        <label className="text-sm font-semibold text-white/80 uppercase tracking-wider">User Type</label>
                        <select
                            value={userType}
                            onChange={e => setUserType(e.target.value)}
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30 outline-none text-sm"
                        >
                            <option value="buyer" className="text-gray-900">Buyer</option>
                            <option value="seller" className="text-gray-900">Seller</option>
                        </select>
                        <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/20">
                            <h3 className="font-heading font-bold text-lg mb-3">🤝 Connect with Farmers</h3>
                            <p className="text-white/70 text-sm mb-4">Send direct messages to farmers in your selected area.</p>
                            {userType === 'buyer' && (
                                <button onClick={messageSeller} className="w-full py-2.5 bg-accent-400 text-primary-900 font-semibold rounded-lg hover:bg-accent-500 transition-all text-sm">
                                    Message Seller
                                </button>
                            )}
                        </div>
                        <div className="mt-4 space-y-2">
                            <Link to="/categories" className="block w-full py-2 text-center bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all">Browse Categories</Link>
                            <Link to="/market-price" className="block w-full py-2 text-center bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all">Market Prices</Link>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="space-y-6">
                        {/* Search & Filters */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">Find Farmers Near You</h2>
                            <div className="flex gap-3 mb-4">
                                <input
                                    type="text"
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && searchLocation()}
                                    placeholder="Search location..."
                                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm"
                                />
                                <button onClick={searchLocation} className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold text-sm">
                                    Search
                                </button>
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <select value={selectedState} onChange={handleStateChange} className="flex-1 min-w-[180px] px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm bg-white">
                                    <option value="">Select State</option>
                                    {Object.keys(regions).map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                                </select>
                                <select value={selectedRegion} onChange={handleRegionChange} className="flex-1 min-w-[180px] px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm bg-white">
                                    <option value="">Select Region</option>
                                    {selectedState && regions[selectedState]?.map(r => <option key={r} value={r.toLowerCase()}>{r}</option>)}
                                </select>
                                <button onClick={findFarmers} className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold text-sm">
                                    Find Farmers
                                </button>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">📍 Farmer Locations</h2>
                            <div ref={mapRef} className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200" />
                        </div>

                        {/* Farmer List */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">Nearby Farmers</h2>
                            {farmerList.length > 0 ? (
                                <div className="space-y-3">
                                    {farmerList.map((f, i) => (
                                        <div key={i} className="p-4 bg-primary-50 rounded-xl border border-primary-100">
                                            <p className="font-semibold text-primary-700">{f.name}</p>
                                            <p className="text-sm text-gray-600">Crops: {f.crops}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-400 italic text-sm">Select a state and region to find farmers, or search for a location.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
