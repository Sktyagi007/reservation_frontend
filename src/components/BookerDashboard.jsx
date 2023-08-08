import React from "react";
import BookerLeftCompanyName from "../Pages/BookerLeftCompanyName";
import BookerLeftTaskPanel from "../Pages/BookerLeftTaskPanel";
import BookerRightProfileBar from "../Pages/BookerRightProfileBar";
import BookerRightFormContainer from "../Pages/BookerRightFormContainer";


function BookerDashBoard(){
    return(
        <React.Fragment>
            <div className="w-screen flex">
                <div className="w-[20%] h-screen">
                    <BookerLeftCompanyName/>
                    <BookerLeftTaskPanel/>
                </div>
                <div className="w-[80%]">
                    <BookerRightProfileBar/>
                    <BookerRightFormContainer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BookerDashBoard;