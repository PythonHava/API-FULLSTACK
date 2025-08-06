import React, { useEffect, useState } from 'react';

import {Link} from  "react-router-dom"

const Posts = () =>  {
     const [posts, setPosts] = useState([])

useEffect(() =>{
    const getPosts = async () =>{
      const resp = await fetch(`/api/posts`);
      const postsResp = await resp.json()
      setPosts(postsResp)

    }



   getPosts()
}, []);

return (
   <>


   <h1>Posts</h1>
   {posts.map(post => (

    <div key = {posts.id}>
        <h2>
            <Link to = {`/posts/${posts.id}`}>{posts.title}
            </Link>


        </h2>
        </div>
   ))}

 </>
)
   



}
export default Posts;
