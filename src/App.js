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
      <Route path='/' exact component={Home}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/Cart' component={Cart}></Route>
      <Route path='/checkout' component={Checkout}></Route>
      <Route path='/detailProduct/:id' component={detailProduct}></Route>
    </Router>
  )
}

export default App
