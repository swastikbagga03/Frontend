import { useReducer } from "react";
import { PostsContext } from "../store/PostsContext";
import CreatePost from "./CreatePost";
import PostList from "./PostList";


interface Action {
    type: string;
    payload: Record<string, string>;
}

interface Post {
    title: string;
    text: string;
}

const reducerFunction = (state: Array<Record<string, string>>, action: Action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, action.payload];
        case "DELETE_POST":
            return state.filter((post: Record<string, string>) => post.title !== action.payload.title);
        case "ADD_POSTS":
            return [...state, ...action.payload];
    }
}


const DisplayComponent = ({highlightedItem}:{highlightedItem:string}) => {

    const defaultPosts: Array<Post> = [{title: "Title1", text: "Swastik"}, {title: "Title2", text: "Swastik2"}];

    const [posts, dispatcher] = useReducer(reducerFunction, defaultPosts,(defaultPosts)=>{

        defaultPosts.push({title: "Title3", text: "Swastik3"});
        return defaultPosts;
    });


    return (
        <PostsContext.Provider value={{posts,
            dispatcher,
        }}>
            <>
                {highlightedItem === "Home" ? <PostList /> : <CreatePost />}
            </>
        </PostsContext.Provider>
    )
};

export default DisplayComponent;