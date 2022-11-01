import React, { useEffect, useState } from 'react';

import RemoveSaved from './RemoveSaved';



const SavedRecipes = ({userInfo}) => {
  const [savedRecipesData, setSavedRecipesData] = useState(null);

  console.log(savedRecipesData)

  const getSavedRecipesData = () => {
    fetch(
      'http://localhost:3300/user/saved_recipes',
      {
        credentials: 'include'
      }
    )
    .then(response => response.json())
    .then(json => { 
       setSavedRecipesData(json)
     });
  };

  const removeSavedRecipe = (recipeId, recipeImage) => {
    console.log('trying to remove recipe', recipeId, recipeImage);

    fetch('http://localhost:3300/user/delete_recipe/' + recipeId + '/' + recipeImage,
    {
      credentials: 'include'
    })
    .then(response => response.json())
    .then(console.log)
    .then(getSavedRecipesData)
  };

  useEffect(() => {
    if(userInfo && userInfo.isLoggedIn) {
      getSavedRecipesData();
    }
  }, [userInfo]);

  const savedRecipeIds = savedRecipesData ? savedRecipesData.ids : [];

  return (
    <div name='savedrecipes' className='w-full md:h-screen text-gray-300 bg-[#FFFFFF]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
     <br/> 
        <br />
        <br/> 
        <h2 className='text-4xl sm:text-7xl font-bold text-[#E07A72]'>
          Saved Recipes
        </h2>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

{ savedRecipeIds.map((recipeId, index) => {
  // Add an item for each of the saved recipes we get
  // back from the API

  const recipeImage = savedRecipesData.images[index];

  return (
          <div
            style={{ backgroundImage: `url(${recipeImage})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='mx-14 pt-8 text-center'>
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">
                  Recipe title from API
                </button>
                <RemoveSaved onClick={() => removeSavedRecipe(recipeId, recipeImage)} />
              </div>
            </div>
          </div>  
  );
 })
}

  </div>
</div>
</div>
  );
};

export default SavedRecipes;