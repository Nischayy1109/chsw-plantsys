import { Suspense } from "react";
import { BrowserRouter as Router,useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import HomePage from "./components/HomePage"; // Adjust the path as necessary
import RabiPage from "./components/Rabi"; // Adjust the path as necessary
import KharifPage from "./components/Kharif"; // Adjust the path as necessary
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
      
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<HomePage />} />

          {/* Route for '/rabi' - renders the RabiPage */}
          <Route path="/rabi" element={<RabiPage />} />

          {/* Route for '/kharif' - renders the KharifPage */}
          <Route path="/kharif" element={<KharifPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
     
      </>
    </Suspense>
  );
}

export default App;
