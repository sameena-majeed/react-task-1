import React from 'react'
// import categories from '../../data/categories';
// import categories from '../../../data/categories';

// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';

import './Header.css';

 const Header = ({setCategory, category, word, setWord, setMeanings}) => {

 
    // const handleSelect = (language) => {    
    //     setCategory(language);
    //     setWord("");
    //   }
    return(
    <div>
        <div className="header">
        <h1 className="headerTitle">{word ? word : "DICTIONARY"}</h1> <br />
          <div className="inputs">
          {/* <label >Enter the Word </label> */}
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Type your word here ..."
          />
{/* 
          <DropdownButton
            title="Language"
            value={category}
            onSelect={handleSelect}
          >
             {categories.map((option) => (
               <Dropdown.Item eventKey={option.label} value={option.label} >{option.value}</Dropdown.Item>
              ))}           
          </DropdownButton> */}

          </div>
      </div>
    </div>
  )

 }
export default Header;