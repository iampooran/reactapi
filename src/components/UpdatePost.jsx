import React from 'react'

const UpdatePost = ({id}) => {
    
    const handleUpdate = () =>{
        console.log(id)
    }

  return (
    <div>
        <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default UpdatePost