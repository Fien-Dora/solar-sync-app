import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const SignupForm = ({ onSuccess, onError }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      onError("Passwords don't match");
      return;
    }
    if (!agreeTerms) {
      onError("Please agree to the Terms and Conditions");
      return;
    }
    try {
      await signup(email, password, username);
      onSuccess();
    } catch (err) {
      onError(err.message || 'Failed to create an account');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 bg-gray-100 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-gray-100 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 bg-gray-100 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 bg-gray-100 rounded-md"
          required
        />
      </div>
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          id="agree"
          className="mr-2"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          required
        />
        <label htmlFor="agree" className="text-sm text-gray-600">I agree to the Terms and Conditions</label>
      </div>
      <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300">SIGN UP</button>
    </form>
  );
};

export default SignupForm;