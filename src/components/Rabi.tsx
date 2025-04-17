// src/pages/RabiPage.js
import React from "react";
import SensorDashboard from "../components/SensorDashboard"; // Adjust path if needed
import Home from "./home";
// Import Rabi-specific Analysis components here if you have them

const RabiPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Rabi Season Monitoring</h1>
      <Home />
      {/* Add Links or Components for Rabi Analysis Pages here */}
      {/* e.g., <Link to="/rabi/analysis">View Rabi Analysis</Link> */}
      {/* e.g., <RabiAnalysisComponent /> */}
    </div>
  );
};

export default RabiPage;