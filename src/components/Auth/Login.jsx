import React, { useState } from 'react'
import loginImage from '../../assets/login.png'
import logoImage from '../../assets/nim_logo.png'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side with background image */}
      <div
        className="hidden w-1/2 bg-cover bg-center lg:block"
        style={{
          backgroundImage: `url(${loginImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Right side with login form */}
      <div className="flex w-full flex-col bg-white p-8 lg:w-1/2">
        <div className="mx-auto mb-8">
          <img
            src={logoImage}
            alt="Nigerian Institute of Management"
            className="h-[140px] w-[140px] rounded-full bg-gray-100 object-cover p-2"
          />
        </div>

        <div className="mx-auto w-full max-w-lg space-y-6">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-semibold tracking-tight text-[#1B1C1E] sm:text-3xl">
              Welcome to Nigerian Institute of Management Membership Portal
            </h1>
            <p className="text-sm text-[#1B1C1E]">
              Enter your login details below to access the membership portal
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="membership" className="block text-sm font-medium text-[#595959]">
                Membership Number
              </label>
              <input
                id="membership"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-[#010056] bg-[#F5F5F5] p-2 focus:border-[#010056] focus:outline-none focus:ring-1 focus:ring-[#010056]"
                placeholder="Enter your membership number"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-[#595959]">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => {/* Add your forgot password logic here */}}
                  className="text-sm text-[#ED3436] hover:underline bg-transparent border-none cursor-pointer p-0"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  className="block w-full rounded-md border border-[#010056] bg-[#F5F5F5] p-2 pr-10 focus:border-[#010056] focus:outline-none focus:ring-1 focus:ring-[#010056]"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-600"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#010056] p-2 text-white transition duration-200 hover:bg-[#010056]/90 focus:outline-none focus:ring-2 focus:ring-[#010056] focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login