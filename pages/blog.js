import React, {useState, useEffect} from 'react'
import Main from '../layouts/main/Main'
import BlogView from '../views/blog/BlogView'
import Footer from '../views/footer/Footer'


export default function Home() {
  
  const [cart, setCart] = useState([])
    
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

  return (
    <>
       <Main screen={screen}
             setScreen={setScreen}
             watchCart={watchCart}
             totalPrice={totalPrice}
             cart={cart}
             countProduct={countProduct}
       >
         <BlogView />
        </Main>
        <Footer 
          watchCart={watchCart}
          totalPrice={totalPrice}
          countProduct={countProduct}
        />
       </>
  )
}
