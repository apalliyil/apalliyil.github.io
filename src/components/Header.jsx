import React from 'react';
//import { MdWbSunny, MdNightlight } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";


const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className='bg-cream dark:bg-gray-900 text-gray-900 dark:text-white sticky top-0 z-50'>
        <nav className='flex justify-between items-center px-8 py-3 max-w-5xl mx-auto'>  
            {/* Left side - Name */}
            <div className='text-xl font-medium'>
                <a href='#about'>Avinash Palliyil</a>
            </div>

            {/* Right side - Navigation items */}
            <div className='flex items-center space-x-8'>
                <a href='#about' className='text-lg text-gray-700 dark:text-white'>About</a>
                <a href='#experience' className='text-lg text-gray-700 dark:text-white'>Experience</a>
                <a href='#projects' className='text-lg text-gray-700 dark:text-white'>Projects</a>
                <a href='#skills' className='text-lg text-gray-700 dark:text-white'>Skills</a>
                <div onClick={() => setDarkMode(!darkMode)} className='cursor-pointer'>
                    {darkMode ? (
                        <FaSun className='text-2xl cursor-pointer' />
                    ) : (
                        <LuMoon className='text-2xl cursor-pointer' />
                    )}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header