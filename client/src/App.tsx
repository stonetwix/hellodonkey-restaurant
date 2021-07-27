import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import BookATable from "./components/BookATable/BookATableView";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import StartPageView from "./components/StartPage/StartPageView";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
          <Navigation />
          <Switch>
            <Route exact path='/' component={StartPageView}/>
            <Route path='/bookatable' component={BookATable}/>
          </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
