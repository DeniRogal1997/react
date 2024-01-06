import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({posts, title, update}) => {

    if (!posts.length) {
        return (
            <h1>Постов нет</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem number={index + 1} post={post} arr={posts} fff={update}/>
                </CSSTransition>
)}         
            </TransitionGroup>

        </div>
    );
};

export default PostList;