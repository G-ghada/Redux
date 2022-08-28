import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();
  const completedTask = () => {

  };
  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <li className="task-item">
      <div>{title}</div>
      <div>
        <button
          className="remove-task-button"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
        <button
          className="remove-task-button"
          onClick={() => {
            completedTask();
          }}
        >
          completed
        </button>
        <button
          className="remove-task-button"
          onClick={() => {
            completedTask();
          }}
        >
          Edit
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
