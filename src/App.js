import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/About'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history'
import detailProduct from './pages/detailProduct'
import Checkout from './components/checkout'
import { setAuthorizationHeader } from '../src/configs/axios/index'

import users from './constants/api/users'

import { populateProfile } from './store/actions/users'
import React, { useEffect } from 'react'
import Register from './pages/Register'
import GuestRoute from './components/Routes/GuestRoute'
import MemberRoute from './components/Routes/MemberRoute'
import profile from './pages/profile'

function App () {
  const dispatch = useDispatch()
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })
  useEffect(() => {
    let session = null
    if (localStorage.getItem('BWAMICRO:token')) {
      session = JSON.parse(localStorage.getItem('BWAMICRO:token'))
      setAuthorizationHeader(session.token)
      users.details().then(details => {
        dispatch(populateProfile(details.data))
      })
    }
  }, [dispatch])
  return (
    <Router history={history}>
      <GuestRoute path='/login' component={Login}></GuestRoute>
      <GuestRoute path='/Register' component={Register}></GuestRoute>

      {/* <MemberRoute path='/Cart' component={Cart}></MemberRoute> */}
      {/* <MemberRoute path='/checkout' component={Checkout}></MemberRoute> */}

      <Route path='/profile' component={profile}></Route>

      <Route path='/' exact component={Home}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/detailProduct/:id' component={detailProduct}></Route>
    </Router>
  )
}

export default App
