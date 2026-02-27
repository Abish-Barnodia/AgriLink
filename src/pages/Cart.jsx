import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const [cart, setCart] = useState([]);
    const pricePerKg = 100;

    const addToCart = () => {
        setCart(prev => [...prev, { item: 'Fresh Apples', qty, total: qty * pricePerKg }]);
    };

    const removeFromCart = (index) => {
        setCart(prev => prev.filter((_, i) => i !== index));
    };

    const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

    const messageFarmer = () => {
        const message = prompt('Enter your message to the farmer:');
        if (message) alert('Message sent to the farmer: ' + message);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
                <h1 className="font-heading text-3xl font-bold text-primary-700 text-center mb-8">🛒 Apple Cart</h1>

                {/* Product */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 text-center sm:text-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" alt="Apple" className="w-28 h-28 shrink-0 object-cover rounded-xl border-2 border-primary-200" />
                        <div className="flex-1 w-full">
                            <h3 className="font-heading font-bold text-xl text-gray-900">Fresh Apples</h3>
                            <p className="text-primary-600 font-semibold mt-1">₹100 per kg</p>
                            <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
                                <label className="text-sm text-gray-600">Quantity (kg):</label>
                                <input
                                    type="number"
                                    min={1}
                                    value={qty}
                                    onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-20 px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm text-center"
                                />
                            </div>
                        </div>
                        <button onClick={addToCart} className="shrink-0 w-full sm:w-auto px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold text-sm shadow-md">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-6">
                    <h3 className="font-heading font-bold text-xl text-primary-700 mb-4">Your Cart</h3>
                    {cart.length === 0 ? (
                        <p className="text-gray-400 italic text-sm text-center py-6">Your cart is empty. Add items above.</p>
                    ) : (
                        <div className="space-y-3">
                            {cart.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                    <div>
                                        <span className="font-medium text-gray-700">{item.item}</span>
                                        <span className="text-sm text-gray-500 ml-2">— {item.qty} kg</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold text-primary-700">₹{item.total}</span>
                                        <button onClick={() => removeFromCart(i)} className="text-red-400 hover:text-red-600 transition-colors text-sm">✕</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                        <span className="text-lg font-bold text-gray-900">Grand Total: </span>
                        <span className="text-2xl font-bold text-primary-700">₹{grandTotal}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-center">
                    <button onClick={() => navigate('/contract')} className="px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold text-sm shadow-lg">
                        📝 Create Contract
                    </button>
                    <button onClick={messageFarmer} className="px-8 py-3 bg-white text-primary-700 border-2 border-primary-200 rounded-xl hover:bg-primary-50 transition-all font-semibold text-sm">
                        💬 Message Farmer
                    </button>
                </div>
            </div>
        </div>
    );
}
