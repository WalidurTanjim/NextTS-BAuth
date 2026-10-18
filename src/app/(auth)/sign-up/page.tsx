"use client"
import { signUp } from '@/lib/auth-client';
import React from 'react'

const SignUpPage = () => {
  const signUpFormHandler = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as Record<string, string>;

    console.log("User data beform submit:", userData);

    const { data: resData, error } = await signUp.email({
      name: userData?.name,
      email: userData?.email,
      password: userData?.password
    })
    console.log("User data after submit:", resData, error);
  }

  return (
    <div className='sign-up-page px-2 md:px-5 lg:px-8 py-5'>
      <form
  className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6" onSubmit={signUpFormHandler}
>
  <div>
    <label className="block text-sm font-medium text-gray-900" htmlFor="name">Name</label>

    <input
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="name"
      type="text"
      placeholder="Your name"
      name="name"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-900" htmlFor="email">Email</label>

    <input
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="email"
      type="email"
      placeholder="Your email"
      name="email"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-900" htmlFor="name">Password</label>

    <input
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="name"
      type="text"
      placeholder="Your password"
      name="password"
    />
  </div>

  <button
    className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
    type="submit"
  >
    Signup 
  </button>
</form>
    </div>
  )
}

export default SignUpPage
