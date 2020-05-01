import React, {useState} from "react";
import DisplayInput from "./components/display-inputs";
import InputForm from "./components/input-form";
import Filter from "./components/filter";
import "./App.css";
import {v4 as uuidv4} from "uuid";
uuidv4();

const data = [
  {id: 1, task: "Замена стёкл", price: "14"},
  {id: 2, task: "Ремонт окон", price: "15"},
  {id: 3, task: "Ремонт дверей", price: "25"},
];

function App() {
  const [userInputs, setUserInputs] = useState(data);

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

  //Filter inputs
  const handleFilter = (fil) => {
    if (fil.length > 0) {
      const filteredInput = userInputs.filter((input) => {
        return input.task.toLowerCase().includes(fil.toLowerCase());
      });
      setUserInputs(filteredInput);
    } else if (fil.length === 0) {
      setUserInputs(data);
    }
  };

  return (
    <div className="App">
      <Filter handleFilter={handleFilter} />
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
