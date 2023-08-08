import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function ManageReservationPanel(){
    const[toggle,setToggle] = useState(false);

    const handleToggle = ()=>{
        setToggle(!toggle);
    } 
    return(
        <React.Fragment>
            <div>
            <div className="w-full h-fit flex justify-between items-center p-2  border-b border-white hover:bg-[#68D3DC]" onClick={handleToggle}>
                <span className="text-white">Manage Reservation</span>
                {!toggle?<KeyboardArrowDownIcon className="text-white"/>:<KeyboardArrowUpIcon className="text-white"/>}
                
            </div>
            {toggle?<div className="w-full h-fit bg-[#39434C]">
                <div className="w-full h-fit border-b border-black flex justify-center items-center p-1">
                    <span className="text-slate-300 hover:text-white">Create Reservation</span>
                </div>
                <div className="w-full h-fit border-b border-black flex justify-center items-center p-1">
                    <span className="text-slate-300 hover:text-white">View Reservation</span>
                </div>
             
            </div>:<></>}
            
            </div>
        </React.Fragment>
    )
}

export default ManageReservationPanel;