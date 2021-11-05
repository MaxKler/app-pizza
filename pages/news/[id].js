import React, { useState } from 'react'
import Main from '../../layouts/main/Main'
import BlogNew from '../../views/blog/components/BlogNews'
import Footer from '../../views/footer/Footer'
import { NET } from './../../network'

const News = ({data}) => {
  
  const newsItem = data.data
  const otherNews = data.anotherNews

    console.log(data)
    return (
        <>
          <Main > 
              <BlogNew 
                  otherNews={otherNews}
                  newsItem={newsItem}
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