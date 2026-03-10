import React from 'react'

function Login() {
  return (
    <div className="bg-slate-100 flex min-h-screen items-center justify-center">
      <div className="flex flex-col w-full bg-slate-50 max-w-md  p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">Welcome back</h1>
        <p className="text-center text-sm  ">Securely access your account</p>

        <form className="space-y-1 mt-8">
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="text"
            placeholder="name@gmail.com"
            className="w-full rounded-lg p-2 bg-slate-200"
          />

          <div className="flex justify-between items-center mt-5">
            <label className="text-sm font-medium">Password</label>
            <span className="text-sm font-medium text-teal-500 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <input
            type="password"
            className="w-full rounded-lg p-2 bg-slate-200"
          />

          <button className="bg-teal-500  mt-5 text-white py-2 rounded-xl w-full ">
            button
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">or continue with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="w-full flex gap-3">
            <button className="flex items-center justify-center gap-2 w-full bg-slate-100 rounded-lg py-2 hover:bg-gray-200">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 w-full bg-slate-100 rounded-lg py-2 hover:bg-gray-200">
              <img
                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                alt="linkedin"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">LinkedIn</span>
            </button>
          </div>
          <p className="mt-5 text-center text-sm">
            Dont have account ?{' '}
            <span className="text-teal-500 font-medium">sign up</span>{' '}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
