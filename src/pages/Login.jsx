import React, {useState} from 'react'
import Axios from 'axios'

const Login = () => {
  const [nicknameLog, setNicknameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const auth =  ()=>{
    Axios.post('http://localhost:3001/login', {nickname: nicknameLog, password: passwordLog}).then((response)=>{
      console.log(response.data)
    })
  }
  return (

    <div className='login_form'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen '>
          <h1 className='text-center text-4xl font-bold relative translate-y-3 '>Pesci<span className='text-red-700'>Dex</span></h1>
        <div className=' flex items-center justify-center bg-white columns-xl w-96 h-96 rounded-xl shadow-2xl'>
      
        <div className='text-center' >
        <input type="text" name="nickname" id="nickname" placeholder='Nickname' required className='text-center w-70 h-9 bg-slate-600 rounded-md outline-none ' onChange={(e)=> {setNicknameLog(e.target.value);}} autoComplete="off"/><br /><br />
        <input type="password" name="password" id="password" placeholder='Password' className='w-70 h-9 bg-slate-600 rounded-md text-center outline-none' required onChange={(e)=> {setPasswordLog(e.target.value);}} autoComplete="off"/><br /><br /><br />
        <input type="button" value="Accedi" className='font-semibold bg-green-400 rounded-md h-10 w-20 shadow-xl hover:scale-150 transition-all hover:cursor-pointer' onClick={auth}/>
        </div>
        </div>
      </div>
    </div>
    
  )
}
export default Login