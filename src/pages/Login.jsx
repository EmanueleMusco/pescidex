import React from 'react'

const Login = () => {
  return (

    <div className='login_form'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen '>
          <h1 className='text-center text-4xl font-bold relative translate-y-3 '>Pesci<span className='text-red-700'>Dex</span></h1>
        <div className=' flex items-center justify-center bg-white columns-xl w-96 h-96 rounded-xl shadow-2xl'>
      
      <form action="/login" method='post' className='text-center ' autoComplete='off'>
        <input type="text" name="nickname" id="nickname" placeholder='Nickname' required className='text-center w-70 h-9 bg-slate-600 rounded-md outline-none '/><br /><br />
        <input type="password" name="password" id="password" placeholder='Password' className='w-70 h-9 bg-slate-600 rounded-md text-center outline-none' required/><br /><br /><br />
        <input type="submit" value="Accedi" className='font-semibold bg-green-400 rounded-md h-10 w-20 shadow-xl hover:scale-150 transition-all hover:cursor-pointer' />
      </form>

        </div>
      </div>
    </div>
    
  )
}
export default Login