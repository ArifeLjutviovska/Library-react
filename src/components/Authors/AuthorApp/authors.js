import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthorService from  "../../../services/author.service";
import AuthorList from "../AuthorList/AuthorList";




class Authors extends Component{
    constructor(props) {
        super(props);

        this.state= {
            authors: []
        }

        ;
        this.loadAuthors=this.loadAuthors.bind(this);
    }

    componentDidMount() {
        this.loadAuthors();
    }

    loadAuthors=()=>{
        AuthorService.getAuthors().then((data)=>{
            this.setState(
                {
                    authors:data.data
                }
            )
        })
    };

    render() {
        return(
            <AuthorList authors={this.state.authors}/>
        );
    }

}

export default Authors;