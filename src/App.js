

import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import { Routes,Route } from 'react-router-dom';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
<Routes>
<Route path="/about" element={<About/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>
     
    </div>
  );
}
export default App;
