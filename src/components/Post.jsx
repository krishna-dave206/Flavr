import React, { useEffect, useState } from 'react';
import './Post.css'; // make sure this file is created

const Post = () => {
  const [recipes, setRecipes] = useState([]);
  const url =
    'https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=4ad2e542576143a89d9405d5cb9bd509';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.results);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="feed">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="insta-post">
          <div className="post-header">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile"
              className="profile-pic"
            />
            <span className="username" style={{color:'black'}}>user{recipe.id}</span>
          </div>
          <img src={recipe.image} alt={recipe.title} className="post-img" />
          <div className="post-caption">
            <strong>{recipe.title}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
