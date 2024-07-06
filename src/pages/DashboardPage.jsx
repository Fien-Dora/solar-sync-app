import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import PerformanceMonitoring from "../components/Dashboard/PerformanceMonitoring";
import EnergyProduction from "../components/Dashboard/EnergyProduction";
import SolarPanelPoints from "../components/Dashboard/SolarPanelPoints";
import AnimatedPage from "../components/AnimatedPage";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <AnimatedPage>
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-gray-700 text-3xl font-medium mb-6">Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PerformanceMonitoring />
            <EnergyProduction />
            <SolarPanelPoints />
          </div>
        </div>
      </AnimatedPage>
    </DashboardLayout>
  );
};

export default DashboardPage;
