import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContributorService from "../../../services/contributor.service";
import ContributorList from "../ContributorList/contributorList";




class Contributors extends Component{
    constructor(props) {
        super(props);

        this.state= {
            contributors: []
        }

        ;
        this.loadContributors=this.loadContributors.bind(this);
    }

    componentDidMount() {
        this.loadContributors();
    }

    loadContributors=()=>{
        ContributorService.getContributors().then((data)=>{
            this.setState(
                {
                    contributors:data.data
                }
            )
        })
    };

    render() {
        return(
            <ContributorList contributors={this.state.contributors}/>
        );
    }

}

export default Contributors;