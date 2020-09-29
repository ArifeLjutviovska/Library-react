import React from 'react';
import Book from "../Book/book";
import "./bookList.css";
import ReactPaginate from 'react-paginate';




const BookList = (props) => {

    const books = props.books.map((b, index) => {
        return (
<div className="booklistDemo mx-auto flex flex-wrap">
            <Book   book={b} key={index}/>
</div>

        );
    });


if(props.loading){
    return (
        <div><h4>Loading...</h4></div>
    );
}

    return (
        <div>

            <div className="grs">
                {books}
            </div>
         

        </div>
    )
};

export default BookList;