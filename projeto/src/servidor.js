const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

const db = require('./bancoDeDados');
const { excluirProduto } = require('./bancoDeDados');


app.get('/produtos',(req,res)=>{
    res.send(db.getProdutos());
});

app.get('/produtos/:id',(req,res)=>{
    res.send(db.getProduto(req.params.id))
});

app.post('/produtos',(req,res)=>{
    const produto = db.salvarProduto({
        nome : req.body.nome,
        preco : req.body.preco
    });
    res.send(produto);
});

app.put('/produtos/:id',(req,res)=>{
    const produto = db.salvarProduto({
        id : req.params.id,
        nome : req.body.nome,
        preco : req.body.preco
    });
    res.send(produto);
});

app.delete('/produtos/:id',(req,res)=>{
    const produto = excluirProduto(req.params.id);
    res.send(produto);
});

app.listen(porta,()=>{
    console.log(`Servidor está executando na porta ${porta}`);
})