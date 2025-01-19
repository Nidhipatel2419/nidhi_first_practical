const express = require("express");
const getDB = require("./mysql");
const validateRequest = require("./validateRequest");
const app = express();
app.use(express.json());

// POST user details
app.post("/storeUserDetails", async (req, res) => {
  // Validate request first
  const getValidatedResult = await validateRequest(req);
  if (getValidatedResult.status == false) {
    res.status(400).send(getValidatedResult.message);
  } else {
    let finalResult;

    const query = `INSERT INTO users(firstname,lastname,state,gender,city,password,email,profileimage) values('${req.body.firstname}','${req.body.lastname}','${req.body.state}','${req.body.gender}','${req.body.city}','${req.body.password}','${req.body.email}','${req.body.profileimage}')`;

    const db = getDB();
    db.query(query, (err, result) => {
      if (err) {
        console.log("err", err);
        finalResult = { status: false, message: err };
      }
      console.log("result", result);
      finalResult = { status: true, message: result };
    });
    res.send(finalResult);
  }
});

// GET - to validate userd details
app.get("/validateUserDetails", async (req, res) => {
  let finalResult;
  if (req.body.username && req.body.password) {
    const query = `SELECT * FROM users WHERE username='${req.body.username}' AND password='${req.body.password}'`;

    const getDObj = getDB();
    getDObj.query(query, (err, result) => {
      if (err) {
        console.log("error while validating user", err);
        return { status: err, data: err };
      }
      return { status: true, data: result };
    });
  } else {
    finalResult = {
      status: false,
      message: "Please provide username and password",
    };
    res.status(400).json(finalResult);
  }
});

// GET - to get all userdetails
app.get("/getAllUserDetails", (req, res) => {
  const getDObj = getDB();
  const query = `SELECT * FROM users WHERE userid=${req.body?.userid}`;
  getDObj.query(query, (err, res) => {
    if (err) {
      return{status:true,message:err}
    } else {
      return{state:false,message:res}
    }
  });
});

app.listen(3001, () => {
  console.log("app listening on 3001");
});
