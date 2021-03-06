import React, { Component } from 'react';
import tableauSoftware from 'tableau-api';
console.log(tableauSoftware)
const url = "https://www.tableaugs.com/t/Site_Conectividad/views/TablerogeneralConectividad/Ceremonias?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";


export class TableauCeremonias extends Component {

    componentDidMount() {
        this.initViz();
    }

    initViz = () => {
        const options = {
            iframe: false,
            hideTabs: false,
            width: '100%',
            height: '100vh',
        }
        const vizContainer = this.vizContainer;
        this.div = new window.tableauSoftware.Viz(vizContainer, url, options);
    }


    render() {
        return (
            <div className="tablero" ref={div => this.vizContainer = div}>

            </div>
        )
    }
}

export default TableauCeremonias
