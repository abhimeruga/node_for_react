const express = require('express')

const app = express()

const router = express.Router();


app.get('/profile', (req, res) => {
    res.send({
        name: 'abhi',
        DOB: '06-10-1995',
        skill: 'node+react',
        learning: 'self'
    })
})

app.get('/employee', (req, res) => {
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

