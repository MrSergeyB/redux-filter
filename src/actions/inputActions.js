import {v4 as uuidv4} from "uuid";
uuidv4();

export const addInput = (task, price) => ({
  type: "ADD_INPUT",
  id: uuidv4(),
  task,
  price,
});

export const handleDelete = (id) => ({
  type: "REMOVE_INPUT",
  id,
});

export const handleEdit = (id) => ({
  type: "EDIT_INPUT",
  id,
});

export const addEditedInputs = (id, task, price) => ({
  type: "ADD_EDITED_INPUTS",
  id,
  task,
  price,
});

export const handleFilter = (task) => ({
  type: "HANDLE_FILTER",
  task,
});
