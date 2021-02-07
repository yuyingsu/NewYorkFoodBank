import './App.css';
import NavbarIndex from './components/NavbarIndex';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import InfoPage from './views/InfoPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <NavbarIndex />
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/info" component={InfoPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
