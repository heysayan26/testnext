import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const handlechange = (e)=>{
   if(e.target.name == "name"){
    setname(e.target.value)
   }
  else if(e.target.name == "email"){
    setEmail(e.target.value)
   }
  else if(e.target.name == "password"){
    setpassword(e.target.value)
   }
  }
  const handlesubmit = async(e)=>{
    e.preventDefault()
    const formdata = { email, password,name };
    let res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    })
    let response = await res.json()
    if(response.sucess){
    toast.success('register sucessfully', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }
    else{
      toast.success('Error', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  return (
    <>
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <section className="flex h-[100vh] w-[100%] justify-center items-center bg-black">
    <form className="flex flex-col w-auto h-auto p-10 bg-white space-y-4 rounded-lg" onSubmit={handlesubmit}>
      <h1 className="text-center text-4xl font-bold uppercase">Sign up</h1>
      <input onChange={handlechange} className="border border-gray-300 p-2.5 text-lg rounded-lg lg:w-[300px] w-auto  bg-gray-200" type="text"  placeholder="Name" name="name"/>
      <input onChange={handlechange} className="border border-gray-300 p-2.5 text-lg rounded-lg lg:w-[300px] w-auto bg-gray-200" type="email"  placeholder="Email" name="email"/>
      <input onChange={handlechange} className="border border-gray-300 p-2.5 text-lg rounded-lg lg:w-[300px] w-auto bg-gray-200" type="password"  placeholder="password" name="password"/>
      <button type="submit" className="w-full bg-green-500 text-white p-2.5 uppercase rounded-lg font-bold text-xl">Sign up</button>
    </form>
</section>
</>
  )
}
