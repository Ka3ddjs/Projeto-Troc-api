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


			app.controller('loginController', ($scope) =>{
				

				$scope.entrar = (login, senha) => {
					if(login == "raphaml" && senha == "123"){
						open('perfil.html', '_self');
					}else{
						alert('E-mail e ou senhas incorretos')

					}
				}
            });
            
            	app.controller('loginController', function($scope){
				let usuariosCadastrados = [
				  {
					  login: 'admin',
					  senha: '123'
				  }];
				
				  let entrou = false;

				  $scope.entrar = (login, senha) =>{
					for(let usuario of usuariosCadastrados){
					   if(login == usuario.login && senha == usuario.senha){
							open('perfil.html', '_self');
							entrou = true;
					   } else if(entrou == false){
							alert('E-mail e ou senhas incorretos');
					   }
					}
				  }
			    });