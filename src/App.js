import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Enİyiler from './pages/Enİyiler';
import Filmİzle from "./pages/Filmİzle"
import Listeler from './pages/Listeler';
import Seriler from './pages/Seriler';
import Tercihler from './pages/Tercihler';
import Iletişim from './pages/Iletişim';
import Turler from './pages/Turler';  
import Giriş from './pages/Giriş';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Filmİzle/>}/>
      <Route path='/en-iyiler' element={<Enİyiler/>}/>
      <Route path='/listeler' element={<Listeler/>}/>
      <Route path='/seriler' element={<Seriler/>}/>
      <Route path='/turler' element={<Turler/>}/>
      <Route path='/tercihler' element={<Tercihler/>}/>
      <Route path='/iletişim' element={<Iletişim/>}/>
      {/* <Route path='#' element={<Giriş/>}/> */}

    </Routes>
    </>
  );
}

export default App;
