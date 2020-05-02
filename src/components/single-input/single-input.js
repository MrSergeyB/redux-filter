import React from "react";
import "./single-input.css";
import {connect} from "react-redux";
import {handleDelete, handleEdit} from "../../actions/inputActions";

const SingleInput = ({id, task, price, handleDelete, handleEdit, editMode}) => {
  const deleteWhileEditing = () => {
    if (editMode) {
      alert("PLease cancel edit mode before deleting input");
    } else {
      handleDelete(id);
    }
  };
  return (
    <div className="single-input-box">
      <ul className="inputs-box">
        <li className="input-item">{task}</li>
        <li className="input-item">¥{price}</li>
        <li className="input-item">
          <a href="!#" className="edit-btn" onClick={() => handleEdit(id)}>
            <span className="material-icons">create</span>
          </a>

          <a href="!#" className="delete-btn" onClick={deleteWhileEditing}>
            <span className="material-icons">delete</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  editMode: state.inputs.editMode,
});

export default connect(mapStateToProps, {handleDelete, handleEdit})(
  SingleInput
);
