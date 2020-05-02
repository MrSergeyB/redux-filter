import React from "react";
import "./display-inputs.css";
import {connect} from "react-redux";
import SingleInput from "../single-input";
import PropTypes from "prop-types";

const DisplayInputs = ({userInputs}) => {
  return (
    <div className="display-input-box">
      {userInputs.map((input) => {
        return (
          <SingleInput
            key={input.id}
            id={input.id}
            task={input.task}
            price={input.price}
          />
        );
      })}
    </div>
  );
};

DisplayInputs.propTypes = {
  userInputs: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  userInputs: state.inputs.list,
});
export default connect(mapStateToProps)(DisplayInputs);
