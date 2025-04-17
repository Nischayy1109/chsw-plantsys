// src/pages/KharifPage.js
import React from "react";
import SensorDashboard2 from "../components/SensorDashboard2"; // Adjust path if needed
// Import Kharif-specific Analysis components here if you have them

const KharifPage = () => {
  return (
    <div className="container mx-auto p-4">
       <h1 className="text-3xl font-bold mb-6 text-orange-700">Kharif Season Monitoring</h1>
      <SensorDashboard2 />
      {/* Add Links or Components for Kharif Analysis Pages here */}
      {/* e.g., <Link to="/kharif/analysis">View Kharif Analysis</Link> */}
      {/* e.g., <KharifAnalysisComponent /> */}
    </div>
  );
};

export default KharifPage;