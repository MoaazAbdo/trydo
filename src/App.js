
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/ServicePage/Services';
import About from './components/pages/AboutPage/About';
import BlogList from './components/pages/BlogPage/BlogList';
import Pricing from './components/pages/PricingPage/Pricing';
import Contact from './components/pages/ContactPage/Contact';
import ServiceDetails from './components/pages/ServiceDetails/ServiceDetails';
import ScrollToTop from './components/ScrollToTop';
import ScrollTopBtn from './components/ScrollTopBtn';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollTopBtn />
      <Navbar />
      <Switch>
        <Route exact path="/trydo" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={BlogList} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/service-details" component={ServiceDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
