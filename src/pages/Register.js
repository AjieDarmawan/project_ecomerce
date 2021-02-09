import React from 'react'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import useForm from '../helpers/hooks/useForm'
import users from '../constants/api/users'

import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthorizationHeader } from '../configs/axios'

import { populateProfile } from '../store/actions/users'
import Input from '../components/Form/Input'
import Select from '../components/Form/Select'

export default function Register ({ history }) {
  const dispatch = useDispatch()

  const [
    { name, email, password, profession, otherProfession },
    setStateRegister
  ] = useForm({
    name: '',
    email: '',
    password: '',
    profession: '',
    otherProfession: ''
  })

  function submit_register (e) {
    e.preventDefault()
    //alert(name_register)
    //alert(otherProfession)

    users
      .register({
        name,
        email,
        password,
        profession: profession === 'others' ? otherProfession : profession
      })
      .then(res => {
        console.log(res)
        history.push('/login')
      })
      .catch(err => {
        console.log(err)
        //seterrors(err?.response?.data?.message);
      })
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='signup-form'>
            <h2>New User Signup!</h2>
            <form onSubmit={submit_register}>
              <input
                name='name'
                type='text'
                onChange={setStateRegister}
                className=''
                value={name}
                placeholder='Your Name'
              />
              <input
                name='email'
                type='email'
                onChange={setStateRegister}
                className=''
                value={email}
                placeholder='Your email addres'
              />
              <input
                name='password'
                type='password'
                onChange={setStateRegister}
                className='bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500'
                value={password}
                placeholder='Your email addres'
              />

              <select
                labelName='Occupation'
                name='profession'
                // value={profession}
                fallbackText='Select your focus'
                onClick={setStateRegister}
              >
                <option value=''>Select your focus</option>
                <option value='Web Developer'>Web Designer</option>
                <option value='Frontend Developer'>Frontend Developer</option>
                <option value='Backend Developer'>Backend Developer</option>
                <option value='others'>others</option>
              </select>

              {profession === 'others' && (
                <input
                  value={otherProfession}
                  name='otherProfession'
                  type='text'
                  onChange={setStateRegister}
                  placeholder='Your occupation'
                  labelName='Other Occupation'
                />
              )}

              <br />
              <br />

              <button type='submit' className='btn btn-default'>
                Daftar
              </button>
            </form>
            <br />
              <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
