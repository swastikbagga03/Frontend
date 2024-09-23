import { useContext, useRef } from 'react';
import { PostsContext } from '../store/PostsContext';
import style from './CreatePost.module.css';

const CreatePost = () => {

    const { dispatcher } = useContext(PostsContext);
    const title = useRef<HTMLInputElement>(null);
    const text = useRef<HTMLInputElement>(null);

    return (
        <form className={style.postContainer} onSubmit=
            {(event) => {
                event.preventDefault();
                const titleValue = title.current?.value;
                const textValue = text.current?.value;
                if (titleValue && textValue) {
                    title.current!.value = "";
                    text.current!.value = "";
                    dispatcher({type: "ADD_POST", payload: {title: titleValue ?? "Sample Title", text: textValue ?? "Sample Text"}});
                } else{
                    alert("Please enter both title and text");
                }
            }
            }
        >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Enter Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={title} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Enter text</label>
                <input type="text" className="form-control" id="exampleInputPassword1" ref={text} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CreatePost;