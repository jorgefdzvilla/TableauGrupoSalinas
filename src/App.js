import logo from './logo.svg';
import './App.css';
import Tableau from './Tableau';
import Tableau2 from './Tableau2';
import Tableau3 from "./Tableau3";
import DemoCarousel from './DemoCarousel';
import React from "react";



function App() {
  return (
    <div className="App">
     <Tableau />
     <Tableau2 />
        <p> INICIA GS</p>
     <Tableau3 />
        <p> TERMINA GS</p>
        <DemoCarousel>

        </DemoCarousel>


        <logo>LOGO</logo>

    </div>
  );
}

export default App;
