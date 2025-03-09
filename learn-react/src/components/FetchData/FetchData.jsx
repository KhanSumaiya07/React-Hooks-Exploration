import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const[posts, setposts] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(Response => Response.json())
        .then(data=> {setposts(data.posts),
        console.log(data.posts)}
    )
        .catch(error => console.error('Error:', error))
        
    },[])
  return (
    <div>
        <h2>FetchData</h2>
        <ul>
            {posts.map((post)=>(
                <li className='blog-wrapper' key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <span>Likes:{post.reactions.likes}</span>
                    <span>dislikes:{post.reactions.dislikes}</span>
                    <span>views:{post.views}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FetchData