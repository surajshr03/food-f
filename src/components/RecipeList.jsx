import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Recipe.css"
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const DEFAULT_IMAGE_URL = '/fbg.jpeg'; 
  const BASE_URL = 'http://'; 
  //Backend bata "localhost:8000/imgName.png" yesari awuxa but hamley -> "http://localhost:8000/imgName.png" gari dhekhaunu parxa
  // NOTE : next time "imgName.png" matra send garney ani base_url ma : http://localhost:8000/
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios({
          url: "http://localhost:8000/recipe",
          method: "GET",
        });
        console.log("fetched data", response.data);
        setRecipes(response.data.result); 

         // Directly map the recipes to get file names
        const fileNames = response.data.result.map((recipe) => recipe.file);
        console.log(fileNames);

      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {recipes.length === 0 ? (
          <p>No recipes found</p> // Display a message if no recipes are available
        ) : (
          recipes.map((recipe) => (
            <div key={recipe._id} className="recipe p-5 shadow-lg rounded-lg">
              <div className="flex flex-col items-center">
                {/* Image */}
                <img
                   src={recipe.file ? `${BASE_URL}${recipe.file}` : DEFAULT_IMAGE_URL}// Use the variable here
                  alt={recipe.recipeName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                {/* Details */}
                <div className="flex flex-col items-center">
                  <h3 className="text-white text-xl font-bold mb-2">{recipe.recipeName}</h3>
                  <p className="text-white mb-2">{recipe.description}</p>
                  <p className="text-white">Ingredients:</p>
                  <ul className="list-disc list-inside text-white">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
