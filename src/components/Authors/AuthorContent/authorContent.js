import React, {Component, useEffect, useState} from "react";
import {useParams, useHistory, Link} from 'react-router-dom';
import "./authorContent.css";
import AuthorService from "../../../services/author.service";



const AuthorContent =(props)=>{
    const [author,setAuthor]=useState({});
    const {authorName}=useParams();
    const [hasCreated,setHasCreated]=useState([]);



    useEffect(() => {
        AuthorService.getOneAuthor(authorName).then((data)=>{
            setAuthor(data.data)
        });
        AuthorService.getHasCreated(authorName).then((data)=>{
            setHasCreated(data.data);
        });



    });

    const getHasCreated=hasCreated.map((c,index)=>{
        return(
            <h4><li key={index}>{c}</li></h4>
        );
    });

    return(

        <div className="container">
            <div className="jumbotron">
                <div className="dv">
                    <header>
                        <h1 className="txt">Creator:  {author.name}</h1>

                    </header>
                    <br/><br/>
                    <div>
                        <h4>Type: {author.type}</h4><br/><br/><br/>

                        <h3>Has Created: </h3> {getHasCreated}<br/><br/>



                    </div>



                </div>
            </div>


        </div>
    );

};
export default AuthorContent;