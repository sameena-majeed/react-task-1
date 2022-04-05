import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {



  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);




  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const getWordMeaning = async (e) => {
    e.preventDefault();
    try {


      const result = await axios.get(URL);
      console.log(result.data);
      // console.log(result.data);
      setMeanings(( arr => [...arr, result.data]));
      console.log(meanings);
      

      // console.log(result.data[0].meanings[0].definitions);


      // const meanings = result.data[0].meanings[0].definitions;
      // console.log("mean"+meanings);
      // setDefinitions(meanings);
      // console.log("hook");

      // console.log(result.data.meanings);
    } catch (error) {
      console.log(error);
    }
    console.log(meanings);
  }

  return (
    <>
      <div className="home">
        {/* <h1 onClick={getFoodImages}>Home</h1> */}
        <form onSubmit={getWordMeaning}>
          <label >Enter the Word </label>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="type word"
          />
          <button type="submit"> Search</button>

        </form>
        <div>
          {/* {foodItems.map((food) => {
            return <p>{food}</p>
        })} */}
        </div>

      </div>
    </>
  )
}

export default Home

