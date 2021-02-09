import React from 'react'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import useForm from '../helpers/hooks/useForm'
import users from '../constants/api/users'

import { Link, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthorizationHeader } from '../configs/axios'

import { populateProfile } from '../store/actions/users'
import Input from '../components/Form/Input'
import Select from '../components/Form/Select'

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
          )}; 
          expires=${expires.toUTCString()};
           path:/; 
           ${production}`

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
            <div className='col-sm-8'>
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
            <br />

            {/* <Link to={'/Register'} className='btn btn-primary btn-sm'>
              Register
            </Link> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login
