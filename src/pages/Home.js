import React from 'react'
import Header from '../components/partials/header'
import Slider from '../components/partials/slider'
import Category from '../components/partials/category'
import Footer from '../components/partials/footer'
import { Link, withRouter } from 'react-router-dom'

function Home () {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Category></Category>
      <Footer></Footer>
    </>
  )
}

export default withRouter(Home);
