import React, { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import "./Components.css";

const AddItems = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [ingredients, setIngredients] = useState([{ name: "" }]);

  let navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("recipeName", recipeName);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients));
  
    if (file) {
      formData.append("file", file); // Ensure this matches the name used in `upload.single('file')`
    }
  
    try {
      const response = await axios({
        url: "http://localhost:8000/recipe",
        method: "POST",
        data: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });
  
      console.log("Form submitted successfully:", response.data);
  
      // Reset form fields
      setRecipeName("");
      setDescription("");
      setFile(null);
      setPreview(null);
      setIngredients([{ name: "" }]);
  
      navigate("/");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };
  
  
  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreview(null);
  };

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index].name = event.target.value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <div className="main">
      <div className="parent bg-gray-900">
        {/* Left Side (Recipe Details) */}
        <div className="child-1">
          <h2 className="text-[40px] font-bold mb-4 text-center underline uppercase">
            Add Recipe
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 pl-5">
            <div>
              <label className="block mb-2">Recipe Name</label>
              <input
                type="text"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                className="w-2/3 p-2 rounded-lg text-black"
                placeholder="Enter Recipe Name"
              />
            </div>
            <div>
              <label className="block mb-2">Ingredients</label>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => handleIngredientChange(index, e)}
                    className="w-1/2 p-2 rounded-lg text-black"
                    placeholder={`Ingredient ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="ml-2 text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddIngredient}
                className="bg-blue-500  px-4 py-2 rounded-lg"
              >
                Add Ingredient
              </button>
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-3/4 p-2 rounded-lg text-black"
                placeholder="Enter Description"
              />
            </div>
          </form>
        </div>

        {/* Right Side (Submission Details) */}
        <div className="child-2">
          <div className="flex flex-col justify-center items-center text-black">
            <p className="p-1">⏱️ 20 min</p>
            <p className="p-2">🔥 500 calories</p>
            <p className="p-3">✅ Easy</p>
            <p className="p-4">🍔 8 Ingredients</p>
          </div>

          <p className="p-description text-black mx-3">
            "Crafted for Cravings: Discover the Timeless Taste of Burgers, Born
            in the USA in the Late 19th Century"
          </p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500  px-4 py-2 rounded-lg mt-4 btn"
          >
            Submit Recipe
          </button>
        </div>

        {/* Center (Image Upload Section) */}
        <div className="child-3">
          {/* <h2 className="text-2xl font-bold mb-4 ">Upload Photo</h2> */}
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="rounded-full w-52 h-52 object-cover shadow-lg"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-0 right-0 bg-red-500  rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <label className="img-btn  text-[22px] px-3 py-2 rounded-lg cursor-pointer">
                Upload Image
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddItems;
