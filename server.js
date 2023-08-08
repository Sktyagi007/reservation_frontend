const express = require('express');
const sql = require('mssql');

const bodyParser = require("body-parser");
const cors = require("cors");
let pool = require('./config');
const app = express();

const config = {
  user: 'wis_prod_25may_usr',
  password: 'wis_prod_25may_usr',
  server: '103.208.202.180',
  database: 'WIS_PROD_25MAY',
  options: {
    encrypt: true,
    trustServerCertificate: true,

  }
};



// connection.connect((error)=>{
//     if(error){
//         console.log("Error connecting database",error);
//         return;
//     }
//     console.log("database connected");
// })
// sql.connect(config).then((res)=>{
//   console.log("connected");
// }).catch((err)=>{
//   console.log(err);
// })

// const poolPromise = sql.connect(config).then((res)=>{
//   console.log("connected");
// }).catch((err)=>{
//   console.log(err);
// });


// async function executeQuery(query) {
//   try {
//     const pool = await poolPromise;
//     const result = await pool.request().query(query);
//     return result.recordset;
//   } catch (err) {
//     console.error('Error executing the query:', err);
//     throw err; // Handle the error further up the call stack
//   }
// }

async function connectToDatabase(pool) {
  try {
    // Create a new connection pool
    const connectionString = await pool.connect().then(()=>{
      console.log("connected");
    }).catch((err)=>{
      console.log(err);
    })
    // console.log('Connected to the database.');
    // let query = 'Select * from MstCorporate where corporateId = 87'
    // const result = await pool.request().query(query);
    // console.log(result.recordset);
    // Close the connection pool when done (optional)
    // await pool.close();
    // console.log('Connection pool closed.');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err; // Handle the error further up the call stack
  }
}

// Call the function to establish the connectio
connectToDatabase(pool)
  .catch((err) => {
    // Handle any error that occurred during connection
    console.error('Error establishing connection:', err);
});


exports.dataController = async (req,res)=>{
  // // console.log(pool)
    const q1 = {
        companyName: req.body.companyName
    }
    console.log(q1);

    let q2 = `Select * from MstCorporate where Company=${q1.companyName}`;
    
    const result2 = await pool.request().query(q2);
    console.log(result2);
    const companyAddress = result2.recordset[0].Address;
    let q3 = `Select * from MstBranch where BranchID=${result2.recordset[0].BranchID}`;
    const result3 = await pool.request().query(q3);
    const companyBranch = result3.recordset[0].BranchName;

//   let query = 'Select * from MstCorporate where corporateId = 87'
//   const result = await pool.request().query(query);
//   // const result = await executeQuery(query);
  // const branch = result.recordset[0].BranchID;
  // // let query1 = `Select * from MstBranch where BranchId = ${branch}`
  // // const result1 = await poolPromise.request().query(query1);
  // let query = 'Select * from MstCorporate where corporateId = 87'

//   console.log(result);

      
  // // console.log(result.recordset[0].BranchID);
  // console.log(branch);
  res.status(200).json({
      companyAdd:companyAddress,
      companyBranch:companyBranch
  })
}

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1",this.dataController);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// module.exports = pool;