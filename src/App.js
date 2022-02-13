import Navbar from './Components/Navbar';
import Home from './Home';
import Join from './Join';
import Workshop from './Workshop';
import Footer from './Components/Footer'
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="overflow-x-hidden selection:bg-blue-200 selection:text-blue-500">
      <Navbar className="bg-white text-black z-10"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/workshop" element={<Workshop/>}/>
      </Routes>
      <Footer className="bg-blue-300 text-white"/>
    </div>
  );
}

export default App;
