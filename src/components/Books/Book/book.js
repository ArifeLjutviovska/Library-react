import React,{Component} from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./books.css";



class Book extends Component{
    render() {
        return(


            <div className="m-w">
                <div className="book crd">

                <h2 class="text-xl text-gray-800 font-medium mr-auto txt">
                           <Link to={"/books/"+this.props.book.name} >{this.props.book.title}</Link>
                        </h2>
                    <div className="at-cl">
                        <h6 className="cr">{this.props.book.creators}</h6><h6 className="con">{this.props.book.contributors}</h6>
                    </div>
                    </div>
            </div>
    

        )
    } 
}



export default Book;

