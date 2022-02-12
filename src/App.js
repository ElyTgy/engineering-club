import Navbar from './Components/Navbar';
import Home from './Home';
import Join from './Join';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="overflow-x-hidden selection:bg-blue-200 selection:text-blue-500">
      <Navbar className="bg-white text-black z-10"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
      <Footer className="bg-blue-300 text-white"/>
    </div>
  );
}

export default App;
