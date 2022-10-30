import React from 'react';


import Meal44 from '../assets/meal44.jpg';
import Meal45 from '../assets/meal45.jpg';
import Meal46 from '../assets/meal46.jpg';
import Meal47 from '../assets/meal47.jpg';
import Meal48 from '../assets/meal48.jpg';

import Meal50 from '../assets/meal50.jpg';





const SavedRecipes = () => {
  return (
    <div name='savedrecipes' className='w-full md:h-screen text-gray-300 bg-[#FFFFFF]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl sm:text-7xl font-bold text-[#E07A72]'> Your Recipes </p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Meal44})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='mx-14 pt-8 text-center'>
                <a href=''>
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">  Recipe title from API</button>
                </a>
                <a href='/'>
                </a>
              </div>
            </div>
          </div>  
            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Meal50})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='mx-14 pt-8 text-center'>
                <a href=''>
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">  Recipe title from API</button>
                </a>
                <a href='/'>
                </a>
              </div>
            </div>
          </div>  
         
            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Meal45})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='mx-14 pt-8 text-center'>
                <a href=''>
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">  Recipe title from API</button>
                </a>
                <a href='/'>
                </a>
              </div>
            </div>
          </div>  

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Meal46})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='mx-14 pt-8 text-center'>
                <a href=''>
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">  Recipe title from API</button>
                </a>
                <a href='/'>
                </a>
              </div>
            </div>
          </div>  

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Meal47})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='mx-14 pt-8 text-center'>
                <a href=''>
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">  Recipe title from API</button>
                </a>
                <a href='/'>
                </a>
              </div>
            </div>
          </div>   

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Meal48})` }}
            className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='mx-14 pt-8 text-center'>
                <a href=''>
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">  Recipe title from API</button>
                </a>
                <a href='/'>
                </a>
              </div>
            </div>
          </div>  


        </div>
      </div>
    </div>
  );
};

export default SavedRecipes;