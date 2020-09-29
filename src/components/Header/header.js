import {Link} from "react-router-dom";
import React from "react";
import FormSearch from "../FormSearch/FormSearch";
import "./header.css";

const Header=(props)=>{
return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
            Library
        </Link>
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/books"} className="nav-link">
                    Books
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/authors"} className="nav-link">
                    Authors
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/contributors"} className="nav-link">
                    Contributors
                </Link>
            </li>







            </div>



           <div>
                <FormSearch className="nav-item"  onSearch={props.onSearch}/>

            </div>


    </nav>
);
};

export default Header;

