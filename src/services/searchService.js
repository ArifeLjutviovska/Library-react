import axios from "axios";


const API_URL = "http://localhost:8090/";


const SearchService={

    getSearchByBookName: (searchParametar)=> {
        return axios.get(API_URL+"/searchByName"+`?searchParametar=${searchParametar}`);
    },
    getSearchByAuthorName: (searchParametar)=> {
        return axios.get(API_URL+"/searchByAuthorName"+`?authorName=${searchParametar}`);
    },
    getSearchByContributorName: (searchParametar)=> {
        return axios.get(API_URL+"/searchByContributorName"+`?conName=${searchParametar}`);
    },
    getSearchByYear: (searchParametar)=> {
        return axios.get(API_URL+"/searchBookByYear"+`?year=${searchParametar}`);
    },

    getOrderByOldest: ()=> {
        return axios.get(API_URL+"/OrderByOldestBooks");
    },
    getOrderByLatest: ()=> {
        return axios.get(API_URL+"/OrderByLatestBooks");
    },


};

export default SearchService;