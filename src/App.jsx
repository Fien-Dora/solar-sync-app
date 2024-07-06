import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoadingSpinner from "./components/LoadingSpinner";
import { NotificationProvider } from "./context/NotificationContext";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const MyPlacesPage = lazy(() => import("./pages/MyPlacesPage"));
const AddPlacePage = lazy(() => import("./pages/AddPlacePage"));
const PlaceDetailsPage = lazy(() => import("./pages/PlaceDetailsPage"));

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/history" element={<HistoryPage />} />
              <Route path="/dashboard/my-places" element={<MyPlacesPage />} />
              <Route path="/dashboard/add-place" element={<AddPlacePage />} />
              <Route
                path="/dashboard/place/:id"
                element={<PlaceDetailsPage />}
              />
            </Routes>
          </Suspense>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
