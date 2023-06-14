process.stdin.setEncoding('utf8');

console.log('Por favor, digite sua entrada: ');
var max
process.stdin.on('data', (input) => {
    console.log(`Você digitou: ${input}`);
    max = parseInt(input)
    // AQUI
    for (let i = 0; i < max; i++) {
        console.log(i)

    }



    //AQUI

    process.stdin.pause();
});
