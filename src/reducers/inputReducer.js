import {
  ADD_INPUT,
  REMOVE_INPUT,
  EDIT_INPUT,
  ADD_EDITED_INPUTS,
  HANDLE_FILTER,
} from "../actions/types";

const data = [
  {id: 1, task: "Замена стёкл", price: "14"},
  {id: 2, task: "Ремонт окон", price: "15"},
  {id: 3, task: "Ремонт дверей", price: "25"},
];

const intialState = {
  editItem: {},
  editMode: false,
  list: data,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.id,
            task: action.task,
            price: action.price,
          },
        ],
      };

    case REMOVE_INPUT:
      return {
        ...state,
        list: [...state.list.filter((input) => input.id !== action.id)],
      };

    case EDIT_INPUT:
      return {
        ...state,
        editMode: !state.editMode,
        editItem: state.list.filter((input) => input.id === action.id),
      };

    case ADD_EDITED_INPUTS:
      return {
        editMode: !state.editMode,
        editItem: {},
        list: [
          ...state.list.filter((input) => input.id !== action.id),
          {
            id: action.id,
            task: action.task,
            price: action.price,
          },
        ],
      };

    case HANDLE_FILTER:
      if (action.task.length > 0) {
        return {
          ...state,
          list: [
            ...state.list.filter((input) => {
              return input.task
                .toLowerCase()
                .includes(action.task.toLowerCase());
            }),
          ],
        };
      } else {
        return {
          ...state,
          list: data,
        };
      }

    default:
      return state;
  }
};
