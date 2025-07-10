import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/upload', '/explore'];

  return (
    <>
    {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
