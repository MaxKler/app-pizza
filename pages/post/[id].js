import React, { useState } from 'react'
import {useRouter} from 'next/router'
import { NET } from './../../network'

const Post = ({data}) => {

    const router = useRouter()
    return (
            <>
                <h1 style={{color: 'black'}}>Post {router.query.id}</h1>
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

export default Post