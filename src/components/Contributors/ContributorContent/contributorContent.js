import React, {Component, useEffect, useState} from "react";
import {useParams, useHistory, Link} from 'react-router-dom';
import "./contributorContent.css";
import ContributorService from "../../../services/contributor.service";




const ContributorContent =(props)=>{
    const [contributor,setContributor]=useState({});
    const {contributorName}=useParams();
    const [hasContributed,setHasContributed]=useState([]);



    useEffect(() => {
        ContributorService.getOneContributor(contributorName).then((data)=>{
            setContributor(data.data)
        });
        ContributorService.getHasContributed(contributorName).then((data)=>{
            setHasContributed(data.data);
        });



    });

    const getHasContributed=hasContributed.map((c,index)=>{
        return(
            <h4><li key={index}>{c}</li></h4>
        );
    });

    return(

        <div className="container">
            <div className="jumbotron">
                <div className="dv">
                    <header>
                        <h1 className="txt">Contributor:  {contributor.name}</h1>

                    </header>
                    <br/><br/>
                    <div>
                        <h4>Type: {contributor.type}</h4><br/><br/><br/>

                        <h3>Has Contributed: </h3> {getHasContributed}<br/><br/>



                    </div>



                </div>
            </div>


        </div>
    );

};
export default ContributorContent;