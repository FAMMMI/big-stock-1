
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
