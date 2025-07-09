import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path = '/upload' element = {<Upload/>}/>
        <Route path='/explore' element = {<Explore />}/>
      </Routes>
    </>
  )
}

export default App
