import React, { useState, useEffect } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/MyModal/MyModal";
import PostFilter from "./components/PostFilter";
import { usePosts } from "./hooks/usePosts";
import { PostService } from "./API/PostService";
import MyLoader from "./components/UI/loader/MyLoader";


function App() {
const [posts, setPosts] = useState([])


const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setVisibility] = useState(false)
const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
const [loader, setLoader] = useState(false)


async function fetchPosts () {
  setLoader(true)
  const response = await PostService.getAll()
  setLoader(false)
  
  setPosts(response.data)}
useEffect(() => {fetchPosts()}, [])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setVisibility(false)
}


const removePost = (id) => {
  setPosts(posts.filter(post => post.id !== id))
}



  return (
    <div className="App">
      <MyButton style={{marginTop: "20px"}} onClick= {() => setVisibility(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setVisibility}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {loader
      ?
      <MyLoader>Идет загрузка...</MyLoader>
      :
      <PostList posts={sortedAndSearchPosts} update={removePost} title='Посты про JS'/>
      }
    </div>
  );
}

export default App;
