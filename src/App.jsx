
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Restaurant from './Component/Restaurant';
import Contact from './Component/Contact';
import Travel from './Component/Travel';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import ServiceList from './Component/ServiceList';
import Restaurantt from './Component/Restaurantt';
import TaxiToAirPort from './Component/TaxiToAirPort';
import Lounge from './Component/Lounge';
import Cofee from './Component/Cofee';
import Rooms from './Component/Rooms';
import Wedding from './Component/Wedding';
function App() {
  return (
   <>
  <Router>
  <Navbar/>
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/about' element ={<About />} />
      <Route path='/services' element ={<Services />}>
        <Route path='/services' element={<ServiceList/>} />
      </Route>
      <Route path='/restaurantt' element={<Restaurantt/>} />
        <Route path='/taxi' element={<TaxiToAirPort/>} />
        <Route path='/lounge' element={<Lounge/>} />
        <Route path='/cofee' element={<Cofee/>} />
        <Route path='/rooms' element={<Rooms/>} />
        <Route path='/wedding' element={<Wedding/>} />


      <Route path='/restaurant' element ={<Restaurant />} />
      <Route path='/contact' element ={<Contact />} />
      <Route path='/travel' element ={<Travel />} />
    </Routes>
    <Outlet/>
    <Footer/>
  </Router>
  
   </>
  );
}

export default App;
