import React from 'react';

function ClimeVizion() {
    return(
        <div>
        <section className="hero is-primary m-0">
            <div className="hero-body">                
                <p className="subtittle">visualize climate data</p>
            </div>
        </section>
        <section className="section is-medium">            
            <h2 className="title">Key Climate Metrics</h2>            
            <div className="container">                
                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <h3 className="subtitle">Global Temperature</h3>
                            <p>DATA HEERE</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <h3 className="subtitle">CO2 Emission</h3>
                            <p>DATA HEERE</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <h3 className="subtitle">Sea Level</h3>
                            <p>DATA HEERE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <footer className="footer">
            <div className="content has-text-centered">
                <p>API Source</p>
            </div>
        </footer>
    </div>
    );

}

export default ClimeVizion;