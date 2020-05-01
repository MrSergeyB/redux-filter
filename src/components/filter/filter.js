import React, {useState} from "react";
import "./filter.css";
import "./filter.css";

const Filter = ({handleFilter}) => {
  const [fil, setFil] = useState("");

  const onChange = (e) => {
    setFil(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <div className="filter-box">
      <label>Фильтр</label>
      <input
        className="task-input"
        type="text"
        value={fil}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
