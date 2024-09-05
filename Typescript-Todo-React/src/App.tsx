// IMPORTS 
// Styles 
import './App.css'
// React 

// RRD
import { Route, Routes } from 'react-router-dom'

//Pages 
import { Home } from './pages/Home'
import { Signup } from './pages/Signup';
// Components 




//TYPES 

function App() {
  

  return (

    <Routes>
      <Route path="/home" element={
        <Home />
      } />

      <Route path="/login" element={
        <>
          <div className='App'>
            <Signup />
          </div>
        </>
      } />

    </Routes>




  );
}

export default App;



