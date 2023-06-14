const readlineSync = require('readline-sync');

const name = readlineSync.question('Qual é o seu nome? ');
console.log(`Olá, ${name}!`);