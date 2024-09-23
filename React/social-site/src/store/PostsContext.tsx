import { createContext } from "react";

export const PostsContext = createContext(
    {
        posts: Array<Record<string,string>>(),
        dispatcher: (action: {type: string, payload: Record<string,string>}) => {console.log(action)}
    }
);