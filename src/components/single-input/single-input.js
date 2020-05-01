import React from "react";
import "./single-input.css";

const SingleInput = ({id, task, price, handleDelete, editButtonPressed}) => {
  return (
    <div className="single-input-box">
      <ul className="inputs-box">
        <li className="input-item">{task}</li>
        <li className="input-item">¥{price}</li>
        <li className="input-item">
          <a
            href="!#"
            className="edit-btn"
            onClick={() => editButtonPressed(id, task, price)}
          >
            <span className="material-icons">create</span>
          </a>

          <a href="!#" className="delete-btn" onClick={() => handleDelete(id)}>
            <span className="material-icons">delete</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SingleInput;
