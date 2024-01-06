import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    return (
    <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          text="text" 
          placeholder="Название поста"/>

        <MyInput 
          value={post.body}
          onChange={e => {setPost({...post, body: e.target.value})}}
          text="text" 
          placeholder="Описание поста"/>
          {(post.title.length ===0 || post.body.length ===0)
          ?
          <MyButton style={{background: 'grey'}} disabled>Создать пост</MyButton>
          :
          <MyButton onClick={addNewPost}>Создать пост</MyButton>

          }
    </form>
    );
};


export default PostForm;