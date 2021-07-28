import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LogInView from "./components/Admin/LogInView";
import BookATable from "./components/BookATable/BookATableView";
import Footer from "./components/Footer";
import LeftoverView from "./components/Leftovers/LeftoverView";
import Navigation from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import StartPageView from "./components/StartPage/StartPageView";
import TakeAway from "./components/Takeaway/TakeawayView";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route exact path='/' component={StartPageView}/>
          <Route path='/bookatable' component={BookATable}/>
          <Route path='/login' component={LogInView}/>
          <Route path='/takeaway' component={TakeAway}/>
          <Route path='/leftovers' component={LeftoverView}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
