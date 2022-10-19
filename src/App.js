
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import  Header  from './Component/header/Header.js';
import Landingpage from './Component/Landing Page/Landingpage';
import  Postview  from './Component/postview/Postview.js';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/post-view' element={<Postview/>}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
