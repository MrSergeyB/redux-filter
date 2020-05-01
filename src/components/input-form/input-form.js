import React, {useState, useEffect} from "react";
import "./input-from.css";

const InputForm = ({
  updateUserInputs,
  editMode,
  handleEdit,
  handleCancel,
  task,
  price,
  setTask,
  setPrice,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "" && price !== "") {
      if (!editMode) {
        updateUserInputs(task, price);
        setTask("");
        setPrice("");
      } else {
        handleEdit(task, price);
        setTask("");
        setPrice("");
      }
    } else {
      alert("Input fiels should not be empty");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Вид ремонта</label>
      <input
        className="task-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoFocus
      />
      <label>Цена</label>
      <input
        className="price-input"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className="save-btn">
        Save
      </button>
      {editMode ? (
        <button
          className="cancel-btn"
          onClick={() => {
            setTask("");
            setPrice("");
            handleCancel();
          }}
        >
          Cancel
        </button>
      ) : null}
    </form>
  );
};

export default InputForm;
