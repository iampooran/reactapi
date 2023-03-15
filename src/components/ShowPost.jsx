import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UpdatePost from './UpdatePost'
import DeletePost from './DeletePost'
import AddPost from './AddPost'

const ShowPost = () => {
    const [posts,setPosts] = useState([])

    const fetchPosts = async () =>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")  
        setPosts(response.data)
        console.log("called")
    }

    useEffect(()=>{
        fetchPosts()
    },[])


  return (
    <div>
        Click Here to Add New Post: <AddPost/>
        <hr />
        {posts.map((singlePost)=>{
            return <div key={singlePost.id}>
                <p> <b> Id:</b> {singlePost.id}</p>
                <p><b> Title:</b> {singlePost.title}</p>
                <DeletePost id={singlePost.id} setPosts={setPosts}/>
                <UpdatePost id={singlePost.id}/>
                <hr />
            </div>
        })}
    </div>
  )
}

export default ShowPost