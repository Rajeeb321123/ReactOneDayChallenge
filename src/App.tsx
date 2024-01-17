


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
          <Route path='/home' element={<Home/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      
    </BrowserRouter>


  )
}

export default App
