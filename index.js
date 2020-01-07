const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(body_parser.json());

app.use(cors())

app.listen(process.env.port || 4000, ()=>{
    console.log("started listening on port 4000!!!")
})

app.get('/',(req,res)=>{
    console.log("GET request");
    res.send({name:'abhi',
});
})

app.get('/profile', (req, res) => {
    console.log("profile request");
    res.send({
        name: 'abhi',
        DOB: '06-10-1995',
        skill: 'node+react',
        learning: 'self'
    })
})

app.get('/employee', (req, res) => {
    console.log("Emploee request");
    res.send({
        employee_name: 'abhi123',
        employee_DOB: '06-10-2055',
        employee_skill: 'node+angular',
        employee_learning: 'youtube'
    })
})

app.post('/add/employee',(req,res)=>{
    res.send({res:"items added"})
})
