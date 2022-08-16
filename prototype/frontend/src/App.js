import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="Header">
        <nav className="nav">
        <Nav/>
        </nav>
        </header>
          
        <div className='divmain'>
        
        <Routes>
          
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<h1>Home of the Aryans</h1>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/about" element={<h1>About </h1>}/>
          <Route path="/contact" element={<h1>Contact Me</h1>}/>
          <Route path="/logout" element={<h1>Get in Get out</h1>}/>
          </Route>
          
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

        
        </div>
        

        <Footer/>        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
