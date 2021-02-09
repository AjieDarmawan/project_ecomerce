import React from 'react'
import Sidebar from './sidebar'
import FuturesItem from '../futuresItem'
import Category_tab from '../category_tab'
import Recomended from '../recomended'
import { Link, withRouter } from 'react-router-dom'

 function category () {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <Sidebar />
            </div>

            <div className='col-sm-9 padding-right'>
              <FuturesItem />

              <Category_tab />
              <Recomended />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default withRouter(category);
