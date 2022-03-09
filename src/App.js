import logo from './logo.svg';
import './App.css';

import DemoCarousel from './DemoCarousel';
import React from "react";



function App() {
  return (
    <div className="App" style={{pointerEvents:"none"}}>

        <DemoCarousel>
        </DemoCarousel>


        <logo>Dashboards Conectividad</logo>

    </div>
  );
}

export default App;
