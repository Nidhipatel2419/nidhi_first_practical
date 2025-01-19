import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './compoments/Navbar';
import Home from './compoments/Home';
import SignUp from './compoments/signup';
import Login from './compoments/Login';
import DisplayData from './compoments/DisplayData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path ='/'   element={ <Home />}></Route>
        </Routes>
        <Routes>
        <Route exact path ='/login'
            element={<Login/>}
         > </Route>
        <Route exact path ='/signup'
            element={<SignUp/>}
         > </Route>
         <Route exact path ='/displaydata'
            element={<DisplayData/>}
         > </Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
