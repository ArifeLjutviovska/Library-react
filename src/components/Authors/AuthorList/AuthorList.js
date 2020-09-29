import React from 'react';
import "./authorList.css";
import Author from "../Author/author";




const AuthorList = (props) => {

    const authors = props.authors.map((a, index) => {
        return (
            <div className="authorlistDemo mx-auto flex flex-wrap">
                <Author   author={a} key={index}/>
            </div>

        );
    });


    return (
        <div>

            <div className="grs">
                {authors}
            </div>

        </div>
    )
};

export default AuthorList;