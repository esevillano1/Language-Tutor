import React from 'react';
import ReactDOM from 'react-dom';
import '../styling/languages.css';
import LanguageSquare from './square.jsx';
import PropTypes from "prop-types";

function Languages(props) {

  console.log("\n");
  console.log("Logging Languages props name - " + props.language.name);
  console.log("Logging Languages props left - " + props.language.left);
  console.log("Logging Languages props right - " + props.language.right);
  console.log("\n");

  return (
    <LanguageSquare language={props} />
  );
};

Languages.propTypes = {
  name: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired
};

export default Languages;
