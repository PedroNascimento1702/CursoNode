const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require('axios');

const MulherChinesa = f => f.pais === "China" && f.genero === "F";
const MenorSalario = (func,funcAtual) => func.salario > funcAtual.salario ? funcAtual : func;

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios.filter(MulherChinesa).reduce(MenorSalario));
});