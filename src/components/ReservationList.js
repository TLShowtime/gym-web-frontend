import React, {useState} from 'react'
import Reservation from './Reservation';

const ReservationList = () => {
  const [reservaciones, setReservaciones] = useState([
      {
        instructor: 'Fulanito',
        inicio: '2:00pm',
        duracion: '3 horas',
        servicio: 'Crosfit',
        dia: '11-12-2021',
        sala: 'Sala 1'
      },
      {
        instructor: 'Menganito',
        inicio: '3:00pm',
        duracion: '1 hora',
        servicio: 'Danza',
        dia: '5-5-2021',
        sala: 'Sala 2'
      },
      {
        instructor: 'Raimundo',
        inicio: '4:00pm',
        duracion: '2 hora',
        servicio: 'Yoga',
        dia: '25-10-2021',
        sala: 'Sala 5'
      },
      {
        instructor: 'Sutanito',
        inicio: '6:00pm',
        duracion: '1 horas',
        servicio: 'Zamba',
        dia: '2-4-2021',
        sala: 'Sala 3'
      }
    ]);

  return (
    <div>
      {reservaciones.map(reservacion => (
        <Reservation
          instructor={reservacion.instructor}
          inicio={reservacion.inicio}
          duracion={reservacion.duracion}
          servicio={reservacion.servicio}
          dia={reservacion.dia}
          sala={reservacion.sala}
        />
      ))}
    </div>
  );
}

export default ReservationList
