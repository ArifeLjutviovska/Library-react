import React from 'react';
import "./searchMenu.css";

const SearchMenu = (props) => {


    const onSearchByBookName = (e)=>{
        e.preventDefault();
        props.onSearchByBookName(e.target["onSearchByBookName"].value);
    };
    const onSearchByAuthorName = (e)=>{
        e.preventDefault();
        props.onSearchByAuthorName(e.target["onSearchByAuthorName"].value);
    };
    const onSearchByContributorName = (e)=>{
        e.preventDefault();
        props.onSearchByContributorName(e.target["onSearchByContributorName"].value);
    };
    const onSearchByYear = (e)=>{
        e.preventDefault();
        props.onSearchByYear(e.target["onSearchByYear"].value);
    };
    const orderByOldest = ()=>{
        props.orderByOldest();
    };
    const orderByLatest = ()=>{
        props.orderByLatest();
    };

    return (
        <div className="bg-col-cl">
        <div className="nav-search-cl">
        <form  onSubmit={onSearchByBookName} className="form-inline form-cl">
            <input className="txtbox" name={"onSearchByBookName"} type="text" placeholder="Search Book By Name" aria-label="Search"/>
            <button className="btn btn-outline-success btn-box-cl" type="submit">Search</button>
        </form>
            <form  onSubmit={onSearchByAuthorName} className="form-inline form-cl">
                <input className="txtbox" name={"onSearchByAuthorName"} type="text" placeholder="Search Book By Author Name" aria-label="Search"/>
                <button className="btn btn-outline-success btn-box-cl" type="submit">Search</button>
            </form>
            <form  onSubmit={onSearchByContributorName}   className="form-inline form-cl">
                <input className="txtbox" name={"onSearchByContributorName"} type="text" placeholder="Search Book By Contributor Name" aria-label="Search"/>
                <button className="btn btn-outline-success btn-box-cl" type="submit">Search</button>
            </form>
            <div className="small-search-cl">
            <form onSubmit={onSearchByYear} className="form-inline frmSearch">
                <input className="form-control mr-sm-2" name={"onSearchByYear"} type="text" placeholder="Search Book By Year" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="srp">
                <div className="dropdown drpDown">
                    <button className="dropbtn">Order By</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={orderByOldest}>Oldest</a>
                        <a href="#" onClick={orderByLatest}>Latest</a>
                    </div>
                </div>

            </div>
            </div>

        </div>
        </div>
    )
};

export default SearchMenu;
