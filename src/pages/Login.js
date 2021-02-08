import React from 'react'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import useForm from '../helpers/hooks/useForm'
import users from '../constants/api/users'

import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthorizationHeader } from '../configs/axios'

import { populateProfile } from '../store/actions/users'

function Login ({ history }) {
  const dispatch = useDispatch()
  const [{ email, password }, setState] = useForm({
    email: '',
    password: ''
  })

  function submit (e) {
    e.preventDefault()
    //alert('tes')

    users
      .login({ email, password })
      .then(res => {
        console.log(email)
        console.log(password)
        //console.log(res)
        setAuthorizationHeader(res.data.token)
        users.details().then(detail => {
          dispatch(populateProfile(detail.data))
          const production =
            process.env.REACT_APP_FRONTPAGE_URL ===
            'https://micro.buildwithangga.id'
              ? 'Domain = micro.buildwithangga.id'
              : ''
          localStorage.setItem(
            'BWAMICRO:token',
            JSON.stringify({
              ...res.data,
              email: email
            })
          )

          const redirect = localStorage.getItem('BWAMICRO:redirect')
          const userCookie = {
            name: detail.data.name,
            thumbnail: detail.data.avatar
          }

          const expires = new Date(
            new Date().getTime() + 7 * 24 * 60 * 60 * 1000
          )

          document.cookie = `BWAMICRO:user=${JSON.stringify(
            userCookie
          )}; expires=${expires.toUTCString()}; path:/; ${production}`

          history.push(redirect || '/cart')
        })
      })
      .catch(err => {})
  }
  return (
    <>
      <Header></Header>
      <section id='form'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 col-sm-offset-1'>
              <div className='login-form'>
                <h2>Login to your account</h2>
                <form onSubmit={submit}>
                  <input
                    name='email'
                    type='email'
                    onChange={setState}
                    className='bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500'
                    value={email}
                    placeholder='Your email addres'
                  />
                  <input
                    name='password'
                    type='password'
                    onChange={setState}
                    className='bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500'
                    value={password}
                    placeholder='Your email addres'
                  />
                  <button type='submit' className='btn btn-default'>
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className='col-sm-1'>
              <h2 className='or'>OR</h2>
            </div>
            <div className='col-sm-4'>
              <div className='signup-form'>
                <h2>New User Signup!</h2>
                <form action='#'>
                  <input type='text' placeholder='Name' />
                  <input type='email' placeholder='Email Address' />
                  <input type='password' placeholder='Password' />
                  <button type='submit' className='btn btn-default'>
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login
