// import express from 'express';
const express = require("express");
const path = require('path');
// import path from 'path';
const app = express();

app.use('/static',express.static("static"));
app.use(express.urlencoded({extended:true}));

// app.set('view engine', 'ejs');
// app.engine('html',require('ejs').renderFile);
// app.set('views',path.join(__dirname,'views'));

app.get('/', (req,res) => {
    //res.status(200).render('welcome.html');
    // res.status(200).render('./welcome.html');
    res.sendFile(path.join(__dirname,'/views/welcome.html'));
});
app.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
});
app.get('/invitation', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/invitation.html'));
});
app.get('/organizer', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/organizer.html'));
});
app.get('/venue', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/venue.html'));
});

const port = process.env.PORT || 3000 ;
console.log('Before server start');
app.listen(port,() => {
    console.log("Serve at http:localhost:${port}");
});
console.log('After server start');