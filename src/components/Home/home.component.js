import React, { Component } from "react";
import "./home.css";



 class Home extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <div className="container crd-home">
                <div className="dv">
                    <header className="jumbotron">
                        <h3 className="txt"> Welcome to our digital library, we hope you find what you need.</h3>
                    </header>
                </div>
            </div>
        );
    }
}

export default Home;