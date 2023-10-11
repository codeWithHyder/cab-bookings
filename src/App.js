// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rideform from './components/Rideform';
import Contact from './components/Contact';
import Book from './components/Book';
import Footer from './components/Footer';
import data from './utility/data';



function App() {
  return (
    <div className='main-app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >  
            <Route path="Book" element={<Book />} />
            <Route path = "Contact" element={<Contact />} />
            <Route index element={<Rideform />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div> 
   
  );
}

export default App;
