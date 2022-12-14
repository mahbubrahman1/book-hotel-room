import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Book from './pages/Book';
import Home from './pages/Home';
import Login from './pages/Login';
import Rooms from './pages/Rooms'
import './App.css';
import RoomBook from './pages/RoomBook';

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/login' element={<Login />} />
        <Route path='/roombook' element={<RoomBook />} />
      </Routes>
    </div>
  );
}

export default App;
