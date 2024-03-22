import './App.css';
import { useState, createContext } from 'react';
import Login from './screens/Login'
import Register from './screens/Register';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Adminlogin from './screens/Adminlogin';
import Sellerlogin from './screens/Sellerlogin';
import Sellerregister from './screens/Sellerregister';
import Customerhomepage from './screens/Customerhomepage';
import Sellerhomepage from './screens/Sellerhomepage';
import Adminhomepage from './screens/Adminhomepage';
import Customerprofile from './screens/Customerprofile';
import AdminRegister from './screens/AdminRegister';
import ViewCustomers from './screens/ViewCustomers';
import AddItem from './screens/AddItem';
import ViewItems from './screens/ViewItems';
import AddDeliverBoys from './screens/AddDeliverBoys';
import ViewDeliveryBoys from './screens/ViewDeliveryBoys';
import ViewSeller from './screens/ViewSeller';
import ViewTransactions from './screens/ViewTransactions';
import Cart from './screens/Cart';
import ViewTrans from './screens/ViewTrans';
import { CartProvider } from './screens/ContextReducer';
import EditOrderDetails from './screens/EditOrderDetails';

export const store = createContext()

function App() {

  const [token, setToken] = useState(null)
  return (
    <div className="">
      <CartProvider>

        <store.Provider value={[token, setToken]}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/login' element={<Login />} />
              <Route path='/adminlogin' element={<Adminlogin />} />
              <Route path='/sellerlogin' element={<Sellerlogin />} />

              <Route path='/signup' element={<Register />} />
              <Route path='/adminsignup' element={<AdminRegister />} />
              <Route path='/sellerregister' element={<Sellerregister />} />

              <Route path='/customerhomepage' element={<Customerhomepage />} />
              <Route path='/sellerhomepage' element={<Sellerhomepage />} />
              <Route path='/adminhomepage' element={<Adminhomepage />} />

              <Route path='/profile' element={<Customerprofile />} />

              <Route path='/viewitems' element={<ViewItems />} />
              <Route path='/viewcustomers' element={<ViewCustomers />} />
              <Route path='/viewdeliveryboys' element={<ViewDeliveryBoys />} />
              <Route path='/viewsellers' element={<ViewSeller />} />

              <Route path='/additems' element={<AddItem />} />
              <Route path='/adddeliveryboys' element={<AddDeliverBoys />} />

              <Route path='/order' element={<ViewTransactions />} />
              <Route path='/viewtrans' element={<ViewTrans />} />

              <Route path='/cart' element={<Cart />} />

              <Route path='/editorderdetails/:id' element={<EditOrderDetails />} />

            </Routes>
          </BrowserRouter>
        </store.Provider>

      </CartProvider>
    </div>
  );
}

export default App;
