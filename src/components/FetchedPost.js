import React from 'react'
import Post from "./Post";
import {connect, useDispatch, useSelector} from "react-redux";
import {fetchedPosts, showLoader, hideLoader, createPost} from "../redux/actions";
import {Loader}  from '../components/Loader'

function FetchedPosts()
{

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if(loading)
    {
      return  <Loader/>
    }


    if (!posts.length)
    {
     return   <button
         onClick={() =>dispatch(fetchedPosts())} className='fetch-btn'>Load Post</button>
    }
    return posts.map(post=>
        <Post   post={post} key={post.id} />


)

}

export default FetchedPosts

