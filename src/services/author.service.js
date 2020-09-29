import axios from "axios";


const API_URL = "http://localhost:8090/authors/";


const AuthorService={
    getAuthors: ()=> {
        return axios.get(API_URL);
    },
    getOneAuthor: (author)=> {
        return axios.get(API_URL+author);
    },
    getHasCreated: (author)=> {
        return axios.get(API_URL+author+"/hasCreated");
    },

};

export default AuthorService;