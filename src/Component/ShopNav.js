import React from 'react';
import Cart from './Cart'
import Shop from './Shop';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux"
import { Badge } from "reactstrap"
import { useGlobalContext } from './Context';

function ShopNav() {
  const {isSidebarOpen,closeSidebar,openSidebar} = useGlobalContext()
  const carts = useSelector(state => state.cart.cart)

  return (

    <nav className="navbar navbar-expand-md bg-info fixed-top shadow">
      <div className="container-fluid ">
        <NavLink to="/react-redux-shopping-store%20" element={<Shop />} id="logo">Shop</NavLink>

        <div className={`
        ${"navigation-bar"} 
        ${isSidebarOpen ? "show hamburger-menu" : "hide"}`
        }
          onClick={closeSidebar}
        >

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/react-redux-shopping-store%20" element={<Shop />}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/react-redux-shopping-store%20" element={<Shop />}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/react-redux-shopping-store%20" element={<Shop />}>About</NavLink>
            </li>
            <li className="nav-item hamburger-cart">
              <NavLink to="/cart" element={<Cart />}>Cart</NavLink>
            </li>
          </ul>
        </div>
        <button
          className={`${isSidebarOpen ? "d-none" : "navbar-toggler"}`}
          onClick={openSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button
          className={`${!isSidebarOpen ? "d-none" : "navbar-toggler bg-danger"}`}
          onClick={closeSidebar}
        >
          <span className="btn-close"></span>
        </button>
        <div className='d-none d-md-block'>
          <ul className="navbar-nav">
            <li className="nav-item me-2 ">
              <button className='btn btn-light'>Login</button>
            </li>
            <li className="nav-item me-5">
              <button className='btn btn-light'>
                <NavLink
                  to="/cart"
                  element={<Cart />}
                  className="cart-link "
                >
                  Cart {" "}
                  <Badge color="danger">
                    {carts.length}
                  </Badge>

                </NavLink>
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default ShopNav