import axios from "axios";


const API_URL = "http://localhost:8090/books/";


const BookService={
    getBooks: ()=> {
        return axios.get(API_URL);
    },
    getOneBook: (book)=> {
        return axios.get(API_URL+book);
    },
    getBookCreators: (book)=> {
        return axios.get(API_URL+book+"/creators");
    },
    getBookContributors: (book)=> {
        return axios.get(API_URL+book+"/contributors");
    },

};

export default BookService;