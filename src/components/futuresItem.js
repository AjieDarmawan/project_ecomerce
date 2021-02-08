import React from 'react'
import {Link} from 'react-router-dom'

export default function futuresItem () {
  // constructor () {
  //   super()
  //   this.state = {
  //     //restaurant: null,
  //     Item: null
  //   }
  // }

  const Item = [
    {
      id: 1,
      name: 'Easy Polo Black Edition',
      image: 'assets/images/home/product1.jpg',
      harga: '120.000'
    },
    {
      id: 2,
      name: 'Easy Polo Black Edition',
      image: 'assets/images/home/product2.jpg',
      harga: '200.000'
    },
    {
      id: 3,
      name: 'Easy Polo Black Edition',
      image: 'assets/images/home/product3.jpg',
      harga: '210.00'
    },
    {
      id: 4,
      name: 'Easy Polo Black Edition',
      image: 'assets/images/home/product4.jpg',
      harga: '100.000'
    },
    {
      id: 5,
      name: 'Easy Polo Black Edition',
      image: 'assets/images/home/product5.jpg',
      harga: '50.000'
    },
    {
      id: 6,
      name: 'Easy Polo Black Edition',
      image: 'assets/images/home/product6.jpg',
      harga: '56.000'
    }
  ]

  return (
    <>
      <div className='features_items'>
        <h2 className='title text-center'>Features Items</h2>
        {Item.map(item => (
          <div className='col-sm-4'>
            <div className='product-image-wrapper'>
              <div className='single-products'>
                <div className='productinfo text-center'>
                  <img src={item.image} alt='' />
                  <h2>{item.harga}</h2>
                  <p>{item.name}</p>
                  <Link to={`/detailProduct/${item.id}`}  className='btn btn-default add-to-cart'>
                    <i className='fa fa-shopping-cart'></i>Add to cart
                  </Link>
                </div>
                <div className='product-overlay'>
                  <div className='overlay-content'>
                    <h2>$56</h2>
                    <p>{item.name}</p>
                    <Link to={`/detailProduct/${item.id}`}  className='btn btn-default add-to-cart'>
                      <i className='fa fa-shopping-cart'></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className='choose'>
                <ul className='nav nav-pills nav-justified'>
                  <li>
                    <Link to={`/detailProduct/${item.id}`} >
                      <i className='fa fa-plus-square'></i>Add to wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to={`/detailProduct/${item.id}`} >
                      <i className='fa fa-plus-square'></i>Add to compare
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
