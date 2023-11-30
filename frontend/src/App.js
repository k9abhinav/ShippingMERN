import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './stylesheets/styles.css';
import Homepage from './pages/Homepage';
import Formpage from './pages/Formpage';
import Listpage from './pages/Listpage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
