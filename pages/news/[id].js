import React, { useState, useEffect } from 'react'
import Main from '../../layouts/main/Main'
import BlogNew from '../../views/blog/components/BlogNews'
import Footer from '../../views/footer/Footer'
import { NET } from './../../network'
import {useWindowSize} from './../../mobile util/utils'
const News = ({data}) => {
  
  const newsItem = data.data
  const otherNews = data.anotherNews

  const [screen, setScreen] = useState(false)


const size = useWindowSize()
  useEffect(() => {
    if (size.width > 768) {
      setScreen(true)
    }
  }, [size])

    console.log(data)
    return (
        <>
          <Main   setScreen={setScreen}> 
              <BlogNew 
                  otherNews={otherNews}
                  newsItem={newsItem}
                  setScreen={setScreen}
             />
         </Main>
         <Footer />
      </>
    )
}

export async function getServerSideProps({params}) {
    console.log(params)
    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`
        },
        method: 'GET'
    };
  
    const res = await fetch(
        `${NET.APP_URL}/news/${params.id}`,
        headers,
    );
    const data = await res.json()
    return {
      props: {
        data
      } // will be passed to the page component as props
    }
  }

export default News