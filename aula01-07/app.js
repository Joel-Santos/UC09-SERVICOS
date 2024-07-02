const express = require('express');
const app = new express();
require('dotenv').config();
const port = process.env.PORT;
const sequelize = require('./config/database');
const User = require('./models/User');
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello World');
});

User.sync();
sequelize.sync()
.then(()=>{
    console.log('Database e Tabelas criadas');
})
.catch((err)=>{
    console.log('Não foi possivel conectar ao banco de dados');
})

app.post('/cadastro', async (req, res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({error: err.message})
    }
})



app.listen(port, () =>{
    console.log(`aplicação rodando em http://${process.env.DB_HOST}:${port}`)
});
