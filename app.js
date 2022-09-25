const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000 || process.env.PORT;

// Setting :)
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

/* From disk */
const data = require('./javascript/data.js');



app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});

app.get('/jobs', (req,res)=>{
    res.render('jobSearch');
});


app.get('/certificate', (req,res)=>{
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const fullDate = date + "/" + month + "/" + year;
    const certData = {
        goodName:"Umang Rathod",
        courseName: "Full stack web development",
        date: fullDate,
    }
    res.render('certificateGenerator', {certData: certData});
});


app.get('/courses', (req,res)=>{
    res.render('courses', {data : data});
});

// app.get('/loan', (req,res)=>{
//     res.render('loanApplication');
// });





app.get('/complaint', (req,res)=>{
    res.render('html/complaint.ejs');
});

app.get('/gov-scheme', (req,res)=>{
    res.render('html/gov-scheme.ejs');
});

app.get('/helpline', (req,res)=>{
    res.render('html/helpline.ejs');
});

app.get('/job2', (req,res)=>{
    res.render('html/job2.ejs');
});

app.get('/login', (req,res)=>{
    res.render('html/login.ejs');
});
app.get('/signup', (req,res)=>{
    res.render('html/login.ejs');
});
app.get('/scholarship', (req,res)=>{
    res.render('html/scholarship.ejs');
});

app.get('/signup', (req,res)=>{
    res.render('html/signup.ejs');
});

app.get('/complaint', (req,res)=>{
    res.render('html/complaint.ejs');
});

app.get('/complaint', (req,res)=>{
    res.render('html/complaint.ejs');
});

app.get('/', (req,res)=>{
    res.render('html/index.ejs');
});


app.get('/loan', (req,res)=>{
    res.render('html/loan.ejs');
});
app.get('/loan2', (req,res)=>{
    res.render('html/loan2.ejs');
});

app.get('/loancalc', (req,res)=>{
    res.render('html/loancalc.ejs');
});
app.get('/profile', (req,res)=>{
    res.render('html/profile.ejs');
});
app.get('/goodies', (req,res)=>{
    res.render('html/goodies.ejs');

});







app.get('/helpline/Complaint-and-investigation-cell', (req,res)=>{
    console.log('asd')
    res.render('helpline/Complaint-and-investigation-cell.ejs');
});
app.get('/helpline/Legal-cell', (req,res)=>{
    res.render('helpline/Legal-cell.ejs');
});

app.get('/helpline/NCW-Cells-all', (req,res)=>{
    res.render('helpline/NCW-Cells-all.ejs');
});
app.get('/helpline/Non-resident-Indian-cell', (req,res)=>{
    res.render('helpline/Non-resident-Indian-cell.ejs');
});
app.get('/helpline/North-East-cell', (req,res)=>{
    res.render('helpline/North-East-cell.ejs');
});
app.get('/helpline/PMR-cell', (req,res)=>{
    res.render('helpline/PMR-cell.ejs');
});
app.get('/job3', (req,res)=>{
    res.render('html/job3.ejs', {data: data.jobs});
});