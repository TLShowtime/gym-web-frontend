import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Calendario from './pages/Calendario';
import RegistrarCliente from './pages/RegistrarCliente';
import RegistrarInstructor from './pages/RegistrarInstructor';
import Reservaciones from './pages/Reservaciones';
import Servicios from './pages/Servicios';
import LongIn from './pages/LogIn';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={LongIn}/>
            <Route path='/home' exact component={Home}/>
            <Route path='/registrar-cliente' component={RegistrarCliente}/>
            <Route path='/registrar-instructor' component={RegistrarInstructor}/>
            <Route path='/servicios' component={Servicios}/>
            <Route path='/reservaciones' component={Reservaciones}/>
            <Route path='/Calendario' component={Calendario}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
