const express = require('express');
const expressMongoDb = require('express-mongo-db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(expressMongoDb('mongodb://localhost/troc'));
app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    req.db.collection('usuarios').find().toArray(function(erro,dados){
        if(erro){
            res.status(500).send('Um erro ocorreu!');
            return;
        }else{
            console.log(dados);
            
            res.send(dados);
        }
    });
});

