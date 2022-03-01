import React, { Component } from 'react';
import tableauSoftware from 'tableau-api';
console.log(tableauSoftware)
const url = "http://public.tableau.com/views/WorldIndicators/GDPpercapita";

export class Tableau extends Component {

    componentDidMount() {
        this.initViz();
    }

    initViz = () => {
        const options = {
            iframe: false,
            hideTabs: false,
            width: '100%',
            height: '900px',
        }
        const vizContainer = this.vizContainer;
        this.div = new window.tableauSoftware.Viz(vizContainer, url, options);
    }

     
    render() {
      return (
            <div class = "tablero" ref = {div => this.vizContainer = div } >
                
            </div>
        )
    }
}

export default Tableau
