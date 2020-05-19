import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//importando as páginas
import HomePage from './HomePage'
import AplicationForm from './AplicationForm'
import Login from './Login'
import CreateTripPage from './CreateTripPage'
import TripDetailsPage from './TripDetailsPage'
import ListTripsPage from './ListTripsPage';

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/DetalhesViagem'>
                <TripDetailsPage />
            </Route>
            <Route exact path='/CriarViagem'>
                <CreateTripPage />
            </Route>
            <Route exact path='/ListaViagens'>
                <ListTripsPage />
            </Route>
            <Route exact path='/Login'>
                <Login />
            </Route>
            <Route exact path='/Formulario'>
                <AplicationForm />
            </Route>
            <Route exact path='/'>
                <HomePage />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Router;