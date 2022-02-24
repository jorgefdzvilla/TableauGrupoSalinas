import React, { Component } from 'react';

const url = "http://public.tableau.com/views/RegionalSampleWorkbook/College";
export class Tableau extends Component {

    componentDidMount() {
        this.initViz();
    }
    initViz = () => {
        const options = {
            iframe: false,
            hideTabs: false,
            width: '1280px',
            height: '720px',
        }
        const vizContainer = this.vizContainer;
        this.div = new window.tableauSoftware.Viz(vizContainer, url, options);
    }

     
    render() {
      return (
            <div ref = {div => this.vizContainer = div } >
                
            </div>
        )
    }
}

export default Tableau
