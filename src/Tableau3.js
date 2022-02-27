import React, { Component } from 'react';
import tableauSoftware from 'tableau-api';
console.log(tableauSoftware)
const url = "https://www.tableaugs.com/#/site/Site_Conectividad/views/TablerogeneralConectividad/TVOUI?:iid=1";

export class Tableau3 extends Component {

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

export default Tableau3
