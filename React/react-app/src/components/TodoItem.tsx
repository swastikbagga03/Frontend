import { MouseEventHandler, SyntheticEvent, useState } from "react";
import styles from "./TodoItem.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TodoItem = ({ todoItem, handleDeleteTodoTask }: { todoItem: Record<string, any>, handleDeleteTodoTask:(name:string)=>void}) => {
    
    const [isHovered, setIsHovered] = useState(false);  // State for hover
    
    const onDelete = (event: SyntheticEvent) => {
        handleDeleteTodoTask(todoItem.id);
    };

    // Handlers for mouse enter and leave
    const handleMouseEnter = () => {
        console.log("Mouse Enter");
        setIsHovered(true);  // Set hovered to true on mouse enter
    };

    const handleMouseLeave = () => {
        console.log("Mouse Leave");
        setIsHovered(false);  // Set hovered to false on mouse leave
    };

    
    return (
        <div
        className={`container ${isHovered && styles.bgcontainer}`}
        id = {todoItem.id} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className="row kg-row">
                <div className="col-6">{todoItem.name}</div>
                <div className="col-4">{todoItem.date}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button" onClick={onDelete}>
                        <MdOutlineDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;