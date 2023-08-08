import React from "react";
import ManageReservationPanel from "../Panels/ManageReservationPanel";


function BookerLeftTaskPanel(){
    return(
        <React.Fragment>
            <div className="w-full h-[90%] bg-[#4A5863]">
                <ManageReservationPanel/>
            </div>
        </React.Fragment>
    )
}

export default BookerLeftTaskPanel;