import React,{Component} from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./author.css";



class Author extends Component{
    render() {
        return(


            <div className="m-w">
                <div className="author crd">

                    <h2 class="text-xl text-gray-800 font-medium mr-auto txt">
                        <Link to={"/authors/"+this.props.author.name} className="txt">{this.props.author.name}</Link>
                    </h2>
                </div>
            </div>


        )
    }
}



export default Author;

