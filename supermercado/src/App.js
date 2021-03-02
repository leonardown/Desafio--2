import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';

export const API_URL = "https://challenge-products-api.herokuapp.com";

function App() {
  return (  
    <main>
      <Router>
        <Header />
        <div div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contato">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
  );
};

export default App;
