import React from 'react'
import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth=getAuth(appFirebase);

function Home() {
  return (
    <div>Home

      <button onClick={()=>signOut(auth)} >cerrar Sesión</button>
    </div>

  )
}

export default Home