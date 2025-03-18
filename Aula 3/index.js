const express = require('express')
const userService = require ('./userservice')

const app = express() //nome pro express, pode ser qualquer coisa
app.use(express.json()) //ativa o json no express


//rota para usuario ser criado
app.post("/users", (req, res) =>{
    const {nome, email, senha, endereço, telefone, cpf} = req.body //passa um arquivo via json para os parâmetros
     if(!nome || !email || !senha || !endereço || !telefone || !cpf){ 
        return res.status(400).json ({error: "Os campos são obrigatórios"}) 
     }
     const user = userService.addUser(nome, email, senha, endereço, telefone, cpf)
     res.status(200).json({user})
})

//rota pra listar todos os usuarios
app.get("/users", (req, res)=>{
    res.json(userService.getUsers())
})

const port = 3000
app.listen (port, () =>{
    console.log("O servidor está rodando na porta: ", port)
})