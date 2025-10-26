import React from 'react'
import Carousel from './carousel'
import Products from './proudects'
import transition from './transitoin'
function Main() {
  return (
  <section className='d-flex flex-column'>
     <Carousel/>
     <Products/>
  </section>
  )
}

export default Main