import './App.css';
import NavbarIndex from './components/NavbarIndex';
import { BrowserRouter, Route } from 'react-router-dom';
import { AddOrganization, InfoPage, LandingPage, LoginPage } from './views/';

function App() {
  return (
    <BrowserRouter>
      <NavbarIndex />
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/addorg" component={AddOrganization} />
          <Route exact path="/info" component={InfoPage} />
          <Route exact path="/login" component={LoginPage} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
