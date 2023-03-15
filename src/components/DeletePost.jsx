import axios from 'axios'
import React from 'react'

const DeletePost = ({id,setPosts}) => {

    const deletePost = async() =>{
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }

    

  return (
    <div>
        <button onClick={deletePost}>Delete Post</button>
    </div>
  )
}

export default DeletePost