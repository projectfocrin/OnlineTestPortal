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
    let fullNaame = req.body.fullNaame;
    let password = req.body.password;

    console.log(fullNaame + " " + password);

    fs.readFile(__dirname + '/user.json',(err,data) =>{
        if(err){
            return;
        }
        else{
            const jsonData = JSON.parse(data);

            const exists = jsonData.some(obj => obj.fullName === fullName && obj.password === password);
            console.log(exists);

            if (exists) {
                res.status(200).send(true);
              } else {
                res.status(404).send(false);
              }
        }

    });
})