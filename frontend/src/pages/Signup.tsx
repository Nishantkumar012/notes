import AuthButton from '../components/AuthButton'
import InputField from '../components/InputField'

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-slate-50 p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-sm text-gray-500 mb-6">
          Start capturing your thoughts today
        </p>

        <form className="space-y-4">
          <InputField label="Full name" type="text" placeholder="Full name" />

          <InputField label="Email" type="text" placeholder="name@gmail.com" />

          <InputField label="password" type="password" placeholder="Password" />

          {/* <button className="w-full mt-5 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
            Create Account
          </button> */}

          <AuthButton text="Create Account" />

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
