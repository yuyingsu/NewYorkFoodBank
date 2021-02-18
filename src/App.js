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
  Pantries,
  Organizations,
  Register } from './views/';
import AddPantry from './views/AddPantry';
import SinglePantry from './views/SinglePantry';
import SingleOrg from './views/SingleOrg';

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
          <Route exact path="/orgs" component={Organizations} />
          <Route exact path="/pantries" component={Pantries} />
          <Route exact path="/pantrymap" component={MapAllPantries} />
          <Route exact path="/register" component={Register} />
          <Route path='/org/edit/:id' exact render={({match}) =>  <EditOrganization id={match.params.id} /> } />
          <Route path='/org/:id' exact render={({match}) =>  <SingleOrg id={match.params.id} /> } />
          <Route path='/pantry/:id' exact render={({match}) =>  <SinglePantry id={match.params.id} /> } />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
