import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dogs from './Pages/Dogs';
import Cats from './Pages/Cats';
import Birds from './Pages/Birds';

function App() {
  
  return (   
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dog" element={<Dogs />}/>  
          <Route path="/cat" element={<Cats />}/>
          <Route path="/bird" element={<Birds />}/>

        </Routes>
      </Router>
     
    </div>
  )
}

export default App
