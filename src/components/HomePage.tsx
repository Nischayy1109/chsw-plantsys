// src/pages/HomePage.js (or wherever you place your pages)
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you use shadcn/ui button
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-700">
            Smart Crop Monitoring
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 mt-2">
            Select the Crop Season
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 p-8">
          <Link to="/rabi" className="w-full">
            <Button variant="default" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
              Rabi Season
            </Button>
          </Link>
          <Link to="/kharif" className="w-full">
            <Button variant="default" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
              Kharif Season
            </Button>
          </Link>
        </CardContent>
      </Card>
       <p className="mt-8 text-sm text-gray-500">
         Powered by Your Team/Company Name
       </p>
    </div>
  );
};

export default HomePage;