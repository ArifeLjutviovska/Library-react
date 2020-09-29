import React, { Component,useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookService from "../../../services/book.service";
import BookList from "../BookList/books";
import Pagination from "../../Pagination/pagination";
import "./books.css";
import SearchMenu from "../../SearchMenu/searchMenu";
import SearchService from "../../../services/searchService";


const Books = (props) =>{


   const [books,setBooks]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [booksPerPage,setBooksPerPage]=useState(4);

    useEffect(()=>{
        const fetchBooks=async ()=>{
            setLoading(true);
            BookService.getBooks().then((res)=>{
                setBooks(res.data);
                setLoading(false);

            });

        };
        fetchBooks();

    },[]);

//GET current books
const indexOfLastBook=currentPage*booksPerPage;
const indexOfFirstBook=indexOfLastBook-booksPerPage;
const currentBooks=books.slice(indexOfFirstBook,indexOfLastBook);

//change page
const paginate=(pageNumber)=>setCurrentPage(pageNumber);

   const searchBookByName = (searchTerm) => {
        SearchService.getSearchByBookName(searchTerm).then((response)=>{
            setBooks(response.data);
        })
    };
    const searchBookByAuthorName = (searchTerm) => {
        SearchService.getSearchByAuthorName(searchTerm).then((response)=>{
            setBooks(response.data);
        })
    };
    const searchBookByContributorName = (searchTerm) => {
        SearchService.getSearchByContributorName(searchTerm).then((response)=>{
            setBooks(response.data);
        })
    };
    const searchBookByYear = (searchTerm) => {
        SearchService.getSearchByYear(searchTerm).then((response)=>{
            setBooks(response.data);
        })
    };

    const orderByOldest = () => {
        SearchService.getOrderByOldest().then((response)=>{
            setBooks(response.data);
        })
    };
    const orderByLatest = () => {
        SearchService.getOrderByLatest().then((response)=>{
            setBooks(response.data);
        })
    };


    return(
            <div>
                <SearchMenu className="s-menu-cl" onSearchByBookName={searchBookByName} onSearchByAuthorName={searchBookByAuthorName} onSearchByContributorName={searchBookByContributorName} onSearchByYear={searchBookByYear} orderByOldest={orderByOldest} orderByLatest={orderByLatest}/>
            <BookList books={currentBooks} loading={loading} />
            <Pagination className="pag" paginate={paginate} booksPerPage={booksPerPage} totalBooks={books.length}/>
            </div>

        );
    };



export default Books;