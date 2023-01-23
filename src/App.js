import "./bootstrap.min.css";
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import {Button, Container} from "react-bootstrap";
import HomeScreen from "./screen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import AboutScreen from "./screen/AboutScreen";


function App() {
  return (
    <div className="App">
      <Header/>
      <Container className="mt-50 mb-50 justify-content-center">
            <Routes>

              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
            
            </Routes>
              
              
            
          
            <Footer/>
      
        </Container>

    </div>
  );
}

export default App;
