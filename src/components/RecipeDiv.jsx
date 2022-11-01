import React from "react";
import AddSaved from "./AddSaved";

const RecipeDiv = (props) => {

 
    const getRecipeID = (e) => {
        e.preventDefault();
        let api = `http://localhost:3300/user/save_recipe/${props.id}/${props.image}`
        console.log(props.id);
        console.log(props.image);
        console.log(api);
        fetch(api, {
        headers: { "content-type": "application/json" },
        credentials: "include",
      })
        .then((result) => result.json())
        .then((result) => {
          console.log(result.message)
          alert(result.message)
        }
        );
    };

    return (
        <div
        style={{ backgroundImage: `url(${props.image})` }}
        className='shadow-lg shadow-[#ffffff] group container rounded-md flex justify-center items-center mx-auto content-div'
      >  
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <div className='mx-14 pt-8 text-center'>
            {/* <a href={props.sourceUrl}> */}
            {/* consider using this href as link to Recipe details page */}
            <a href="">
            <button class="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-red-400 hover:border-red-300">  { props.name }<br/>{ props.price }</button>
            <span onClick={getRecipeID}><AddSaved /></span> </a>
            <a href='/'>
            </a>
          </div>
       
        </div>   
      </div>  
 
    );
}

export default RecipeDiv;