import React, {useState, useEffect} from 'react'
import Main from '../layouts/main/Main'
import BlogView from '../views/blog/BlogView'
import Footer from '../views/footer/Footer'
import { NET } from '../network'


 const Home = ({data}) => {
  
 
const [blogData, setBlogData] = useState(data.news)
const [mainData, setMainData] = useState(data.data)
const [screen, setScreen] = useState(false)
const [showCart, setShowCart] = useState(false)    

  return (
    <>
      <Main screen={screen}
          setScreen={setScreen}
          showCart={showCart}
          setShowCart={setShowCart}
          mainData={mainData} 
          showContent={true}
      > 
        <BlogView 
          blogData={blogData}
        />
        </Main>
        <Footer 
          mainData={mainData}
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
