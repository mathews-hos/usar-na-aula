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


    // use await getInput() para entrada
    console.log(await prompt()) //exemplo

    main()
}
main()