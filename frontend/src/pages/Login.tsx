import React, { useState } from 'react'
import InputField from '../components/InputField'
import SocialButton from '../components/SocialButton'
import AuthButton from '../components/AuthButton'
import { useNavigate } from 'react-router-dom'
import {
  Mail,
  // Lock,
  Eye,
  // Plus,
  // Trash,
  // Pencil,
  // LogOut,
  // FileText,
  LockIcon,
} from 'lucide-react'
import { loginUser } from '../services/authService'
// import { PassThrough } from 'stream'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    //  console.log("submit trigeered")

    //  console.log(form.email)
    try {
      const res = await loginUser({
        email: form.email,
        password: form.password,
      })
      console.log(res.data)

      // console.log("in try")
      navigate('/dash')
    } catch (error) {
      // console.log("in catch")

      console.log(error)
    }
  }

  return (
    <div className="bg-slate-100 flex min-h-screen items-center justify-center">
      <div className="flex flex-col w-full bg-slate-50 max-w-md  p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">Welcome back</h1>
        <p className="text-center text-sm  ">Securely access your account</p>

        <form className="space-y-1 mt-8" onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="text"
            placeholder="name@gmail.com"
            icon={Mail}
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            rightText="Forgot Password?"
            icon={LockIcon}
            rightIcon={Eye}
          />

          {/* <button className="bg-teal-500  mt-5 text-white py-2 rounded-xl w-full ">
            button
          </button>
            */}
          <AuthButton text="Log in" type="submit" />
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">or continue with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="w-full flex justify-around gap-3">
            <SocialButton
              icon="https://www.svgrepo.com/show/475656/google-color.svg"
              text="Google"
            />

            <SocialButton
              icon="https://www.svgrepo.com/show/448234/linkedin.svg"
              text="Linkedin"
            />
          </div>
          <p className="mt-5 text-center text-sm">
            Dont have account ?{' '}
            <span className="text-teal-500 text-sm font-medium cursor-pointer">
              sign up
            </span>{' '}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
