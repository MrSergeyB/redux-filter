import React, {useState} from "react";
import {connect} from "react-redux";
import {handleFilter} from "../../actions/inputActions";
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {handleFilter})(Filter);
