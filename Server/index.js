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
    methods: ['POST', 'GET', "DELETE", "PUT"], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
  }));
 
// Agregar usuario
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


//Obtener todos los usuarios
app.get('/getAllUsers', async (req, res) => {    

        await connect();
        const users = await User.find().select('name email phone address _id').lean();
        await disconnect();

        res.status(201).json(users);
})

//Eliminar Usuario
app.delete('/deleteUser', async (req, res) => {    

    const {_id} = req.body;

    await connect();
    const user = await User.findById(_id)
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }


    await User.findByIdAndDelete(_id);

    await disconnect();

    res.status(201).json({message: 'Usuario eliminado correctamente'});
})


// Actualizar Usuario
app.put('/updateUser', async (req, res) => {    

    const {_id, name, email, phone, address} = req.body;

    await connect();
    const user = await User.findByIdAndUpdate(_id, {name: name, email: email, phone: phone, address: address}, { new: true, runValidators: true } )
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    await disconnect();

    res.status(201).json({message: 'Usuario actualizado correctamente'});
})


 

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});