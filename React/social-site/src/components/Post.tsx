import { useContext } from "react";
import { PostsContext } from "../store/PostsContext";

const Post = ({title,text}:{title:string, text:string}) => {

    const {dispatcher} = useContext(PostsContext);

    return (
        <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a className="btn btn-primary" onClick={()=>dispatcher({type:"DELETE_POST", payload:{title}})}>Delete Me</a>
                </div>
        </div>
    )
};

export default Post;