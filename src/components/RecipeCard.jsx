import React from 'react';


import AddSaved from './AddSaved';
import Meal44 from '../assets/meal44.jpg';






const RecipeCard = () => {
  return (
      <div name='savedrecipes' className='w-full md:h-screen text-gray-300 bg-[#FFFFFF]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
     <br/> 
        <br />
        <br/> 
       
        <div class="flex justify-end"> <button class="  text-white font-bold  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#C6480C] rounded-md hover:bg-orange-500 focus:outline-none focus:bg-purple-600">
          Back to search
              </button>
            </div>
             <br /> 
           
        <div
            style={{ backgroundImage: `url(${Meal44})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >  <h2 className='text-4xl sm:text-7xl font-bold text-[#FFFFFF]'>
          Title of recipe
        </h2></div>
        {/* Container */}
     
  
        <h2 class=" text-pink-400 text-sm rounded-lg focus:ring-red-300 focus:border-red-400 block w-full p-2.5">
         <h3 class= "text-pink-400 text-sm rounded-lg focus:ring-red-300 focus:border-red-400 block w-full p-2.5"> summary here - example  - Cook a delicious gluten-free dinner in 20 minutes. Our Scandi-style salmon is served with beetroot, lentils, pumpkin seeds, capers, mustard and dill</h3>
         <br /> 

      
         <p>Prep time: </p> 
         <br/> 
         <p>Cook time: </p> 
         <br />
         <p>Servings: </p> 
         <br />
      

        </h2>
  
    

        <h2 class=" text-pink-400 text-sm rounded-lg focus:ring-red-300 focus:border-red-400 block w-full p-2.5">
         <p> </p> 
         <br/> 
         <p>Ingredients: </p> 
         <br />
         <p>Method: </p> 
         <br />
         
        </h2>

        <br />
  
      
  
          <br />
  
          <div class="flex justify-center"> <button class=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#C6480C] rounded-md hover:bg-orange-500 focus:outline-none focus:bg-purple-600">
          <AddSaved />
              </button>
            </div>
             <br /> 
           
            
  
  
        </div>
  
  
  
      </div>
     
    );
  };
  
  
export default RecipeCard;