import { Link } from 'react-router-dom';

const fruits = [
    { name: 'Apple', img: '/images/apple.jpg' },
    { name: 'Banana', img: '/images/bana.jpg' },
    { name: 'Mango', img: '/images/m1.jpg' },
    { name: 'Grapes', img: '/images/g1.jpg' },
    { name: 'Orange', img: '/images/o1.jpg' },
    { name: 'Pineapple', img: '/images/pin.jpg' },
    { name: 'Strawberry', img: '/images/str.jpg' },
    { name: 'Watermelon', img: '/images/wat.jpg' },
];

const vegetables = [
    { name: 'Carrot', img: '/images/ca.jpg' },
    { name: 'Tomato', img: '/images/tom.jpg' },
    { name: 'Potato', img: '/images/pot.jpg' },
    { name: 'Onion', img: '/images/onion.jpg' },
    { name: 'Spinach', img: '/images/spin.jpg' },
    { name: 'Cucumber', img: '/images/cum.jpg' },
    { name: 'Broccoli', img: '/images/broc.jpg' },
    { name: 'Capsicum', img: '/images/cap.jpg' },
];

const grains = [
    { name: 'Durum Wheat', img: '/images/durum.jpg', category: 'Wheat' },
    { name: 'Basmati Rice', img: '/images/basmati.jpg', category: 'Rice' },
    { name: 'Pulses', img: '/images/pulse.png', category: 'Pulses' },
];

function CategoryItem({ name, img }) {
    return (
        <Link to="/buyer-portal" className="group flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary-200 group-hover:border-primary-500 transition-all duration-300 shadow-md group-hover:shadow-xl">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <span className="mt-3 font-semibold text-gray-700 group-hover:text-primary-600 transition-colors text-sm">{name}</span>
        </Link>
    );
}

export default function Categories() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Sub-nav */}
            <div className="bg-primary-700 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8 py-3">
                    {['Fruits', 'Vegetables', 'Grains'].map(cat => (
                        <a key={cat} href={`#${cat.toLowerCase()}`} className="text-white/80 hover:text-white font-medium text-sm transition-colors hover:underline underline-offset-4">
                            {cat}
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                {/* Fruits */}
                <section id="fruits" className="mb-16 scroll-mt-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-primary-500 rounded-full" />
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-800">🍎 Fruits</h2>
                    </div>
                    <div className="bg-primary-100/50 rounded-3xl p-6 md:p-8">
                        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                            {fruits.map(item => <CategoryItem key={item.name} {...item} />)}
                        </div>
                    </div>
                </section>

                {/* Vegetables */}
                <section id="vegetables" className="mb-16 scroll-mt-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-primary-500 rounded-full" />
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-800">🥕 Vegetables</h2>
                    </div>
                    <div className="bg-primary-100/50 rounded-3xl p-6 md:p-8">
                        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                            {vegetables.map(item => <CategoryItem key={item.name} {...item} />)}
                        </div>
                    </div>
                </section>

                {/* Grains */}
                <section id="grains" className="scroll-mt-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-primary-500 rounded-full" />
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-800">🌾 Grains</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {grains.map(item => (
                            <div key={item.name} className="text-center">
                                <h3 className="font-heading text-lg font-semibold text-primary-700 mb-4">{item.category}</h3>
                                <CategoryItem {...item} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
