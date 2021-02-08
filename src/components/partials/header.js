import React, { useEffect,useState } from 'react'
import propTypes from 'prop-types'

import { Link, withRouter } from 'react-router-dom'

function Header ({ onLight, location }) {

  const [User, setUser] = useState(()=>null)

  useEffect(() => {
    // console.log(decodeURIComponent(window.document.cookie))
    const userCookies = decodeURIComponent(window.document.cookie)?.split(";")?.find?.(item => item.indexOf("BWAMICRO:user") > -1)?.split("=")[1] ?? null;
    setUser(userCookies ? JSON.parse(userCookies) : null)
    console.log(userCookies)

  }, [])
  // const linkColor = onLight ? 'text-white sm:text-gray-900 ' : 'text-white'

  // const [toggleMenu, setToggleMenu] = React.useState(false)

  // const linkCTA =
  //   location.pathname.indexOf('/login') > -1 ? `/register` : `/login`
  // const textCTA = location.pathname.indexOf('/login') > -1 ? 'Daftar' : 'Masuk'

  // const classNameLogo = onLight
  //   ? toggleMenu
  //     ? 'on-dark'
  //     : 'on-light'
  //   : 'on-light'
  return (
    <>
      <header id='header'>
        <div className='header_top'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='contactinfo'>
                  <ul className='nav nav-pills'>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-phone'></i> +2 95 01 88 821
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-envelope'></i> info@domain.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='social-icons pull-right'>
                  <ul className='nav navbar-nav'>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-facebook'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-twitter'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-linkedin'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-dribbble'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-google-plus'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='header-middle'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4'>
                <div className='logo pull-left'>
                  <Link to='index.html'>
                    <img src='images/home/logo.png' alt='' />
                  </Link>
                </div>
                <div className='btn-group pull-right'>
                  <div className='btn-group'>
                    <button
                      type='button'
                      className='btn btn-default dropdown-toggle usa'
                      data-toggle='dropdown'
                    >
                      USA
                      <span className='caret'></span>
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link to='#'>Canada</Link>
                      </li>
                      <li>
                        <Link to='#'>UK</Link>
                      </li>
                    </ul>
                  </div>

                  <div className='btn-group'>
                    <button
                      type='button'
                      className='btn btn-default dropdown-toggle usa'
                      data-toggle='dropdown'
                    >
                      DOLLAR
                      <span className='caret'></span>
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link to='#'>Canadian Dollar</Link>
                      </li>
                      <li>
                        <Link to='#'>Pound</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-sm-8'>
                <div className='shop-menu pull-right'>
                  <ul className='nav navbar-nav'>
                    {/* <li>
                      <Link to='#'>
                        <i className='fa fa-user'></i> Account
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link to='#'>
                        <i className='fa fa-star'></i> Wishlist
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link to='checkout.html'>
                        <i className='fa fa-crosshairs'></i> Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to={'/Cart'}>
                        <i className='fa fa-shopping-cart'></i> Cart
                      </Link>
                    </li> */}
                    <li>
                      {/* <Link to={'/login'}>
                        <i className='fa fa-lock'></i> Login
                      </Link> */}

{
                            User ? (
                              <Link to={'/login'}>Hi , {User.name}</Link>
                            ) : 
                            <Link to={'/login'}>Login </Link>
                          } 


                      {/* <Link
                        to={linkCTA}
                        className='bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium ml-6'
                      >
                        {textCTA}
                      </Link> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='header-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-9'>
                <div className='navbar-header'>
                  <button
                    type='button'
                    className='navbar-toggle'
                    data-toggle='collapse'
                    data-target='.navbar-collapse'
                  >
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                  </button>
                </div>
                <div className='mainmenu pull-left'>
                  <ul className='nav navbar-nav collapse navbar-collapse'>
                    <li>
                      <Link to='/' className='active'>
                        Home
                      </Link>
                    </li>
                    <li className='dropdown'>
                      <Link to='#'>
                        Shop<i className='fa fa-angle-down'></i>
                      </Link>
                      <ul role='menu' className='sub-menu'>
                        <li>
                          <Link to='shop.html'>Products</Link>
                        </li>
                        <li>
                          <Link to={'/detailProduct'}>Product Details</Link>
                        </li>
                        <li>
                          <Link to='checkout.html'>Checkout</Link>
                        </li>
                        <li>
                          <Link to={'/cart'}>Cart</Link>
                        </li>
                        <li>
                          {
                            User ? (
                              <Link to={'/login'}>Hi , {User.name}</Link>
                            ) : 
                            <Link to={'/login'}>Login </Link>
                          }
                          
                        </li>
                      </ul>
                    </li>
                    {/* <li className='dropdown'>
                      <Link to='#'>
                        Blog<i className='fa fa-angle-down'></i>
                      </Link>
                      <ul role='menu' className='sub-menu'>
                        <li>
                          <Link to='blog.html'>Blog List</Link>
                        </li>
                        <li>
                          <Link to='blog-single.html'>Blog Single</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link to='404.html'>404</Link>
                    </li> */}
                    {/* <li>
                      <Link to={'/contact'}>Contact</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='search_box pull-right'>
                  <input type='text' placeholder='Search' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
