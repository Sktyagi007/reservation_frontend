import React from "react";
import { FormControl, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Select, MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import $ from 'jquery'

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import axios from "axios";

function CreateReservationForm() {
  const [corporateData, setCorporateData] = useState([]);
  const [cities, setCities] = useState([]);



  useEffect(() => {
    const requestData = {
      companyName: "deutsche",
      bookerName: "Vinod",
    };

    axios.post("http://localhost:3000/api/v1/allData", requestData)
      .then((response) => {
        // console.log(response.data);
        setCorporateData(response.data.entityArray);
        setCities(response.data.branchArray)
         
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },[]);
  console.log(corporateData);
  console.log(cities);

  const set = new Set(cities);
  
  const Corporates = corporateData;
  const Cities = [...set];
  

  return (
    <React.Fragment>
      <div className="w-[80%] h-fit border border-slate-300 bg-white  rounded-lg">
        <div className="w-full h-fit p-2 flex items-center justify-evenly">
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Company Name</span>
            <FormControl className="w-full">
              <Select className="h-[2.5rem]"value={"avc"}>
                {Corporates.map((ele) => (
                  <MenuItem key={ele}>{ele}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Branch Name</span>
            <FormControl className="w-full">
              <Select className="h-[2.5rem]">
                {Cities.map((ele) => (
                  <MenuItem key={ele}>{ele}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="w-full h-fit p-2 flex items-center justify-evenly">
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Date</span>
            {/* <DatePicker
              renderInput={(params) => <TextField {...params} />}
              label="Date"
              value={null} // Set the selected date value here using state if needed
            /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker slotProps={{ textField: { size: "small" } }} />
            </LocalizationProvider>
          </div>
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Reporting Time</span>
            {/* <TimePicker
              renderInput={(params) => <TextField {...params} />}
              label="Time"
              value={null} // Set the selected time value here using state if needed
            /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateReservationForm;
