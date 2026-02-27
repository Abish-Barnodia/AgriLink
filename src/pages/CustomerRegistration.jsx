import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerRegistration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '', state: '', postalcode: '', address: '', aadhaar: '', phone: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => navigate('/'), 2000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary-700 mb-2">Registration Successful!</h2>
                    <p className="text-gray-500">Redirecting to homepage...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center py-10 px-4" style={{ backgroundImage: 'url(/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-primary-700 text-center mb-2">Welcome!</h2>
                <p className="text-gray-500 text-center text-sm mb-6">Kindly enter your details to register</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        { label: 'Full Name', name: 'fullname', type: 'text', placeholder: 'Enter your full name' },
                        { label: 'State', name: 'state', type: 'text', placeholder: 'Enter your state' },
                        { label: 'Postal Code', name: 'postalcode', type: 'text', placeholder: 'Enter postal code' },
                        { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter your address' },
                        { label: 'Aadhaar Number', name: 'aadhaar', type: 'text', placeholder: 'Enter Aadhaar number' },
                        { label: 'Phone Number', name: 'phone', type: 'text', placeholder: '+91 XXXXXXXXXX' },
                    ].map(field => (
                        <div key={field.name}>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
                            <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                        </div>
                    ))}
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg text-sm mt-4">
                        Submit Registration
                    </button>
                </form>
            </div>
        </div>
    );
}
