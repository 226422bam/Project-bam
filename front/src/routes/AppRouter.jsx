import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header' //เพิ่มการนำเข้าไฟล์ About.js
import UserHome from '../layout/UserHome'
import Product from '../layout/Product'
import Contact from '../layout/Contact'
import Details from '../layout/Details'
import ShoppingCart from '../layout/ShoppingCart'
import Payment from '../layout/Payment'
import { CartItem } from '../layout/CartItem'








const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Header />
      <Outlet />
      </>

    ),
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
      { path: '/product', element: <Product />},
      { path: '/contact', element: <Contact />},
      { path: '/shoppingcart', element: <ShoppingCart />},
      { path: '/details', element: <Details />},
      { path: '/payment', element: <Payment />},
      { path: '/cartitem', element: <CartItem />},
      

    ],
  },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children : [
      { index: true, element: <UserHome /> },
      { path: '/product', element: <Product/>},
      { path: '/contact', element: <Contact />},
      { path: '/shoppingcart', element: <ShoppingCart />},
      { path: '/details', element: <Details />},
      { path: '/payment', element: <Payment />},
    ],
  },
]);


export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}