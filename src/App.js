import logo from './logo.svg';
import './App.css';
import Tableau from './Tableau';
import Tableau2 from './Tableau2';
import DemoCarousel from './DemoCarousel';
import { Carousel } from 'react-responsive-carousel';
import React from "react";



function App() {
  return (
    <div className="App">
     <Tableau />
     <Tableau2 />
        <DemoCarousel>

        </DemoCarousel>


        <logo>LOGO</logo>

        <Carousel showThumbs={false} autoPlay={true} interval={4000} infiniteLoop={true} >
            <div>
                <Tableau></Tableau>
                <p className="legend">DASHBOARD 1</p>
            </div>
            <div>
                <Tableau2></Tableau2>
                <p className="legend">DASHBOARD 2</p>
            </div>
            <div>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>
  );
}

export default App;
