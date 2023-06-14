// process.stdin.setEncoding('utf8');

// console.log('Por favor, digite sua entrada: ');
// var max
// process.stdin.once('data', (input) => {
//     console.log(`Você digitou: ${input}`);
//     max = input
//     abe(max)
//     process.stdin.pause
// });
// function abe(max) {
//     for (let i = 0; i <= max; i++) {
//         console.log(i)

//     }

// }
process.stdin.setEncoding('utf8');

function getInput() {
    return new Promise((resolve) => {
        process.stdin.once('data', (input) => {
            resolve(input.trim());
        });
    });
}

async function main() {
    // use await getInput() para entrada



}
main()
