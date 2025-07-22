// src/pages/Explore.js
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import "./Explore.css"; 

const Explore = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=100&apiKey=4ad2e542576143a89d9405d5cb9bd509`
        );
        const data = await response.json();
        setMeals(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchMeals();
  }, []);

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="explore-container">
      <h2>Explore more Recipes</h2>
      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {meals.map((meal) => (
          <div key={meal.id} className="masonry-card">
            <img src={meal.image} alt={meal.title} />
            <div className="overlay">
              <h3>{meal.title}</h3>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Explore;
