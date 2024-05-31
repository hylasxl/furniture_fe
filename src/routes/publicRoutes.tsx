import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/Login/LoginPage';
import RegisterPage from '../pages/Login/Register/RegisterPage';
import AdminPrivateRoute from './adminPrivateRoute';
import AdminAccountPage from '../pages/Admin/AdminAccount/AdminAccountPage';
import AdminProductPage from '../pages/Admin/AdminProduct/AdminProductPage';
import AdminProductPage_AddNew from '../pages/Admin/AdminProduct/AdminProductPage_AddNew';
import ProductPage from '../pages/Product/ProductPage';
import CartPage from '../pages/Cart/CartPage';
import AdminOrderPage from '../pages/Admin/AdminOrder/AdminOrderPage';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route element={<AdminPrivateRoute />}>
                <Route path='/admin/account' element={<AdminAccountPage />} />
            </Route>
            <Route element={<AdminPrivateRoute />}>
                <Route path='/admin/order' element={<AdminOrderPage />} />
            </Route>
            <Route path='/cart' element={<CartPage/>}/>
            <Route element={<AdminPrivateRoute />}>
                <Route path='/admin/product' element={<AdminProductPage />}></Route>
            </Route>
            <Route element={<AdminPrivateRoute />}>
                <Route path='/admin/product/add-new' element={<AdminProductPage_AddNew />}></Route>
            </Route>
        </Routes>
    );
};
export default PublicRoutes;
