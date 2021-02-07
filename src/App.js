import './App.css';
import NavbarIndex from './components/NavbarIndex';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <NavbarIndex />
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={LandingPage} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
