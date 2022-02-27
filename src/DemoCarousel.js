import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Tableau from "./Tableau";
import Tableau2 from "./Tableau2";

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
                    <p className="legend">Legend 3</p>
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