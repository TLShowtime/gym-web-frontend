import React from 'react'

function LongIn() {
  return (
    <>
      <div className='container-login'>
        <label>Usuario:</label>
        <input className='entrada user' type='text' placeholder='ej. Fulanito Alcachofa' name='username'/>
        <label>Contraseña: </label>
        <input className='entrada cont' type="password" placeholder="ej. Soyunacontraseña123" name="password" required/>
        <button className='btn-' type="submit">Login</button>
        <button type="button" class="cancelbtn"> Resgistrarse</button>
      </div>
    </>
  )
}

export default LongIn
