import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Book from './pages/Book';
import Home from './pages/Home';
import Login from './pages/Login';
import Rooms from './pages/Rooms'
import RoomBook from './pages/RoomBook';
import AuthProvider from './context/AuthProvider';
import RequireAuth from './PrivateRoute/RequireAuth';

function App() {
  return (
    <div className='font-poppins'>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/book' element={
            <RequireAuth>
              <Book />
            </RequireAuth>
          } />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/login' element={<Login />} />
          <Route path='/roombook' element={
            <RequireAuth>
              <RoomBook />
            </RequireAuth>
          } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
