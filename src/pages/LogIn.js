import {React, useState} from 'react'
import {Link} from 'react-router-dom';
import './LogIn.css';

function LogIn() {
  const [click, setClick] = useState(false);
  const gotToHome = () => setClick(false);

  return (
    <>
      <div className='container-login'>
        <label>Usuario:</label>
        <input className='entrada user' type='text' placeholder='ej. Fulanito Alcachofa' name='username'/>
        <label>Contraseña: </label>
        <input className='entrada cont' type="password" placeholder="ej. Soyunacontraseña123" name="password" required/>
        <button className='btn-login' type="submit">
        <Link to="/home" className='nav-links' onClick={gotToHome}>
              Log In
        </Link>
        </button>
        <button className='btn-login cancelbtn' type="button"> Registrarse</button>
      </div>
    </>
  )
}

export default LogIn
