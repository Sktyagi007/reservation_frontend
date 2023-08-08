import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestData = {
        companyName: "Microsoft",
        bookerName: "Vinod",
      };
  
      axios.post("http://localhost:3000/api/v1/allData", requestData)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  
  }, []); // Empty dependency array ensures the effect runs only on mount

  return (
    <div>
      <h1>Data Display</h1>
      
    </div>
  );
};

export default DataDisplay;
