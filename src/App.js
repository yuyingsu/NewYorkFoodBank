import './App.css';
import NavbarIndex from './components/NavbarIndex';
import { BrowserRouter, Route } from 'react-router-dom';
import { AddOrganization, LandingPage, Login, MapHouseholdIncome, Register } from './views/';
import AddPantry from 'views/AddPantry';

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
          <Route exact path="/register" component={Register} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
