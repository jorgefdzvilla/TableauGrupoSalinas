import React, { Component } from 'react';
import tableauSoftware from 'tableau-api';
console.log(tableauSoftware)
const url = "https://www.tableaugs.com/t/Site_Conectividad/views/TablerogeneralConectividad/CPV?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";

export class Tableau2 extends Component {

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

export default Tableau2
