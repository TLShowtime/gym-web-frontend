import React,{useState} from 'react';
import ComboBox from 'react-responsive-combo-box';
import 'react-responsive-combo-box/dist/index.css';
import './InstructorForm.css';
import {Button,ButtonCancel} from './Button';
import Popup from './Popup';
import './Button.css';

function InstructorForm() {

    const dataSalas = [1,2,3,4,5,6,7,8];
    const dataEspecialidades = ['Aeróbicos','Pesas','Natación','Zumba'];

    const [especialidades,setEspecialidades] = useState([]);
    const addEspecialidad = (event) => {
        setEspecialidades(prevEsp => [...prevEsp,event])
    }

    const [name,setName] = useState('');
    const [cedula,setCedula] = useState('');
    const [telefono,setTelefono] = useState('');
    const [correo,setCorreo] = useState('');
    const [emergencia,setEmergencia] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateCedula = (e) => {
        setCedula(e.target.value);
    }
    const updateTelefono = (e) => {
        setTelefono(e.target.value);
    }
    const updateCorreo = (e) => {
        setCorreo(e.target.value);
    }
    const updateEmergencia = (e) => {
        setEmergencia(e.target.value);
    }

    

    const [buttonPopup, setButtonPopup] = useState(false);

    const confirmar =() => {
        console.log(name,cedula,telefono,correo,emergencia);
        setButtonPopup(true);
    }

    return (
        <div className="form-container">
            <div className='input-areas'>
                <form>
                    <p className='name__tag'>
                        Nombre Completo: 
                        <input type="nombre" name="Nombre completo" value={name} placeholder="ej: Antony Artavia Palma" onChange={updateName} className="footer-input"/>
                    </p>
                    <p>
                        Cedula:
                        {<input type="cedula" name="Cédula" value={cedula} placeholder="ej: 305210###" onChange={updateCedula} className="footer-input"/>}
                    </p>
                    
                </form>
            </div>
            <div className='input-areas'>
                <form>
                    <p>
                        Telefono: 
                        <input type="telefono" name="Telefono" value={telefono} placeholder="ej: 8527####" onChange={updateTelefono} className="footer-input"/>
                    </p>
                    <p>
                        Correo: 
                        <input type="correo" name="Correo" value={correo} placeholder="ej: antonysec@gmail.com" onChange={updateCorreo} className="footer-input" />
                    </p>
                    <p>
                        Telefono de emergencia: 
                        <input type="telefono-emergencia" name="Telefono-Emergencia" value={emergencia} placeholder="ej: 8527####" onChange={updateEmergencia} className="footer-input" />
                    </p>
                    <p>
                        Sala: 
                        <ComboBox options={dataSalas}  />
                    </p>
                    <p>
                        Especialidades: 
                        <ComboBox options={dataEspecialidades} onSelect={(option)=> addEspecialidad(option)} />
                    </p>
                </form>
            </div>
            <div className="especialidades-showcase">
                <p>
                    Lista de especialidades:
                </p>
                <div >
                    {especialidades.map(espec =>(
                    <li>
                        {espec }
                    </li>    
                    ))}
                </div>
            </div>
            <Button buttonStyle='btn--confirm' onClick={confirmar}>Confirmar</Button>
            <ButtonCancel buttonStyle='btn--cancel'>Cancelar</ButtonCancel>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} mensajeConfirmacion="Registrar Nuevo" mensajeCancelar="Página principal"> 
                <h3> Instructor registrado. </h3>
            </Popup>
        </div>
        
    )
}

export default InstructorForm;