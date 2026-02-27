import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: '📱' },
    { id: 'gpay', name: 'Google Pay', icon: '💳' },
    { id: 'paytm', name: 'Paytm', icon: '💰' },
    { id: 'phonepe', name: 'PhonePe', icon: '📲' },
];

export default function Payment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ buyerName: '', amount: '' });
    const [selectedMethod, setSelectedMethod] = useState('upi');
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const processPayment = () => {
        if (!formData.buyerName || !formData.amount) {
            alert('Please fill in all required fields');
            return;
        }
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setSuccess(true);
        }, 2000);
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md border border-gray-100">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary-700 mb-2">Payment Successful!</h2>
                    <p className="text-gray-500 mb-2">₹{parseFloat(formData.amount).toLocaleString('en-IN')} paid via {paymentMethods.find(m => m.id === selectedMethod)?.name}</p>
                    <p className="text-gray-400 text-sm mb-6">Thank you for your payment, {formData.buyerName}.</p>
                    <button onClick={() => navigate('/')} className="px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold text-sm">
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center py-10 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-primary-700 text-center mb-6">💳 Payment</h2>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input type="text" name="buyerName" value={formData.buyerName} onChange={handleChange} placeholder="Enter your full name" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Amount (₹)</label>
                        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Enter amount" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                    </div>
                </div>

                <h3 className="font-heading font-semibold text-gray-700 mb-3">Select Payment Method</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {paymentMethods.map(method => (
                        <button
                            key={method.id}
                            onClick={() => setSelectedMethod(method.id)}
                            className={`p-4 rounded-xl border-2 text-center transition-all ${selectedMethod === method.id
                                    ? 'border-primary-500 bg-primary-50 shadow-md'
                                    : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                                }`}
                        >
                            <span className="text-2xl block mb-1">{method.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{method.name}</span>
                        </button>
                    ))}
                </div>

                <button
                    onClick={processPayment}
                    disabled={processing}
                    className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg disabled:opacity-60 text-sm"
                >
                    {processing ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                            Processing...
                        </span>
                    ) : 'Pay Now'}
                </button>
            </div>
        </div>
    );
}
