const express = require('express');
const app = express();
const api = express.Router();
// to handle file system
const fs = require('fs');

app.use(express.json());

// api to get the quizes from the data.json file
api.get('/quiz', function(req,res){
    // fs.readFile reads the data.json file from the path and it has a callback function with error and data to handle
    fs.readFile(__dirname + '/data.json', function(err,data){
        if(err){
            res.status(404).send("Error reading file");
        }
        else{
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
    })
});

// api to validate user name and email
api.post('/check-login', (req,res)=>{
    let fullName = req.body.fullName;
    let password = req.body.password;

    console.log("flow 7 - inside api.post(/check-login)" + " " +fullName + " " + password);
    // __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
    fs.readFile(__dirname + '/user.json',(err,data) =>{
        if(err){
            console.log("flow 8 - file not found");
            console.log(err);
            return;
        }
        else{
            const jsonData = JSON.parse(data);

            const exists = jsonData.some(obj => obj.fullName === fullName && obj.password === password);
            console.log("flow 8 - if data exists? " + exists);

            if (exists) {
                console.log("flow 9 - inside api.js true data exists and matching with user.json");
                res.status(200).send(true);
              } else {
                console.log("flow 9 - inside api.js false data not matching with user.json");
                res.status(404).send(false);
              }
        }

    });
})

// If the require() function is returning an empty object, it could be due to a few reasons. 
//One reason could be that the path specified in the require() function is incorrect. 
//Another reason could be that the module being loaded is not exporting anything
//You mentioned that you have code inside the api.js file but it is returning an empty object. 
//You may want to double-check that the module is exporting something using module.exports. 
//If you are still having trouble, you can try adding a .js extension to the file path in the require() function
module.exports = api;