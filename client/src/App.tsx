import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
