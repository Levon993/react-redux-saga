import React from 'react'
import "./index.css"
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPost";
function App() {
  return (
    <div className="App">
     <div className="form">
        <PostForm></PostForm>
      </div>
      <div className='fetched'>
        <h2>Async View</h2>
          <FetchedPosts/>
      </div>
        <div className='list'>
            <h2>Sync View</h2>
            <Posts posts={[1,2,3,5,6]} />
      </div>
    </div>
  );
}

export default App;
