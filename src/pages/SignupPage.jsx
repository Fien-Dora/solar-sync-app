import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Smartphone, Globe, User } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SignupForm from '../components/Auth/SignupForm';

const SignupPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignupSuccess = () => {
    navigate('/dashboard');
  };

  const handleSignupError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8 relative">
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="text-gray-600 hover:text-gray-800">
              <Smartphone className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Globe className="h-6 w-6" />
            </button>
          </div>
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">S POWER</h1>
          <div className="mb-8 flex justify-center">
            <div className="bg-gray-200 rounded-full p-6">
              <User className="h-16 w-16 text-gray-600" />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <SignupForm onSuccess={handleSignupSuccess} onError={handleSignupError} />
          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-teal-600 hover:underline">Already have an account? Log in</Link>
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            Copyright © 2024 www.spower.com All Rights Reserved.
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default SignupPage;