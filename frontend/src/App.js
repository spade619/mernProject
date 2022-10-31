import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components and pages
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './reusableComponents/Navbar';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
       <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
               <Route 
              path="/login"
              element={<Login />}
            />
               <Route 
              path="/signup"
              element={<Signup />}
            />
          </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
