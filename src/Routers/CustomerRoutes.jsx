import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/components/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/navigation/Navigation.jsx'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'


const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation />
        </div>
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}> </Route>
        <Route path='/product/:productId' element={<ProductDetails />}> </Route>
        <Route path='/checkout' element={<Checkout />}> </Route>
        <Route path='/account/order' element={<Order />}> </Route>
        <Route path='/account/order/:orderId' element={<OrderDetail />}> </Route>
        {/* <Route path='/checkout' element={<Checkout />}> </Route> */}

      
 
  
        {/* <Order/> */}
        {/* <OrderDetail /> */}
      </Routes>
    </div>
  )
}

export default CustomerRoutes
