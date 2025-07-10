import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login submitted");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in Successfully", { position: 'top-center' });
      setEmail('')
      setPassword('')
      window.location.href="/"
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message, { position: 'top-center' });
      setEmail('')
      setPassword('')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000] px-4">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-black border border-gray-700">

        {/* Left Side */}
        <div className="w-1/2 bg-black text-white p-8 hidden md:flex flex-col justify-between bg-[url(https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc3252b47/images/login/watch-autoLogin-Desktop.jpg)] bg-cover">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide">ORRIN</h1>
          </div>
          <div className="text-center mt-auto mb-10">
            <h2 className="text-lg font-semibold mb-2">Counting Moments,</h2>
            <p className="text-sm text-gray-300">Creating Memories</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-1">Log in to your account</h2>
          <p className="text-sm text-gray-400 mb-6">Welcome back! Please enter your details.</p>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <p className="text-sm mb-4">
                Don't have an account?
                <a href="/register" className="pl-2 underline">Register</a>
              </p>
              <label className="text-sm block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-black border border-white text-white pr-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm block mb-1 text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded bg-black border border-white text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3 3l18 18" />
                      <path d="M10.477 10.477a3 3 0 104.243 4.243M6.53 6.53A9.969 9.969 0 002.458 12c1.274 4.057 5.064 7 9.542 7a9.969 9.969 0 005.47-1.53M17.47 17.47A9.969 9.969 0 0021.542 12c-1.274-4.057-5.064-7-9.542-7a9.969 9.969 0 00-5.47 1.53" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 accent-white"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label className="text-sm text-gray-300 cursor-pointer">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-300 transition text-black py-2 rounded-md font-medium cursor-pointer"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;