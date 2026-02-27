import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FarmerRegistration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '', dob: '', age: '', language: '', state: '',
        address: '', crop: '', otherCrop: '', fruit: '', otherFruit: '',
        vegetable: '', otherVegetable: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const calculateAge = (dob) => {
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) age--;
        return age;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updates = { [name]: value };
        if (name === 'dob') updates.age = calculateAge(value);
        setFormData(prev => ({ ...prev, ...updates }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => navigate('/'), 2000);
    };

    const stateOptions = ['Andhra Pradesh', 'Bihar', 'Gujarat', 'Karnataka', 'Maharashtra', 'Punjab', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'];
    const cropOptions = ['Wheat', 'Rice', 'Corn', 'Sugarcane', 'Other'];
    const fruitOptions = ['Mango', 'Apple', 'Banana', 'Grapes', 'Other'];
    const vegOptions = ['Potato', 'Tomato', 'Onion', 'Carrot', 'Other'];

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
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center py-10 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-primary-700 text-center mb-6">🌾 Farmer Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                            <input type="text" value={formData.age} readOnly className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Language</label>
                        <input type="text" name="language" value={formData.language} onChange={handleChange} placeholder="e.g., English, Hindi, Tamil" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">State</label>
                        <select name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm bg-white">
                            <option value="">Select State</option>
                            {stateOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                    </div>
                    {/* Crop, Fruit, Vegetable selects */}
                    {[
                        { label: 'Select Crop', name: 'crop', other: 'otherCrop', options: cropOptions },
                        { label: 'Select Fruit', name: 'fruit', other: 'otherFruit', options: fruitOptions },
                        { label: 'Select Vegetable', name: 'vegetable', other: 'otherVegetable', options: vegOptions },
                    ].map(field => (
                        <div key={field.name}>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
                            <select name={field.name} value={formData[field.name]} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm bg-white">
                                <option value="">{field.label}</option>
                                {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                            {formData[field.name] === 'Other' && (
                                <input type="text" name={field.other} value={formData[field.other]} onChange={handleChange} placeholder={`Enter ${field.label.replace('Select ', '')} Name`} required className="w-full mt-2 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-sm" />
                            )}
                        </div>
                    ))}
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg text-sm mt-4">
                        Register as Farmer
                    </button>
                </form>
            </div>
        </div>
    );
}
