// import React from 'react'
// import './Home.css'
// const Home = () => {
//   return (
//     <div>
//         {/* <h1>Home Page</h1>
//         This is Home */}
//         <div className="banner">
//           <h1>
//             Welcome to Flavr - 
//             <br />Your <span>Culinary</span> Adventure Awaits!
//           </h1>
//           <img src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg" alt="" />
//         </div>
        
//     </div>
//   )
// }

// export default Home
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY || "4ad2e542576143a89d9405d5cb9bd509";

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setRecipes(data.recipes || []))
      .catch(err => console.error('Failed to fetch meals:', err));
  }, [API_KEY]);

  return (
    <div>
      <div className="banner">
        <h1>
          Welcome to Flavr -
          <br />
          Your <span>Culinary</span> Adventure Awaits!
        </h1>
        <img
          src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg"
          alt="Flavr"
        />
      </div>

      <div className="meals-container">
        {recipes.map((meal) => (
          <div key={meal.id} className="meal-card">
          <img src={meal.image} alt={meal.title} />
          <h3 style={{textAlign:'center'}}>{meal.title}</h3>
          
          <div className="bottom-info">
            <p>
              Ready in {meal.readyInMinutes} mins
            </p>
            <a
              href={`https://spoonacular.com/recipes/${meal.title.replace(/\s+/g, '-').toLowerCase()}-${meal.id}`}
            >
              View Recipe
            </a>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Home;


