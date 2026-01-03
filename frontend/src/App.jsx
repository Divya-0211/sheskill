import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}
export default App;