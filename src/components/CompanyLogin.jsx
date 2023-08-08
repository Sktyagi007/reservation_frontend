import { React, useState } from "react";
import axios from "axios";

function CompanyLogin() {
  const [bName, setBName] = useState("");
  const [bAdd, setBAdd] = useState("");
  const showCompany = async () => {
    let compName = document.getElementById("companyName").value;
    let obj1 = {
      method: "post",
      url: "http://localhost:3000/api/v1",
      data: {
        companyName: compName,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .request(obj1)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Enter company name"
          className="w-fit h-fit mb-4 pt-3 pb-3 pl-8 pr-8 border-2 border-black rounded-md"
          id="companyName"
        />
        <button
          className="pt-1 pb-1 pl-4 pr-4  bg-slate-400 border rounded-sm text-white w-fit h-fit"
          onClick={showCompany}
        >
          Submit
        </button>
        {bName == "" ? <></> : <span>Branch : {bName} </span>}
        {bAdd == "" ? <></> : <span>Address: {bAdd}</span>}
      </div>
    </>
  );
}

export default CompanyLogin;
