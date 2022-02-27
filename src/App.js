import logo from './logo.svg';
import './App.css';
import Tableau from './Tableau';
import Tableau2 from './Tableau2';
import DemoCarousel from './DemoCarousel';
import React from "react";



function App() {
  return (
    <div className="App">
     <Tableau />
     <Tableau2 />
        <DemoCarousel>

        </DemoCarousel>


        <logo>LOGO</logo>

    </div>
  );
}

export default App;
