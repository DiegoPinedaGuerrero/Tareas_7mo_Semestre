const express = require ('express');
const path = require('path');
const router = express.Router();

router.get('/Principal',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/Principal','/principal.html'));
});

router.get('/Calculadora',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/Calculadora','/Calculadora.html'));
});

router.get('/ComparadorDeNumeros',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/ComparadorDeNumeros','/ComparadorDeNumeros.html'));
});

router.get('/CarritoCompras',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/CarritoCompras','/CarritoCompras.html'));
});

module.exports=router;