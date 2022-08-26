
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Cars from './Pages/Home/Cars';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import RequireAuth from './Pages/Login/RequireAuth';
import Car from './Pages/Home/Car';
import SingleCar from './Pages/Inventory/SingleCar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/inventory" element={<Cars></Cars>}></Route>
        <Route path='/car/:id' element={<RequireAuth>
          <SingleCar></SingleCar>
        </RequireAuth>}></Route>
        <Route path="/aboutus" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
