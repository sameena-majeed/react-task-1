import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {

    const API_KEY = "0be52691b0b448e2a5cbfaac2e238aa7";

    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState("");

    const [foodNames, setFoodNames] = useState("");
 
    const URL = `https://api.spoonacular.com/food/menuItems/search?apiKey=0be52691b0b448e2a5cbfaac2e238aa7&number=${limit}&query=${query}`;

  const getFoodItems = async (e) => {
      e.preventDefault();
    const result =  await axios.get(URL);
    console.log(URL);
    console.log(result.data);

    setFoodNames(234);
    console.log("foodNames: ");
    console.log(foodNames);

    console.log(result.data.menuItems)
    const foodMenu = result.data.menuItems;
    const foodItems = foodMenu.map(menu => menu.title)
    console.log("food:");
    console.log(foodItems);

    const foodImages = foodMenu.map(menu => menu.image)
    console.log(foodImages);
    

    //why isnt this possible
    // setFoodNames(food);
    // console.log("foodnames:");
    // console.log(foodNames);
  }

  
  return (
    <>
    <div className="home">
    {/* <h1 onClick={getFoodImages}>Home</h1> */}
    <form onSubmit={getFoodItems}>
    <label >Food Name: </label>
        <input 
            type="text"
            value={query}
            onChange={ (e) => setQuery(e.target.value) }
            placeholder="food Name"            
        />
        <label >Food Name: </label>
        <input 
            type="text"
            name="limit"
            value={limit}
            onChange={ (e) => setLimit(e.target.value) }
            placeholder="limit"
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

