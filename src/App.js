import './App.css';
import NavbarIndex from './components/NavbarIndex';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  AddOrganization,
  EditOrganization,
  LandingPage,
  Login,
  MapAllPantries,
  MapHouseholdIncome,
  MyOrgs,
  Organization,
  Organizations,
  Pantry,
  Pantries,
  Privacy,
  Register,
  Terms
 } from './views/';
import AddPantry from './views/AddPantry';

function App() {
  return (
    <BrowserRouter>
      <NavbarIndex />
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/addorg" component={AddOrganization} />
          <Route exact path="/addpantry" component={AddPantry} />
          <Route exact path="/info" component={MapHouseholdIncome} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/myorgs' component={MyOrgs} />
          <Route path='/org/edit/:id' exact render={({match}) =>  <EditOrganization id={match.params.id} /> } />
          <Route path='/org/:id' exact render={({match}) =>  <Organization id={match.params.id} /> } />          <Route exact path="/orgs" component={Organizations} />
          <Route path='/pantry/:id' exact render={({match}) =>  <Pantry id={match.params.id} /> } />          <Route exact path="/pantries" component={Pantries} />
          <Route exact path="/pantrymap" component={MapAllPantries} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/terms" component={Terms} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
