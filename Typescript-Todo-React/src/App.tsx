// IMPORTS 
// Styles 
import './App.css'
// React 
import { useState, useEffect } from 'react';

//Pages 
import { Home } from './pages/Home'
// Components 
import { Sidenav } from './components/Sidenav'
import { SidenavMobile } from './components/SidenavMobile'
import { ListComp } from './components/ListComp';

function App() {
  // CLIENT VIEWPORT //
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // DARKMODE //
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Handle toggle dark theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  // UE to update rerender App when theme is toggled
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <>
      {isMobile ? (
        // Mobile - viewport sub 600 px
        <div className='App-Mobile'>
          <SidenavMobile />
          <ListComp/>
        </div>
      ) : (
        // Desktop viewport 600px or over
        <div className='App'>
          <Sidenav />
          <ListComp/>
        </div>
      )}
    </>
  );
}

export default App;