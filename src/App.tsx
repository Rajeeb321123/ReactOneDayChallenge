


// Router
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  

  return (
    <BrowserRouter>
  
      <Routes>
          <Route path='/' element={<Login/>}></Route>

          {/* dynamic routing */}
          {/* /:value  is dynamic value for url */}
          <Route path='/home' element={<Home/>}></Route>

          {/*  '/*' routes means if the none of the above routes are choose then /* will be open  */}
          <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      
    </BrowserRouter>


  )
}

export default App
