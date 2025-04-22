
import Form from './assets/Components/Form'
import Home from './assets/Components/Home'
import './App.css';
import React from 'react'
import appFirebase from './credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)
function App() {
  const [user, setUser] = React.useState(null);
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  })
  return (
    <>
      {/* {user ? <Home/> : <Form />} */}
      {user ? window.location.href = "https://ascensores.rds-la.com/" : <Form />}
    </>
  )
}

export default App
