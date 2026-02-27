import { useState, useMemo } from 'react';
import { commodityData, states, formatName } from '../data/commodityData';

export default function MarketPrice() {
    const [search, setSearch] = useState('');
    const [state, setState] = useState('');
    const [priceUnit, setPriceUnit] = useState('');

    const filtered = useMemo(() => {
        return commodityData.filter(item => {
            const q = search.toLowerCase();
            const matchesSearch = !q ||
                item.state.includes(q) || item.district.includes(q) ||
                item.market.includes(q) || item.commodity.includes(q) ||
                item.variety.toLowerCase().includes(q);
            const matchesState = !state || item.state === state;
            return matchesSearch && matchesState;
        });
    }, [search, state]);

    const unit = priceUnit === 'ton' ? '/ton' : '/kg';

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-700 to-primary-800 py-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                        Daily Commodity Prices
                    </h1>
                    <p className="text-white/70 text-sm">Updated market rates across India</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-6 border border-gray-100">
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex-1 min-w-[200px]">
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <input
                                    type="text"
                                    placeholder="Search commodities, markets..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-sm"
                                />
                            </div>
                        </div>
                        <select
                            value={priceUnit}
                            onChange={e => setPriceUnit(e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm bg-white min-w-[140px]"
                        >
                            <option value="">Price Unit</option>
                            <option value="kg">Per Kg</option>
                            <option value="ton">Per Ton</option>
                        </select>
                        <select
                            value={state}
                            onChange={e => setState(e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none text-sm bg-white min-w-[180px]"
                        >
                            {states.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                        </select>
                        <div className="text-sm text-gray-500 font-medium">
                            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto max-h-[600px]">
                        <table className="w-full text-sm">
                            <thead className="bg-primary-600 text-white sticky top-0">
                                <tr>
                                    {['No.', 'State', 'District', 'Market', 'Commodity', 'Variety', 'Grade', 'Date', 'Min Price', 'Max Price', 'Modal Price'].map(h => (
                                        <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.length === 0 ? (
                                    <tr>
                                        <td colSpan={11} className="text-center py-12 text-gray-400 italic">
                                            No data available for the selected filters.
                                        </td>
                                    </tr>
                                ) : (
                                    filtered.map((item, i) => (
                                        <tr key={i} className={`border-b border-gray-50 hover:bg-primary-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                                            <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                                            <td className="px-4 py-3 font-medium">{formatName(item.state)}</td>
                                            <td className="px-4 py-3">{formatName(item.district)}</td>
                                            <td className="px-4 py-3">{formatName(item.market)}</td>
                                            <td className="px-4 py-3 font-medium text-primary-700">{formatName(item.commodity)}</td>
                                            <td className="px-4 py-3">{item.variety}</td>
                                            <td className="px-4 py-3">
                                                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">{item.grade}</span>
                                            </td>
                                            <td className="px-4 py-3 whitespace-nowrap">{item.arrivalDate}</td>
                                            <td className="px-4 py-3 text-red-600 font-medium">₹{item.minPrice}{unit}</td>
                                            <td className="px-4 py-3 text-green-600 font-medium">₹{item.maxPrice}{unit}</td>
                                            <td className="px-4 py-3 font-bold text-primary-700">₹{item.modalPrice}{unit}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
