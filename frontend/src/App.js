// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
// import YouTubePage from "./pages/YouTubePage/YouTubePage";
import HomePage from "./pages/HomePageEx/HomePageEx"
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import VideoPage from "./pages/VideoPage/VideoPage"; 
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

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
        <Route path="/" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        { /* <Route path="/videos" element={<VideoPage />} /> */}
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
