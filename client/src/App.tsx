import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LogInView from "./components/Admin/LogInView";
import BookATable from "./components/BookATable/BookATableView";
import CartView from "./components/Cart/CartView";
import Footer from "./components/Footer";
import LeftoverView from "./components/Leftovers/LeftoverView";
import Navigation from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import StartPageView from "./components/StartPage/StartPageView";
import store from "./components/store";
import TakeAway from "./components/Takeaway/TakeawayView";
import BookingProvider from "./contexts/BookingContext";

function App() {
  return (
    <>
    <Provider store={store}>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <Navigation />
          <Switch>
            <Route exact path='/' component={StartPageView}/>
            <Route path='/bookatable' component={BookATable}/>
            <Route path='/login' component={LogInView}/>
            <Route path='/takeaway' component={TakeAway}/>
            <Route path='/leftovers' component={LeftoverView}/>
            <Route path='/cart' component={CartView}/>
          </Switch>
          <Footer />
        </Router>
      </BookingProvider>
    </Provider>
    </>
  );
}

export default App;
