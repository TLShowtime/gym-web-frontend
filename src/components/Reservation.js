import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reservation = ({ instructor, inicio, duracion, servicio, dia, sala }) => {
  return (
    <div className='card-reservation'>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Instructor: {instructor}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Servicio: {servicio}</Card.Subtitle>
          <Card.Text> Inicio: {inicio} &emsp; &emsp; &emsp; Duracion: {duracion}</Card.Text>
          <Card.Text> Dia: {dia} &emsp; &emsp; &emsp; Sala: {sala} </Card.Text>
          <Button variant="primary">Reservar</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

/*
const Reservation = ({ instructor, inicio, duracion, servicio, dia, sala }) => {
  return (
    <div>
      <h3>{instructor}</h3>
      <h3>{inicio}</h3>
      <h3>{duracion}</h3>
      <h3>{servicio}</h3>
      <h3>{dia}</h3>
      <h3>{sala}</h3>
    </div>
  )
}
*/
export default Reservation
