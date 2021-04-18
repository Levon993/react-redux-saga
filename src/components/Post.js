import React from 'react'
import '../index.css'
function Posts({post}) {

    return(
        <div className='card'>
            <p>{post.title}</p>
        </div>

    )

}

export default Posts
