// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage"
import SearchResultsPage from "./pages/SearchResultsPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
       <Route path="/*" />
       <Route path="/searchresults" />
       <Route path="/video" />
       <Route path="/register" />
       <Route path="/login" />
      </Routes>
    </div>
  );
}

export default App;
