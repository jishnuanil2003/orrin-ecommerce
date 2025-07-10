import React, { useState } from 'react'
import apple from '../../assets/apple-black-logo-svgrepo-com.svg'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,db } from '../firebase/config'
import { setDoc,doc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [showpass, setShowPass] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, pass)
      const user = auth.currentUser
      console.log(user)
      if(user){
        await setDoc(doc(db,"users",user.uid),{
          email: email,
          password: pass,
          firstname: fname,
          lastname: lname
        })
      }
      toast.success('User registered successfully!')
      setEmail('')
      setPass('')
      setFname('')
      setLname('')
      // window.location.href='/login'
    } catch (error) {
      toast.error(error.message,{position:'top-center'})
    }
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
      <div className="w-[70%] h-[70%] rounded-lg overflow-hidden shadow-lg flex justify-center border border-neutral-500">

        {/* Left Side - Image */}
        <img
          className="w-full h-full object-cover p-4"
          src="https://assets.bounceexchange.com/assets/uploads/clients/5393/creatives/5ea90eefb8dcb69274b74d4cca80e87c.jpg"
          alt="Side visual"
        />

        {/* Right Side - Register Form */}
        <form className="flex flex-col justify-center px-12 gap-4 text-white bg-black" onSubmit={handleRegister}>
          <h2 className="text-3xl font-bold mb-2">Create an account</h2>
          <p className="text-sm mb-4">
            Already have an account? <a href="/login"className="underline">Log In</a>
          </p>

          {/* Name Fields */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="flex-1 p-3 rounded bg-black border border-white text-white"
            />
            <input
              type="text"
              placeholder="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="flex-1 p-3 rounded bg-black border border-white text-white"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-black border border-white text-white"
          />

          {/* Password with Show/Hide */}
          <div className="relative">
            <input
              type={showpass ? 'text' : 'password'}
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full p-3 rounded bg-black border border-white text-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showpass)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            >
              {showpass ? (
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

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition cursor-pointer"
          >
            Create account
          </button>

          {/* OR Separator */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-white" />
            <span className="mx-2 text-sm">or register with</span>
            <hr className="flex-1 border-white" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 py-2 border border-white rounded flex items-center justify-center gap-2">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="flex-1 py-2 border border-white rounded flex items-center justify-center gap-2">
              <img
                src={apple}
                alt="Apple"
                className="w-5 h-5"
              />
              Apple
            </button>
          </div>
        <p className='text-xs text-center mt-4 text-gray-400'>After successfully registering click login and enter login credentials</p>
        </form>
      </div>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default RegisterForm