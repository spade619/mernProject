import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components and pages
import Home from './pages/Home'
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
          </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
