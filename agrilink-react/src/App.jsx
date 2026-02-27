import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import Categories from './pages/Categories';
import MarketPrice from './pages/MarketPrice';
import About from './pages/About';
import FarmerRegistration from './pages/FarmerRegistration';
import CustomerRegistration from './pages/CustomerRegistration';
import BuyerPortal from './pages/BuyerPortal';
import FarmerProfiles from './pages/FarmerProfiles';
import Contract from './pages/Contract';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar onLoginClick={() => setLoginOpen(true)} />
        <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/market-price" element={<MarketPrice />} />
            <Route path="/about" element={<About />} />
            <Route path="/register/farmer" element={<FarmerRegistration />} />
            <Route path="/register/customer" element={<CustomerRegistration />} />
            <Route path="/buyer-portal" element={<BuyerPortal />} />
            <Route path="/farmer-profiles" element={<FarmerProfiles />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
