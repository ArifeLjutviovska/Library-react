import React from 'react';
import "./pagination.css";

function Pagination(props) {

    const pageNumbers=[];
    for (let i=1;i<=Math.ceil(props.totalBooks/props.booksPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <div className="center">
        <nav className="cl-pag">
            <ul className="pagination cl-pag" >
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>props.paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}

            </ul>

        </nav>
        </div>
    );
}

export default Pagination;