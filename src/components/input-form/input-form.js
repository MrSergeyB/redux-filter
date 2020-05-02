import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {addInput, addEditedInputs} from "../../actions/inputActions";
import "./input-from.css";

const InputForm = ({addInput, editItem, editMode, addEditedInputs}) => {
  const [task, setTask] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editMode) {
      setPrice(editItem[0].price);
      setTask(editItem[0].task);
    }
    // eslint-disable-next-line
  }, [editMode]);

  const clearInputFields = () => {
    setPrice("");
    setTask("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      addEditedInputs(editItem[0].id, task, price);
      clearInputFields();
    } else {
      addInput(task, price);
      clearInputFields();
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    addEditedInputs(editItem[0].id, task, price);
    clearInputFields();
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
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      ) : null}
    </form>
  );
};

const mapStateToProps = (state) => ({
  editItem: state.inputs.editItem,
  editMode: state.inputs.editMode,
});

export default connect(mapStateToProps, {addInput, addEditedInputs})(InputForm);
