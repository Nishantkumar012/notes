function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-slate-50 p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-sm text-gray-500 mb-6">
          Start capturing your thoughts today
        </p>

        <form className="space-y-4">
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full  p-2 rounded-lg bg-slate-200"
          />

          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full  p-2 rounded-lg bg-slate-200"
          />

          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full  p-2 rounded-lg bg-slate-200"
          />

          <button className="w-full mt-5 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
            Create Account
          </button>

          <p className="text-center ">
            already have an account?{' '}
            <span className="text-teal-500 cursor-pointer">log in</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
