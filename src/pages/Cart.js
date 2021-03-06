import React from 'react'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import {Link} from 'react-router-dom'

export default function Cart () {
  return (
    <>
      <Header />
      <section id='cart_items'>
        <div className='container'>
          <div className='breadcrumbs'>
            <ol className='breadcrumb'>
              <li>
                <Link href='#'>Home</Link>
              </li>
              <li className='active'>Shopping Cart</li>
            </ol>
          </div>

          <div class='table-responsive cart_info'>
            <table className='table table-condensed'>
              <thead>
                <tr className='cart_menu'>
                  <td className='image'>Item</td>
                  <td className='description'></td>
                  <td className='price'>Price</td>
                  <td className='quantity'>Quantity</td>
                  <td className='total'>Total</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {/* //tes */}
                <tr>
                  <td className='cart_product'>
                    <Link href=''>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/cart/one.png`}
                        alt=''
                      />
                    </Link>
                  </td>
                  <td className='cart_description'>
                    <h4>
                      <Link href=''>Colorblock Scuba</Link>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className='cart_price'>
                    <p>$59</p>
                  </td>
                  <td className='cart_quantity'>
                    <div className='cart_quantity_button'>
                      <Link className='cart_quantity_up' href=''>
                        {' '}
                        +{' '}
                      </Link>
                      <input
                        className='cart_quantity_input'
                        type='text'
                        name='quantity'
                        value='1'
                        autocomplete='off'
                        size='2'
                      />

                      <Link className='cart_quantity_down' href=''>
                        {' '}
                        -{' '}
                      </Link>
                    </div>
                  </td>
                  <td className='cart_total'>
                    <p className='cart_total_price'>$59</p>
                  </td>
                  <td className='cart_delete'>
                    <Link className='cart_quantity_delete' href=''>
                      <i className='fa fa-times'></i>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className='cart_product'>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/cart/two.png`}
                      alt=''
                    />
                  </td>
                  <td className='cart_description'>
                    <h4>
                      <Link href=''>Colorblock Scuba</Link>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className='cart_price'>
                    <p>$59</p>
                  </td>
                  <td className='cart_quantity'>
                    <div className='cart_quantity_button'>
                      <Link className='cart_quantity_up' href=''>
                        {' '}
                        +{' '}
                      </Link>
                      <input
                        className='cart_quantity_input'
                        type='text'
                        name='quantity'
                        value='1'
                        autocomplete='off'
                        size='2'
                      />
                      <Link className='cart_quantity_down' href=''>
                        {' '}
                        -{' '}
                      </Link>
                    </div>
                  </td>
                  <td className='cart_total'>
                    <p className='cart_total_price'>$59</p>
                  </td>
                  <td className='cart_delete'>
                    <Link className='cart_quantity_delete' href=''>
                      <i className='fa fa-times'></i>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className='cart_product'>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/cart/three.png`}
                      alt=''
                    />
                  </td>
                  <td className='cart_description'>
                    <h4>
                      <Link href=''>Colorblock Scuba</Link>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className='cart_price'>
                    <p>$59</p>
                  </td>
                  <td className='cart_quantity'>
                    <div className='cart_quantity_button'>
                      <Link className='cart_quantity_up' href=''>
                        {' '}
                        +{' '}
                      </Link>
                      <input
                        className='cart_quantity_input'
                        type='text'
                        name='quantity'
                        value='1'
                        autocomplete='off'
                        size='2'
                      />
                      <Link className='cart_quantity_down' href=''>
                        {' '}
                        -{' '}
                      </Link>
                    </div>
                  </td>
                  <td className='cart_total'>
                    <p className='cart_total_price'>$59</p>
                  </td>
                  <td className='cart_delete'>
                    <Link className='cart_quantity_delete' href=''>
                      <i className='fa fa-times'></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id='do_action'>
        <div className='container'>
          <div className='heading'>
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='chose_area'>
                <ul className='user_option'>
                  <li>
                    <input type='checkbox' />
                    <label>Use Coupon Code</label>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <label>Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type='checkbox' />
                    <label>Estimate Shipping & Taxes</label>
                  </li>
                </ul>
                <ul className='user_info'>
                  <li className='single_field'>
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className='single_field'>
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Dillih</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className='single_field zip-field'>
                    <label>Zip Code:</label>
                    <input type='text' />
                  </li>
                </ul>
                <Link className='btn btn-default update' href=''>
                  Get Quotes
                </Link>
                <Link className='btn btn-default check_out' href=''>
                  Continue
                </Link>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='total_area'>
                <ul>
                  <li>
                    Cart Sub Total <span>$59</span>
                  </li>
                  <li>
                    Eco Tax <span>$2</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Total <span>$61</span>
                  </li>
                </ul>
                <Link className='btn btn-default update' href=''>
                  Update
                </Link>
                <Link className='btn btn-default check_out' to={'/checkout'}>
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
