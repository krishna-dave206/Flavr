import React from 'react'
import './Upload.css'

const Upload = () => {
  return (
    <div>
      <h1>Upload Your Recipe</h1>
      <form>
        <div>
          <label htmlFor="recipeName">Recipe Name:</label>
          <input type="text" id="recipeName" name="recipeName" required />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea id="ingredients" name="ingredients" required></textarea>
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea id="instructions" name="instructions" required></textarea>
        </div>
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*" required />
        </div>
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  )
}

export default Upload