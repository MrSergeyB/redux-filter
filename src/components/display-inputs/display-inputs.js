import React from "react";
import "./display-inputs.css";
import SingleInput from "../single-input";

const DisplayInputs = ({userInputs, handleDelete, editButtonPressed}) => {
  return (
    <div className="display-input-box">
      {userInputs.map((input) => {
        return (
          <SingleInput
            key={input.id}
            id={input.id}
            task={input.task}
            price={input.price}
            handleDelete={handleDelete}
            editButtonPressed={editButtonPressed}
          />
        );
      })}
    </div>
  );
};

export default DisplayInputs;
