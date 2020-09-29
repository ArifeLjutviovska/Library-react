import React, {Component, useEffect, useState} from "react";
import {useParams, useHistory, Link} from 'react-router-dom';
import "./bookContent.css";
import BookService from "../../../services/book.service";


const BookContent =(props)=>{
    const [book,setBook]=useState({});
    const {bookName}=useParams();
    const [creators,setCreators]=useState([]);
    const [contributors,setContributors]=useState([]);


    useEffect(() => {
        BookService.getOneBook(bookName).then((data)=>{
            setBook(data.data)
        });
        BookService.getBookCreators(bookName).then((data)=>{
            setCreators(data.data);
        });
        BookService.getBookContributors(bookName).then((data)=>{
            setContributors(data.data);
        });



    });

    const getCreators=creators.map((c,index)=>{
        return(
            <h4><li key={index}>{c}</li></h4>
        );
    });
    const getContributors=contributors.map((c,index)=>{
        return(
            <h4><li key={index}>{c}</li></h4>
        );
    });
    return(

        <div className="container">
            <div className="jumbotron">
                <div className="dv">
                    <header>
                        <h1 className="txt">Book Name:  {book.title}</h1>

                    </header>
                    <br/><br/>
                    <div>
                        <h4>ISBN: {book.isbn}</h4>
                        <h4>BNB: {book.bnb}</h4>
                        <h4>Date Published: {book.datePublished}</h4><br/><br/>
                        <h3>Creators:</h3> {getCreators}<br/><br/>
                        <h3>Contributors </h3>{getContributors}<br/>


                    </div>



                </div>
            </div>


        </div>
    );

};
export default BookContent;