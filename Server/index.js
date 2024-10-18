const express = require('express');
const app = express();
const morgan=require('morgan');
const { connected } = require('process');
const { connect, disconnect } = require('./database/db');
const  User  = require('./database/Schema/User');
const cors = require('cors');
 

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Permitir solo este origen
    methods: ['POST', 'GET', "DELETE"], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
  }));
 
// Agregar user
app.post('/addUser', async (req, res) => {    
        const {name, email, phone, address} = req.body;


        await connect();
        const newUser = await new User({
            name,
            email,
            phone,
            address
        })

        await newUser.save()
        
        await disconnect();

        res.status(201).json({ message: 'Usuario agregado exitosamente' });
})

app.get('/addUser', async (req, res) => {    

        await connect();
        const newUser = await new User({
            name,
            email,
            phone,
            address
        })

        await newUser.save()
        
        await disconnect();

        res.status(201).json({ message: 'Usuario agregado exitosamente' });
})
 

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});