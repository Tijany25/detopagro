'use client'
import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import InputField from '../input/Input';
import { useRouter } from 'next/navigation';

interface LoginRequest {
    username: string;
    password: string;
  }

const Login = () => {
    const [user, setUser] = useState<any>();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleChange = (field: keyof LoginRequest, value: string) => {
    setUser((prevCategory: any) => ({
      ...prevCategory,
      [field]: value,
    }));
    // Clear error when field is changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }));
  };

  const handleSave = async () => {

    const userData = {
        username: user.username,
        password: user.password,
      };
  
    try {
      const response = await axios.post('/api/auth/login', userData);
      if (response.status === 200) {
        console.log(response);
        toast.success('Login successfully');
        localStorage.setItem('token', response.data.token);
        router.push('/admin');
      } else {
        // Handle API errors (e.g., display error message)
        toast.error('Error saving Category:', response.data);
      }
    } catch (error) {
      console.error('Error saving Category:', error);
      // Handle network or other errors
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-green md:text-2x">
                  Sign in to your account
              </h1>
                <InputField
                    label="User Name"
                    value={user?.username}
                    onChange={(value: any) => handleChange('username', value)}
                    error={errors.name}
                />
                  <InputField
                    label="Password "
                    value={user?.password}
                    onChange={(value: any) => handleChange('password', value)}
                    error={errors.name}
                    />
                  <button onClick={handleSave} className="w-full text-white bg-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login