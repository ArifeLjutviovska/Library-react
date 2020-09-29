import React from 'react';
import "./contributorList.css";
import Contributor from "../Contributor/contributor";






const ContributorList = (props) => {

    const contributors = props.contributors.map((c, index) => {
        return (
            <div className="contributorlistDemo mx-auto flex flex-wrap">
                <Contributor   contributor={c} key={index}/>
            </div>

        );
    });


    return (
        <div>

            <div className="grs">
                {contributors}
            </div>

        </div>
    )
};

export default ContributorList;