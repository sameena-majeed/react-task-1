import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Definitions from './Definitions/Definitions.js'
import Header from './Header/Header.js'

const Home = () => {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const URL = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;

  const getWordMeaning = async () => {
    try {
        console.log(category +"&" + word );
      const result = await axios.get(URL);
      setMeanings(result.data);
      console.log(result.data[0].phonetics[0].audio)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(meanings);
  console.log("audio:");
  


  useEffect(() => {
    getWordMeaning()
  }, [word]);


 

  return (
    <>

      <Header 
        setCategory={setCategory} 
        category={category} 
        word={word} 
        setWord={setWord} 
        setMeanings={setMeanings}
      />

        { meanings && (
            <Definitions word={word} meanings={meanings} category={category}/>
        )}
        
      
    </>
  )
}

export default Home

