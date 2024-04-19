import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: <b>Login</b> },
  { to : '/register', text: <b>Sign Up</b> },

]

const userNav = [

]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100 border-b-2 border-solid border-gray-200">
   <div className="navbar bg-base-600 flex items-center justify-between">
    <div>
      <img 
        src="https://i.pinimg.com/564x/22/a8/c4/22a8c4e5e8ac56627bade63fc575ce57.jpg" 
        alt="User Avatar" 
        className="w-16 h-16 rounded-full ml-4"
      />
    </div>
</div>

      <div className="flex justify-center ">
        <Link to={user?.id? "/" : "/"} className="btn btn-ghost text-sm">
        Home
        </Link>
      </div>

      <div className="">
        <Link to={user?.id? "/product" : "/"} className="btn btn-ghost text-sm">
        Product
        </Link>
      </div>

      
      <div className="flex-1">
        <Link to={user?.id? "/contact" : "/"} className="btn btn-ghost text-sm">
        Contact
        </Link>
      </div>

      
      <Link to="/ShoppingCart">
      <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">2</span>
        </div>
      </Link>
      
                
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li className='btn btn-ghost text-sm'>
              <Link to='#' onClick={hdlLogout}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}