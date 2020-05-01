import React, {useState} from "react";
import DisplayInput from "./components/display-inputs";
import InputForm from "./components/input-form";
import "./App.css";
import {v4 as uuidv4} from "uuid";
uuidv4();

function App() {
  const [userInputs, setUserInputs] = useState([
    {id: 1, task: "Замена стёкл", price: "14"},
    {id: 2, task: "Ремонт окон", price: "15"},
    {id: 3, task: "Ремонт дверей", price: "25"},
  ]);

  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState("");
  const [price, setPrice] = useState("");
  const [editingInputId, setEditingInputId] = useState(null);

  const updateUserInputs = (task, price) => {
    setUserInputs([
      ...userInputs,
      {
        id: uuidv4(),
        task: task,
        price: price,
      },
    ]);
  };

  const handleDelete = (id) => {
    const filteredInputs = userInputs.filter((input) => {
      return input.id !== id;
    });

    setUserInputs(filteredInputs);
    if (editMode) {
      setEditMode(!editMode);
      setTask("");
      setPrice("");
    }
  };

  const editButtonPressed = (id, task, price) => {
    setEditMode(!editMode);
    setTask(task);
    setPrice(price);
    setEditingInputId(id);
  };

  const handleEdit = (task, price) => {
    const filteredInputs = userInputs.filter((input) => {
      return input.id !== editingInputId;
    });

    setUserInputs([
      ...filteredInputs,
      {
        id: editingInputId,
        task: task,
        price: price,
      },
    ]);
    setEditMode(!editMode);
    setEditingInputId(null);
  };

  const handleCancel = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="App">
      <InputForm
        updateUserInputs={updateUserInputs}
        editMode={editMode}
        handleEdit={handleEdit}
        handleCancel={handleCancel}
        task={task}
        price={price}
        setTask={setTask}
        setPrice={setPrice}
      />
      <DisplayInput
        userInputs={userInputs}
        handleDelete={handleDelete}
        editButtonPressed={editButtonPressed}
      />
    </div>
  );
}

export default App;
