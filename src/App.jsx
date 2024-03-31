import Home from './pages/Index'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import { BrowserRouter , Routes ,Route}  from 'react-router-dom'

import Categories from './pages/Categories';
 
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-router-dom';
import Sidebar from './pages/Sidebar';




   AOS.init();
const App = () => {
  return (


     <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route   path="/Categories" element={<Categories/>}/>
          <Route   path="/Sidebar" element={<Sidebar/>}/>
         
        </Routes>
      </BrowserRouter>
 
  )
}

export default App