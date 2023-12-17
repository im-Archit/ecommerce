import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation.jsx';
import HomePage from './customer/components/pages/HomePage/HomePage.jsx';
import Footer from './customer/components/Footer/Footer.jsx';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CartItem from './customer/components/Cart/CartItem';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetail from './customer/components/Order/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="">
      <Routes>
<Route path='/*' element={<CustomerRoutes/>}> </Route>
      </Routes>
       
      <Navigation />
      <div>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
