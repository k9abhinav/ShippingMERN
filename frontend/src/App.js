import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Formpage from './pages/Formpage';
import Listpage from './pages/Listpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/form" element={<Formpage/>}/>
          <Route path='/list' element={<Listpage/>}/>
          <Route path="/form/:id" element={<Formpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
