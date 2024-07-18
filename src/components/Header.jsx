import React from 'react';
import { MdWbSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";



const Header = ({darkMode, setDarkMode}) => {
  return (
    
    <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <nav className='flex justify-between items-center p-5'>
            <h1 className='text-lg'>Home</h1>
            <h1 className='text-lg'>About</h1>
            <h1 className='text-lg'>Experience</h1>
            <h1 className='text-lg'>Projects</h1>
            <h1 className='text-lg'>Skills</h1>
            <h1 className='text-lg'>Resume</h1>
            
            <div onClick={() => setDarkMode(!darkMode)} className='cursor-pointer'>

                {
                    darkMode ? (
                        <MdWbSunny className='text-2xl cursor-pointer' />
                    )
                    
                    : (
                        <MdNightlight className='text-2xl cursor-pointer' />
                    )
                    
                    
                }


                
                
            </div>
            
            
        </nav>
    </header>
    
  )
}

export default Header