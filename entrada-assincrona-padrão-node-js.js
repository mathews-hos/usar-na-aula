process.stdin.setEncoding('utf8');

function prompt() {
    return new Promise((resolve) => {
        process.stdin.once('data', (input) => {
            resolve(input.trim());
        });
    });
}
sair = false
async function main() {

    // digite seu código aqui :D
    // use await prompt() para entrada
    
    console.log(await prompt()) //exemplo

}
main()
