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
    a = await prompt()
    console.log("digita ae 1")
    console.log(1, await prompt())
    console.log("digita ae 2")
    console.log(2, await prompt())
    // use await getInput() para entrada
    if (a == 4) {
        sair = true
    }


    if (sair == true) {
        process.exit()
    }
    main()
}
main()