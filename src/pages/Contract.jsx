import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contract() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        sellerName: '', sellerAddress: '', buyerName: '', buyerAddress: '',
        itemDescription: '', price: '', sellerAgree: false, buyerAgree: false
    });
    const [showContract, setShowContract] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const generateContract = () => {
        const { sellerName, sellerAddress, buyerName, buyerAddress, itemDescription, price, sellerAgree, buyerAgree } = formData;
        if (!sellerName || !sellerAddress || !buyerName || !buyerAddress || !itemDescription || !price) {
            alert('Please fill in all required fields');
            return;
        }
        if (!sellerAgree || !buyerAgree) {
            alert('Both parties must agree to the terms and conditions');
            return;
        }
        setShowContract(true);
    };

    const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

    const downloadPDF = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-primary-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-700 to-primary-800 py-8">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="font-heading text-3xl font-bold text-white">Farmer Contract Agreement</h1>
                    <p className="text-white/70 text-sm mt-1">Create and manage your agricultural contracts securely</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
                {/* Form */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                    {/* Seller Details */}
                    <div className="mb-6 p-5 border border-primary-100 rounded-xl bg-primary-50/30">
                        <h3 className="font-heading font-bold text-primary-700 mb-4 pb-2 border-b-2 border-primary-200">Seller (Farmer) Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                <input type="text" name="sellerName" value={formData.sellerName} onChange={handleChange} placeholder="Enter farmer's full name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Complete Address</label>
                                <input type="text" name="sellerAddress" value={formData.sellerAddress} onChange={handleChange} placeholder="Enter farmer's address" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Buyer Details */}
                    <div className="mb-6 p-5 border border-primary-100 rounded-xl bg-primary-50/30">
                        <h3 className="font-heading font-bold text-primary-700 mb-4 pb-2 border-b-2 border-primary-200">Buyer Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                <input type="text" name="buyerName" value={formData.buyerName} onChange={handleChange} placeholder="Enter buyer's full name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Complete Address</label>
                                <input type="text" name="buyerAddress" value={formData.buyerAddress} onChange={handleChange} placeholder="Enter buyer's address" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="mb-6 p-5 border border-primary-100 rounded-xl bg-primary-50/30">
                        <h3 className="font-heading font-bold text-primary-700 mb-4 pb-2 border-b-2 border-primary-200">Product Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Description of Agricultural Products</label>
                                <textarea name="itemDescription" value={formData.itemDescription} onChange={handleChange} rows={4} placeholder="Provide detailed description..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm resize-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Total Contract Value (₹)</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter total contract value" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="mb-6 p-5 border border-primary-100 rounded-xl bg-primary-50/30">
                        <h3 className="font-heading font-bold text-primary-700 mb-4 pb-2 border-b-2 border-primary-200">Terms & Agreement</h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" name="sellerAgree" checked={formData.sellerAgree} onChange={handleChange} className="w-5 h-5 rounded border-gray-300 text-primary-600" />
                                <span className="text-sm text-gray-700">I, the seller, agree to all terms and conditions of this contract</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" name="buyerAgree" checked={formData.buyerAgree} onChange={handleChange} className="w-5 h-5 rounded border-gray-300 text-primary-600" />
                                <span className="text-sm text-gray-700">I, the buyer, agree to all terms and conditions of this contract</span>
                            </label>
                        </div>
                    </div>

                    <div className="text-center">
                        <button onClick={generateContract} className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg text-sm">
                            Generate Contract Agreement
                        </button>
                    </div>
                </div>

                {/* Contract Output */}
                {showContract && (
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-8 border-2 border-primary-200 print:shadow-none print:border-none">
                        <h2 className="font-heading text-2xl font-bold text-primary-700 text-center mb-6 pb-3 border-b-2 border-primary-200">
                            Agricultural Contract Agreement
                        </h2>
                        <p className="text-gray-600 mb-6">This agreement is made on <strong>{currentDate}</strong> between the following parties:</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-4 bg-primary-50 rounded-xl">
                                <h3 className="font-heading font-bold text-primary-600 mb-2">Seller Information</h3>
                                <p><strong>Name:</strong> {formData.sellerName}</p>
                                <p><strong>Address:</strong> {formData.sellerAddress}</p>
                            </div>
                            <div className="p-4 bg-primary-50 rounded-xl">
                                <h3 className="font-heading font-bold text-primary-600 mb-2">Buyer Information</h3>
                                <p><strong>Name:</strong> {formData.buyerName}</p>
                                <p><strong>Address:</strong> {formData.buyerAddress}</p>
                            </div>
                        </div>

                        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                            <h3 className="font-heading font-bold text-primary-600 mb-2">Contract Details</h3>
                            <p><strong>Products:</strong> {formData.itemDescription}</p>
                            <p><strong>Total Value:</strong> ₹{parseFloat(formData.price).toLocaleString('en-IN')}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-heading font-bold text-primary-600 mb-2">Terms and Conditions</h3>
                            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
                                <li>The seller agrees to provide the specified agricultural products as described above.</li>
                                <li>The buyer agrees to purchase the products at the agreed price.</li>
                                <li>Both parties agree to fulfill their respective obligations under this contract.</li>
                                <li>Any disputes shall be resolved through mutual discussion or appropriate legal channels.</li>
                            </ol>
                        </div>

                        <div className="border-t border-gray-200 pt-6 mt-6 grid grid-cols-2 gap-6 text-center text-sm text-gray-600">
                            <div className="border-t border-gray-400 pt-3">
                                <p className="font-semibold">Seller's Signature</p>
                                <p>Date: {currentDate}</p>
                            </div>
                            <div className="border-t border-gray-400 pt-3">
                                <p className="font-semibold">Buyer's Signature</p>
                                <p>Date: {currentDate}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center mt-8 print:hidden">
                            <button onClick={downloadPDF} className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold text-sm">
                                📄 Download / Print
                            </button>
                            <button onClick={() => navigate('/payment')} className="px-6 py-3 bg-accent-400 text-primary-900 rounded-xl hover:bg-accent-500 transition-all font-semibold text-sm">
                                💳 Proceed to Payment
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
