import React, {useState, useEffect} from 'react'
import classes from './../styles/views/main/main-view.module.scss'

import Main from '../layouts/main/Main'
import Footer from '../views/footer/Footer'
import MainView from '../views/main/MainView'
import MapView from '../views/map/MapView'

import { NET } from '../network'
import QuestionsBlock from '../widgets/questions/questionsBlock'
import {useWindowSize} from './../mobile util/utils'
import BlogViewMain from '../views/blog/BlogViewMain'
import Link from 'next/link'

const Home = ({
  data
}) => {
  console.log(data)
  const [cart, setCart] = useState([])
  const [mainData, setMainData] = useState(data.data)
  const [dataQuestions, setDataQuestions] = useState(data.questions)
  const [newProducts, setNewProducts] = useState(data.productsNew)
  const [addToOrder, setAddToOrder] = useState(data.productsAnother)
  const [slider, setSlider] = useState(data.sliders)
  const [blogData, setBlogData] = useState(data.news)
  const [ingridients, setIngridients] = useState(data.ingridients)

  useEffect(() => {
  
      const res  = localStorage.getItem('cart')
      if (res) {
         setCart(JSON.parse(res))
      }
        
   }, [])
   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
   })
    

   const productPrice = cart.reduce((a, c) => a + c.price * c.qty, 0)
   const deliveryPrice = productPrice * 0.1
   const totalPrice = productPrice + deliveryPrice


  const [screen, setScreen] = useState(false)
  const [showCart, setShowCart] = useState(false)  
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > 768) {
      setScreen(true)
    }
  }, [])

  let countProduct = 0
  cart.map(el => {
      countProduct = countProduct + el.qty
  })


const watchCart = () => {
  
  if (!showCart) {
    document.querySelector('html').style.overflow = 'hidden'
  } else {
    document.querySelector('html').style.overflow = 'visible'
  }
  setShowCart(!showCart)
}

const [showModal, setShowModal] =  useState(false)

  return (
    <>
       <Main screen={screen}
             setScreen={setScreen}
             watchCart={watchCart}
             totalPrice={totalPrice}
             cart={cart}
             countProduct={countProduct} 
             showCart={showCart}
             setShowCart={setShowCart}    
             mainData={mainData}
             showButtonCart={true}
             showContent={true}
       >
           <MainView
              slider={slider}
              mainData={mainData}
              showCart={showCart}
              setShowCart={setShowCart}
              screen={screen}
              setScreen={setScreen}
              watchCart={watchCart}
              cart={cart}
              setCart={setCart}
              countProduct={countProduct}
              showModal={showModal}
              setShowModal={setShowModal}
              newProducts={newProducts}
              addToOrder={addToOrder}
              ingridients={ingridients}
            />
            <QuestionsBlock 
               dataQuestions={dataQuestions}   
            />
            <div id={`blog`} >
              <BlogViewMain 
                blogData={blogData} 
                screen={screen}
              />
              <Link href="/blog">
                <div className={classes.allNews}>Усі новини</div>
              </Link>
            </div>
        </Main>
        <MapView />
        <Footer 
          mainData={mainData}
          watchCart={watchCart}
          totalPrice={totalPrice}
          countProduct={countProduct}
          showButtonCart={true}
          showContent={true}
        />
       </>
  )
}

export async function getServerSideProps({req, params}) {

  const headers = {
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;charset=UTF-8',
          // Authorization: `Bearer ${userToken}`
      },
      method: 'GET'
  };

  const res = await fetch(
      `${NET.APP_URL}/data`,
      headers,
  );
  const data = await res.json()

  

  return {
    props: {
      data
    } // will be passed to the page component as props
  }
}
export default Home
