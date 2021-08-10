import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AdminAddLeftover from "./components/Admin/AdminAddLeftover";
import AdminAddMenuItem from "./components/Admin/AdminAddMenuItem";
import AdminEditLeftover from "./components/Admin/AdminEditLeftover";
import AdminEditMenuItem from "./components/Admin/AdminEditMenuItem";
import AdminLeftovers from "./components/Admin/AdminLeftovers";
import AdminOrders from "./components/Admin/AdminOrders";
import AdminReservations from "./components/Admin/AdminReservations";
import AdminStartView from "./components/Admin/AdminStartView";
import AdminTakeAway from "./components/Admin/AdminTakeAway";
import AdminUsers from "./components/Admin/AdminUsers";
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
            <Route path='/takeaway' component={TakeAway}/>
            <Route path='/leftovers' component={LeftoverView}/>
            <Route path='/cart' component={CartView}/>
            <Route exact path='/admin' component={LogInView}/>
            <Route path='/admin/start' component={AdminStartView}/>
            <Route path='/admin/menu' component={AdminTakeAway}/>
            <Route path='/admin/leftovers' component={AdminLeftovers}/>
            <Route path='/admin/orders' component={AdminOrders}/>
            <Route path='/admin/reservations' component={AdminReservations}/>
            <Route path='/admin/users' component={AdminUsers}/>
            <Route path='/admin/editmenuitem/:id' component={AdminEditMenuItem}/>
            <Route path='/admin/addmenuitem' component={AdminAddMenuItem}/>
            <Route path='/admin/addleftover' component={AdminAddLeftover}/>
            <Route path='/admin/editleftover/:id' component={AdminEditLeftover}/>
          </Switch>
          <Footer />
        </Router>
      </BookingProvider>
    </Provider>
    </>
  );
}

export default App;
