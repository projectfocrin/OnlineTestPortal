# OnlineTestPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# To implement angular bootstrap:
- `ng add ngx-bootstrap` for angular bootstrap 
- add `NgbModule` in app.module.ts folder
- `import { NO_ERRORS_SCHEMA } from '@angular/core';` and `schemas: [NO_ERRORS_SCHEMA],` in mgModule for ngx-bootstrap to work without errors


- npm i --save express 
- ng build to build the project 
- node server.js runs the node server



const express = require('express');


const app = express();


const path = require('path');
 
const bodyParser = require('body-parser');

const api = require('./servers/routes/api');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',api);


app.use(express.static(path.join(__dirname, 'dist/online-test-app')))

app.get('*', function(req,res){
   res.sendFile(path.join(__dirname,'dist/online-test-app/index.html'));
});


const port = process.env.PORT || 5000;


app.listen(port, console.log(`Server started on port ${port}`));


