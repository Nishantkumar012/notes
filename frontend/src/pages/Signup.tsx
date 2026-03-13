import { useState } from 'react'
import AuthButton from '../components/AuthButton'
import InputField from '../components/InputField'
import { useNavigate } from 'react-router-dom'
import {
  Mail,
  Lock,
  Eye,
  Plus,
  Trash,
  Pencil,
  LogOut,
  FileText,
  LockIcon,
  User,
  User2Icon,
  UserRound,
} from 'lucide-react'
import { signupUser } from '../services/authService'

function Signup() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await signupUser({
        name: form.name,
        email: form.email,
        password: form.password,
      })

      console.log(res.data)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-slate-50 p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-sm text-gray-500 mb-6">
          Start capturing your thoughts today
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Full name"
            type="text"
            placeholder="Full name"
            icon={UserRound}
            value={form.name}
            name="name"
            onChange={handleChange}
          />

          <InputField
            label="Email"
            type="text"
            placeholder="name@gmail.com"
            icon={Mail}
            value={form.email}
            name="email"
            onChange={handleChange}
          />

          <InputField
            label="password"
            type="password"
            placeholder="Password"
            icon={Lock}
            rightIcon={Eye}
            value={form.password}
            name="password"
            onChange={handleChange}
          />

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
