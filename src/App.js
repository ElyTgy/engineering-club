import Navbar from './Components/Navbar';
import Home from './Home';
import Join from './Join';
import Workshop from './Workshop';
import Footer from './Components/Footer'
import Contact from "./Contact"
import {Routes, Route} from "react-router-dom";

//TODO: make join, workshop, and contact page responsive

function App() {
  return (
    <div className="overflow-x-hidden selection:bg-blue-200 selection:text-blue-500">
      <Navbar className="bg-white text-black z-10"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/workshop" element={<Workshop/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer className="bg-cyan-400 text-white"/>
    </div>
  );
}

export default App;
