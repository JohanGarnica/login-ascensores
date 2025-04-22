import {React, useState} from 'react'
import appFirebase from '../../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)


function form() {
  const [registering, setRegistering] = useState(false)
  const[mesage, setMesage]= useState('')
  const authfunction =  async(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (registering){
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        setMesage('Usuario creado correctamente')
      } catch (error) {
        setMesage('error al crear usuario', error)
      }
    }else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        setMesage('Usuario logueado correctamente')
      } catch (error) {
        setMesage('Error al iniciar sesión contraseña y usuario invalido ', error)
      }
    }
  }
    return (
    <div className='grid place-items-center h-auto bg-[#15cbb9] p-5 rounded-xl shadow-lg'>
        <div className='flex'>
          <figure className='relative '>
            <div className='image-mask absolute bottom-0 left-0 right-0 top-0 h-full w-full  bg-fixed rounded-3xl ' />
            <figcaption className='absolute px-4 text-lg text-white bottom-6 text-left'>
              {/* <div className='pt-4 font-normal text-sm w-64'>rds Ascensores</div> */}
              {/* <p className='font-bold  text-white text-3xl pt-2'><img src={logo} alt='logo' className='w-16'/></p> */}
            </figcaption>
          </figure>
          <div className='p-5'>
            <h2 className='text-titlesAvi text-3xl  font-extrabold text-center w-96 '>Registrarse</h2>
            <form className='grid mb-16 place-items-center w-12/12 md:w-8/12 'onSubmit={authfunction}> 
              <label className='m-3'>
                <input className='shadow-md h-6 outline-none border-2 rounded-full w-80  placeholder:text-gray-500  text-gray-500 p-4' type='email' placeholder='Email' name='email' id='email' />
              </label>
              <label className='m-3'>
                <input className='shadow-md h-6 outline-none border-2 rounded-full w-80  placeholder:text-gray-500  text-gray-500 p-4' type='password' placeholder='password' name='password' id='password' />
              </label>
              <button
                type='submit'
                className='w-48 h-9 bg-[#ea8696] text-white rounded-3xl text-base flex justify-center items-center mt-4 mx-auto'
              >
                {registering ? 'registrarse': 'Iniciar sesión'} 
              </button>
            </form>
            <p className='pt-4' >{ registering ? 'si ya estas registrado':'si no estas registrado'}<a className='text-[#ea8696]' onClick={()=>setRegistering(!registering)} > {registering ? 'iniciar sesión' : 'Registrarse'}</a> </p>
            <div>
              {mesage && <p className='text-center text-red-500'>{mesage}</p>} 
            </div>
            <div className="w-full text-center" >RDS ascensores</div>
          </div>
        </div>
      </div>
  )
}

export default form