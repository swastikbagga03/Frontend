import { MouseEventHandler, SyntheticEvent } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({todoItems, handleDeleteTodoTask}:{todoItems:Array<Record<string,string>>, handleDeleteTodoTask:(name:string)=>void}) => {
    
    if (todoItems.length === 0) {
        return (
            <div className={styles.itemsContainer}>
                <h3>No Todo Task Available</h3>
            </div>
        );
    }
    
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map((todoItem, index) => (
                <TodoItem key={index} todoItem={todoItem} handleDeleteTodoTask = {handleDeleteTodoTask}/>
            ))}
        </div>
    );
};

export default TodoItems;