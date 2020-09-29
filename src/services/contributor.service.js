import axios from "axios";


const API_URL = "http://localhost:8090/contributors/";


const ContributorService={
    getContributors: ()=> {
        return axios.get(API_URL);
    },
    getOneContributor: (con)=> {
        return axios.get(API_URL+con);
    },
    getHasContributed: (con)=> {
        return axios.get(API_URL+con+"/hasContributed");
    },

};

export default ContributorService;