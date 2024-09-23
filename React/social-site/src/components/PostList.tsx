import { useContext, useState } from "react";
import { PostsContext } from "../store/PostsContext";
import Post from "./Post";
import {v4 as uuidv4} from 'uuid';

const PostList = () => {

    const {posts} = useContext(PostsContext);

    console.log("Fetching data");


    return (
        <>
        {posts.map((post) => {
            return <Post title={post.title} text={post.text} key={uuidv4()}/>
        })}
        </>
    );


}

export default PostList;