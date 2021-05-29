import React from 'react';
import '../styling/square.css';

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
  // TODO: Remove this console.log statement after being done with the implementation
  console.log("Language Square Button Name - " + languageName);

  // let gradientStyle = {
  //   background: {`linear-gradient(to bottom right, this.props.language.language.language.left, this.props.language.language.language.right`},
  //   color: "#000000"
  // };

  return(
    <div
      className="square"
      // Since the props are already inside braces, each doesn't need their own brace to access the info
      style={{
        background: "linear-gradient(to bottom right," + props.language.language.language.left + "," + props.language.language.language.right + ")"
        // background: "linear-gradient(to bottom right, #FF0000, #00FF00)"
      }}
    >
      <span
        className="square-text"
        style={{
          color: "#FFFFFF"
        }}
      >
        {languageName}
      </span>
    </div>
  );
}

export default LanguageSquare;
