import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//context 
import DatabaseContextProvider from "./contexts/databaseContextProvider";
import ReducerData from './contexts/reducerData';

//components
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Cookes from "./pages/cookes";
import AboutUs from "./pages/aboutus";
import DetailsCookes from "./pages/detailsCookes";
import LikeItem from "./pages/likeitem";

function App() {

  useEffect(() =>{
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[])

  return (
    <div className="overflow-hidden">
    <Router>

      <DatabaseContextProvider>
        <ReducerData>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cookes/:idParams" element={<DetailsCookes />} />
            <Route path="/cookes" element={<Cookes />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/likes" element={<LikeItem />} />
            <Route path="/*" element={<h1>Not Founded</h1>} />
          </Routes>
          <Footer />
        </ReducerData>
      </DatabaseContextProvider>

    </Router>
    </div>
  );
}

export default App;
