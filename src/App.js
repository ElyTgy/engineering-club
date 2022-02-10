import Navbar from './Components/Navbar';
import Home from './Home';
import Join from './Join';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="overflow-x-hidden selection:bg-teal-200">
      <Navbar className="bg-white text-black z-10"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;
