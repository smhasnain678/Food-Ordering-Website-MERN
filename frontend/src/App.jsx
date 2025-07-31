import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import ProductCard from './components/ProductCard/ProductCard'
import CardSlider from './components/CardSlider/CardSlider'
import LargeBanner from './components/LargeBanner/LargeBanner'
import BestSelling from './components/BestSelling/BestSelling'
import FixedBanner from './components/FixedBanner/FixedBanner'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Testimonial from './components/Testimonial/Testimonial'
import InfoComponent from './components/InfoComponent/InfoComponent'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import OurServices from './pages/OurServices/OurServices'
import Menu from './pages/Menu/Menu'
import ContactUs from './pages/ContactUs/ContactUs'

const App = () => {

    const [showLogin, setShowLogin] = useState(false)
    const location = useLocation();
    const minimalRoutes = ['/myorders', '/cart', '/order', '/verify', '/menu', '/ourservices', '/contactus'];
    const isMinimalRoute = minimalRoutes.includes(location.pathname);


    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<PlaceOrder />} />
                    <Route path='/verify' element={<Verify />} />
                    <Route path='/myorders' element={<MyOrders />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/ourservices' element={<OurServices />} />
                    <Route path='/contactus' element={<ContactUs />} />
                </Routes>
                {!isMinimalRoute && <ProductCard />}
            </div>
            {!isMinimalRoute && (
                <>
                    <CardSlider />
                    <LargeBanner />
                    <BestSelling />
                    <FixedBanner />
                    <FeaturedProducts />
                    <Testimonial />
                    <InfoComponent />
                </>
            )}
            <Footer />
        </>
    )
}

export default App