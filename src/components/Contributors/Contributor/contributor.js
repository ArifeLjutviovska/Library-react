import React,{Component} from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contributor.css";



class Contributor extends Component{
    render() {
        return(


            <div className="m-w">
                <div className="contributor crd">

                    <h2 class="text-xl text-gray-800 font-medium mr-auto txt">
                        <Link to={"/contributors/"+this.props.contributor.name} >{this.props.contributor.name}</Link>
                    </h2>
                </div>
            </div>


        )
    }
}



export default Contributor;

