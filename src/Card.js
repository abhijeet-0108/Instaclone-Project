import React from 'react'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "./Card.css"


export const Card = ({post}) => {
  return (
    <div>
        <section className='card'>
            <section className='card-header'>
                <div>
                    <div className='card-header__name'>{post.name}</div>
                    <div className='card-place'>{post.location}</div>
                </div>
                <span className='icon-1'>
                <ReorderRoundedIcon></ReorderRoundedIcon>
                </span>
            </section>
            <section className='card-image'> 
            <img src={require(""+post.PostImage)} alt='place'/>
            </section>
            <section className='card-actions'>
             <span className='icon-2'>
              <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
              </span>
              <span className='icon-3'><SendRoundedIcon></SendRoundedIcon></span>
              
              <span>{post.date}</span>

            </section>
            <section className='likes'>
              {post.likes}
            </section>
            <section className='desciption'>
              {post.description}
            </section>
        </section>
    </div>
  )
}
