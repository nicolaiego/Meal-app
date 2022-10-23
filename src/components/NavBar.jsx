//add state so can toggle navbar
import FrugalChefResized from '../assets/FrugalChefResized.png';
import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
 
} from 'react-icons/fa';

import {Link} from 'react-scroll'



const NavBar = () => {
  // take two values default value false
  const [nav, setNav] = useState(false)
  //click function (arrow function) set current value to nav
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FFFFFF] text-orange-700 font-barlow'>

<img src={FrugalChefResized} alt="app__logo" height='105px' width='281px' />


<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1FM4P2J86LgXgLL7Amw6qQ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


      {/* menu */}

      <ul className='hidden md:flex'>
        <li> 
        <button class="bg-white text-orange-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Home</button>
        <button class="bg-white text-orange-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
        <button class="bg-white text-orange py-2 px-4 rounded focus:outline-none focus:shadow-outline">Recipes</button>
        <button class="bg-white text-orange-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>

        <button class="bg-[#E07A72] hover:bg-orange-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign-up</button>
        </li>
        
      </ul>
      
    

      {/* hamburger menu */}

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      {/* t operator, check value of nav */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0b090a] flex flex-col justify-center items-center'}>

        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="work" smooth={true} duration={500}>
         Work
        </Link> </li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="blog" smooth={true} duration={500}>
          Blog
        </Link> </li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link> </li> 
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          

        </ul>

      </div>


    </div>



  )
}

export default NavBar