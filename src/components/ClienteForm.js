import React,{useState} from 'react';
import './ClienteForm.css';
import {Button,ButtonCancel} from './Button';
import Popup from './Popup';
import './Button.css';

function ClienteForm() {


    const [name,setName] = useState('');
    const [cedula,setCedula] = useState('');
    const [telefono,setTelefono] = useState('');
    const [correo,setCorreo] = useState('');
    const [emergencia,setEmergencia] = useState('');
    const [enfermedades,setEnfermedades] = useState([]);
    const [medicamentos,setMedicamentos] = useState([]);

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
    const updateMedicamento = (e) => {

        setMedicamentos(  e.target.value.split(',') );
    }
    const updateEnfermedad = (e) => {
        setEnfermedades(e.target.value.split(','));
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    const confirmar =() => {
        console.log(name,cedula,telefono,correo,emergencia);
        console.log(enfermedades);
        console.log(medicamentos);
        setButtonPopup(true);
    }

    return (
        <div className="form-container">
            <div className='input-areas'>
                <form>
                    <p className='name__tag'>
                        Nombre Completo: 
                        {<input type="nombre" name="Nombre completo" value={name} placeholder="ej: Antony Artavia Palma" onChange={updateName} className="footer-input"/>}
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
                        {<input type="telefono" name="Telefono" value={telefono} placeholder="ej: 8527####" onChange={updateTelefono} className="footer-input"/>}
                    </p>
                    <p>
                        Correo: 
                        {<input type="correo" name="Correo" value={correo} placeholder="ej: antonysec@gmail.com" onChange={updateCorreo} className="footer-input" />}
                    </p>
                    <p>
                        Telefono de emergencia: 
                        {<input type="telefono-emergencia" name="Telefono-Emergencia" value={emergencia} placeholder="ej: 8527####" onChange={updateEmergencia} className="footer-input" />}
                    </p>
                    <p>
                        Enfermedades: 
                    </p>
                    <input type="enfermedades" name="Enfermedades" value={enfermedades} placeholder="ej: Asma, rinitis crónica, ..., (cada enfermedad separado por ',')" onChange={updateEnfermedad} className="footer-input" />
                    <p>
                        Medicamentos que consume: 
                    </p>
                    <input type="medicamentos" name="Medicamentos que consume" value={medicamentos} placeholder="ej: Salbutamol, ibuprofeno, ..., (cada medicamento separado por ',')" onChange={updateMedicamento} className="footer-input" />
                </form>
            </div>
            <Button buttonStyle='btn--confirm' onClick={confirmar}>Confirmar</Button>
            <ButtonCancel buttonStyle='btn--cancel'>Cancelar</ButtonCancel>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} mensajeConfirmacion="Registrar Nuevo" mensajeCancelar="Página principal"> 
                <h3> Cliente registrado. </h3>
            </Popup>
        </div>
        
    )
}

export default ClienteForm;