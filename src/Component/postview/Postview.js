import React, { useEffect, useState } from 'react'
import { Card } from '../../Card';
import Header from '../header/Header';

 const Postview = () => {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3004/user").then((res)=>res.json()).then((data)=>{
        setPosts(data)
        }).catch((err)=>{
            if(err){
                console.log(err)
            }
        })
       
    },[])
  return (
    <>
    <Header/>
    <div className='post-container'>
        {posts.map((post,i)=>{
            return(
                <Card post={post} key={i}/>
            )
        })}

    </div>
    </>
    
  )
}
export default Postview ;