import { IoMdAdd } from "react-icons/io";
function AddTodo({ handleAddTodoTask }: { handleAddTodoTask: () => void }) {
    return (
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" id="todoName" />
          </div>
          <div className="col-4">
            <input type="date" id="todoDate"/>
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddTodoTask}>
          <IoMdAdd />
          </button>
        </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;