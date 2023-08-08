import React from "react";
import CreateReservationForm from "../form/CreateReservationForm";


function BookerRightFormContainer(){
    return(
        <React.Fragment>
            <div className="w-full h-[90%] bg-[#E8ECF6] flex justify-center pt-8">
                <CreateReservationForm/>
            </div>

        </React.Fragment>
    )
}

export default BookerRightFormContainer;