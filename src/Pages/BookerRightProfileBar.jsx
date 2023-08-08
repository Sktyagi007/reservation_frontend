import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function BookerRightProfileBar(){
    return(
        <React.Fragment>
            <div className="w-full flex justify-end items-center bg-[#FAFBFC] border border-b-1 border-slate-400 h-[9.9%]">
                <span className="inline-flex items-center justify-center mr-4">
            <AccountCircleIcon className="mr-2"/>
            <span className="mr-2">Admin</span>
            <KeyboardArrowDownIcon/>
            </span>
            </div>
        </React.Fragment>
    )
}

export default BookerRightProfileBar;