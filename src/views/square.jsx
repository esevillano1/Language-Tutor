import React from 'react';
import '../styling/square.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Language from './language.jsx';

function LanguageSquare(props) {
  let languages = props;

  console.log("Logging the languages: " + JSON.stringify(languages))
  console.log("Logging the languages.language: " + JSON.stringify(languages.language))
  console.log("Logging the props name from within LanguageSquare - " + languages.language.language.name)
  console.log("Logging the props left from within LanguageSquare - " + languages.language.language.left)
  console.log("Logging the props right from within LanguageSquare - " + languages.language.language.right)

  return <LanguageSquareButton language={languages} />;
};

function LanguageSquareButton(props) {
  let languageName = props.language.language.language.name;
  let path = "/" + languageName;

  return(
    <div className="square"
        // Since the props are already inside braces, each doesn't need their own brace to access the info
        style={{
          background: "linear-gradient(to bottom right," + props.language.language.language.left + "," + props.language.language.language.right + ")"
          // background: "linear-gradient(to bottom right, #FF0000, #00FF00)"
        }}
      >
        <Link to={path} className="language-link square-text">{languageName}</Link>
        {/* Need a router component to coordinate all the routes that can be defined with the languages
        <Router>
          <Link to={path} className="language-link square-text">{languageName}</Link>
          <Route path={path} component={Language} />
        </Router> */}
      </div>
  );
}

export default LanguageSquare;
