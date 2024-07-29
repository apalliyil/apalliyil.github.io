//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Experience from './components/Experience';
import Skills from './components/Skills'





function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
   
  
  <div className={darkMode ? "dark" : ""}>
    <Header darkMode = {darkMode} setDarkMode={setDarkMode}/>

    <div>
    <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Footer></Footer>
    </main>

    </div>
    
    
    
  </div>
  
  
  

  );
}

export default App;
