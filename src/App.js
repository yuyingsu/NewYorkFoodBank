import './App.css';
import NavbarIndex from './components/NavbarIndex';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  AddOrganization,
  EditOrganization,
  EditPantry,
  LandingPage,
  Login,
  MapPantries,
  MapHouseholdIncome,
  MyOrgs,
  Organization,
  OrganizationPublic,
  Organizations,
  Pantry,
  Pantries,
  Privacy,
  Register,
  Terms,
  DonationPage,
  Contact
 } from './views/';
import AddPantry from './views/AddPantry';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavbarIndex />
      <div className="App">
        <header className="App-header">
          <div className="content-wrap">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/addorg" component={AddOrganization} />
          <Route path='/org/:id/addpantry' exact render={({match}) =>  <AddPantry id={match.params.id} /> } />
          <Route exact path="/info" component={MapHouseholdIncome} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/myorgs' component={MyOrgs} />
          <Route path='/org/edit/:id' exact render={({match}) =>  <EditOrganization id={match.params.id} /> } />
          <Route path='/org/:id' exact render={({match}) =>  <Organization id={match.params.id} /> } />          <Route exact path="/orgs" component={Organizations} />
          <Route path='/pantry/edit/:id' exact render={({match}) =>  <EditPantry id={match.params.id} /> } />
          <Route path='/pantry/:id' exact render={({match}) =>  <Pantry id={match.params.id} /> } />          <Route exact path="/pantries" component={Pantries} />
          <Route exact path="/pantrymap" component={MapPantries} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/terms" component={Terms} />
          <Route path='/vieworg/:id' exact render={({match}) =>  <OrganizationPublic id={match.params.id} /> } />
             </div>
             <Footer />
             </header>
          <Route exact path="/donate" component={DonationPage} />
          <Route exact path="/contact" component={Contact} />
          </header>
      </div>

    </BrowserRouter>
  );
}

export default App;
