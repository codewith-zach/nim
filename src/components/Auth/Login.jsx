import React, {useState} from 'react'
import loginImage from '../../assets/login.png'
import logoImage from '../../assets/nim_logo.png';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side with background image */}
      <div
        className="w-1/2 h-full flex-shrink-0 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${loginImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Right side with login form */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white py-10">
        <div className="w-full max-w-[539px] flex flex-col items-center">
          {/* Logo */}
        <div className="flex-shrink-0 mb-4">
          <img
            src={logoImage}
            alt="Nigerian Institute of Management"
            className="w-[139px] h-[139px]"
            style={{ background: 'lightgray', objectFit: 'cover' }}
          />
        </div>

        {/* Welcome Message */}
        <h1 className="text-[32px] font-semibold text-[#1B1C1E] mb-2">
          Welcome to Nigerian Institute of Management Membership Portal
        </h1>
        
        {/* Description */}
        <p className="text-[16px] font-medium text-[#1B1C1E] mb-6 text-center">
          Enter your login details below to access the membership portal
        </p>

        {/* Membership Number Input */}
        <div className="mb-4 w-full max-w-[539px]">
          <label className="block text-[16px] font-medium text-[#595959] mb-1" htmlFor="membership-number">
            Membership Number
          </label>
          <input
            type="text"
            id="membership-number"
            className="w-full h-[56px] border border-[#010056] bg-[#F5F5F5] p-3 focus:outline-none"
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4 w-full max-w-[539px]">
          <label className="block text-[16px] font-medium text-[#595959] mb-1" htmlFor="password">
            Password
          </label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="w-full h-[56px] border border-[#010056] bg-[#F5F5F5] p-3 focus:outline-none"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="mb-6 w-full max-w-[539px]">
          <a href="#" className="text-[#ED3436] font-medium text-[16px] float-right">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="flex justify-center items-center w-full max-w-[539px] p-3 bg-[#010056] text-white rounded transition duration-200"
        >
          Login
        </button>
        </div>
        
      </div>
    </div>
  )
}

export default Login