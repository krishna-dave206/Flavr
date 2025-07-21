import React from 'react'
import './Explore.css';

const Explore = () => {
  return (
    <div>
      <div className="explore-banner">
        <h1>
          Explore the World of Culinary Delights
          <br />
          Discover Recipes from Around the Globe
        </h1>
        <img
          src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg"
          alt="Explore"
        />
      </div>

      <div className="explore-content">
        <p>
          Dive into a vast collection of recipes, each crafted to bring you a taste of different cultures and cuisines. Whether you're looking for quick meals or gourmet dishes, we've got something for everyone!
        </p>
      </div>
      
      <div className="explore-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipe-grid">
          {/* Placeholder for recipe cards */}
          <div className="recipe-card">
            <img src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg" alt="Recipe 1" />
            <h3>Recipe 1</h3>
            <p>Delicious and easy to make!</p>
          </div>
          <div className="recipe-card">
            <img src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg" alt="Recipe 2" />
            <h3>Recipe 2</h3>
            <p>Amazing flavors in every bite!</p>
          </div>
          {/* Add more recipe cards as needed */}
        </div>
        </div>
    </div>
  )
}

export default Explore