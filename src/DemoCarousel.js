import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Tableau5Estrellas from "./Tableau5Estrellas";
import TableauCPV from "./TableauCPV";
import Tableau3 from "./Tableau3";
import TableauLentoDesplazamiento from "./TableauLentoDesplazamiento";
import TableauTVOUI from "./TableauTVOUI";
import TableauCampanasSMS from "./TableauCampanasSMS";
import TableauCeremonias from "./TableauCeremonias";
import TableauCeremoniasScrum from "./TableauCeremoniasScrum";
import TableauEventosPortafolio from "./TableauEventosPortafolio";


export class  DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} autoPlay ={true} interval={30000} infiniteLoop={true} >
                <div>
                    <TableauCPV></TableauCPV>
                </div>
                <div>
                    <Tableau3></Tableau3>
                </div>
                <div>
                    <Tableau5Estrellas></Tableau5Estrellas>
                </div>
                <div>
                    <TableauLentoDesplazamiento></TableauLentoDesplazamiento>
                </div>
                <div>
                    <TableauTVOUI></TableauTVOUI>
                </div>
                <div>
                    <TableauCampanasSMS></TableauCampanasSMS>
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