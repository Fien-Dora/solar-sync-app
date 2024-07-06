import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = ({ onSuccess, onError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password, rememberMe);
      onSuccess();
    } catch (err) {
      onError(err.message || 'Failed to log in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
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
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          id="remember"
          className="mr-2"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember" className="text-sm text-gray-600">Remember password</label>
      </div>
      <div className="flex space-x-4">
        <button type="submit" className="flex-1 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300">LOGIN</button>
      </div>
    </form>
  );
};

export default LoginForm;