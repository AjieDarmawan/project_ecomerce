import React, { useEffect, useState } from 'react'

import { withRouter } from 'react-router'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
// import { useSelector } from 'react-redux'

function Profile () {
 const [User, setUser] = useState(() => null)
  useEffect(() => {
    // console.log(decodeURIComponent(window.document.cookie))
    const userCookies =
      decodeURIComponent(window.document.cookie)
        ?.split(';')
        ?.find?.(item => item.indexOf('BWAMICRO:user') > -1)
        ?.split('=')[1] ?? null

    setUser(userCookies ? JSON.parse(userCookies) : null)
    console.log(userCookies)
  }, [])

  return (
    <>
      <Header />

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>

                  {User ? (
                       <h7> {User.name}</h7>
                      ) : (
                       'Tidak Ada cookie'
                      )}

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default withRouter(Profile)
