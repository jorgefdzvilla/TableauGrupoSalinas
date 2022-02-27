import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Tableau from "./Tableau";
import Tableau2 from "./Tableau2";
import Tableau3 from "./Tableau3";
import Tableau4 from "./Tableau4";
import Tableau5 from "./Tableau5";
import Tableau6 from "./Tableau6";
import Tableau7 from "./Tableau7";
import Tableau8 from "./Tableau8";
import Tableau9 from "./Tableau9";


export class  DemoCarousel extends Component {
    render() {
        return (
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
                    <Tableau3></Tableau3>
                    <p className="legend">DASHBOARD 3</p>
                </div>

                <div>
                    <Tableau4></Tableau4>
                    <p className="legend">DASHBOARD 4</p>
                </div>
                <div>
                    <Tableau5></Tableau5>
                    <p className="legend">DASHBOARD 5</p>
                </div>
                <div>
                    <Tableau6></Tableau6>
                    <p className="legend">DASHBOARD 6</p>
                </div>

                <div>
                    <Tableau7></Tableau7>
                    <p className="legend">DASHBOARD 7</p>
                </div>
                <div>
                    <Tableau8></Tableau8>
                    <p className="legend">DASHBOARD 8</p>
                </div>
                <div>
                    <Tableau9></Tableau9>
                    <p className="legend">DASHBOARD 9</p>
                </div>


            </Carousel>
        );
    }
}
export default DemoCarousel



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>