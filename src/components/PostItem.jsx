import React from "react";
import MyButton from "./UI/button/MyButton";


const PostItem = (props) => {
    console.log(props.post.key)
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.fff(props.post.id)}>Удалить</MyButton>
            </div>
        </div>
    );
};


export default PostItem;