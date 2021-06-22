import React from 'react';
import './Popup.css';
import {Button, ButtonCancel} from './Button';

function Popup(props) {
    

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                
                {props.children}
                <Button buttonStyle='btn--confirm' onClick={()=> props.setTrigger(false)}>{props.mensajeConfirmacion}</Button>
                <ButtonCancel buttonStyle='btn--confirm'>{props.mensajeCancelar}</ButtonCancel>
            </div>
        </div>
    ) : "";
}

export default Popup
