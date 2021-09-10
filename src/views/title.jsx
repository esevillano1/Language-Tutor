import React from 'react';

// Import functional components here
import Languages from './languages.jsx';
import Menubar from './menubar.jsx';

// Import stylesheets here
import '../styling/languages.css';

function Title() {

  let title = "Language Tutor";

  const languages = [
    {
      'name': 'English',
      'left': '#AA0505',
      'right': '#B97D10'
    },
    {
      'name': 'French',
      'left': '#72191D',
      'right': '#6291AA'
    },
    {
      'name': 'Spanish',
      'left': '#FBE48F',
      'right': '#441D66'
    },
    {
      'name': 'Italian',
      'left': '#7A1F1E',
      'right': '#645957'
    },
    {
      'name': 'German',
      'left': '#FADF7F',
      'right': '#404B56'
    },
    {
      'name': 'Dutch',
      'left': '#0D8000',
      'right': '#80007F'
    }
  ];

  const languageList = displayLanguages(languages);

  // The idx const is needed to prevent the index from showing up
  // in the squares text as they are created
  // Ref: https://dev.to/duomly/how-to-use-loop-in-react-js-ael
  // for (const [idx, language] of languages.entries()){
  //   languageList.push(displayLanguage(language));
  // }


  return(
    <div>
      <div>
        <Menubar title={title} />
      </div>
      <div>
        {languageList}
      </div>
    </div>
  );

}

function displayLanguages(languages){

  var allRows = [];

  for (var i = 0; i < languages.length; i+=3){
    var row = [];
    row.push(languages.slice(i, i+3).map(language => {
      return <Languages language={language} />
    }))
    allRows.push(row.map(itm => {return <div className="languages">{itm}</div>}))
  }

  return allRows;
}

export default Title;
