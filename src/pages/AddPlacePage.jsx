import React, { useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import AnimatedPage from "../components/AnimatedPage";

const AddPlacePage = () => {
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [panelType, setPanelType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement the logic to add a new place
    console.log({ placeName, location, capacity, panelType });
  };

  return (
    <DashboardLayout>
      <AnimatedPage>
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold mb-6">Add New Place</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="placeName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Place Name
                </label>
                <input
                  type="text"
                  id="placeName"
                  value={placeName}
                  onChange={(e) => setPlaceName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="capacity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Capacity (kW)
                </label>
                <input
                  type="number"
                  id="capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="panelType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Panel Type
                </label>
                <input
                  type="text"
                  id="panelType"
                  value={panelType}
                  onChange={(e) => setPanelType(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Place
                </button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedPage>
    </DashboardLayout>
  );
};

export default AddPlacePage;
