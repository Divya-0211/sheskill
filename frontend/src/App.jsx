import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Header from "./components/Headers";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
