import React, { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import Loading from "./loading";

const FetchData = () => {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true)
  const getData = async () => {
    // const Response = await fetch("https://dummyjson.com/posts");
    // const blogs = await Response.json();
    // const data = setposts(blogs.posts);
    // console.log(data);
    try{
        setloading(false)
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setposts(data.posts)
    } catch(error){
        console.error(`Error ${error}`)
    }
  };
  useEffect(() => {
    //     fetch('https://dummyjson.com/posts')
    //     .then(Response => Response.json())
    //     .then(data=> {setposts(data.posts),
    //     console.log(data.posts)}
    // )
    //     .catch(error => console.error('Error:', error))
    getData();
  }, []);
  if(loading){
    return <Loading/>
  }
  return (
    <div>
      <h2>FetchData</h2>
      <ul>
        {posts.map((post) => (
          <li className="blog-wrapper" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="ldv-cont">
              <div>
                <AiTwotoneLike />
                <p>{post.reactions.likes}</p>
              </div>
              <div>
                <AiTwotoneDislike />
                <p>{post.reactions.dislikes}</p>
              </div>
              <div>
                <p>views</p>
                <p>{post.views}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
