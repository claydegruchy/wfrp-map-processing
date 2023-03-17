import fs from 'fs';
import { Command } from 'commander';
const program = new Command();


console.log("start");

program
    .option('-i, --in <char>');

program.parse();

const options = program.opts();


program.on('option:i', function (inputFile) {
    console.log("ok");
    // Somehow pass these args to the funApp-add.js as args?!

    //   console.log(fileData.length, inputFile);

})

console.log(options.in);

const fileData = JSON.parse(fs.readFileSync(options.in, 'utf8'))

const { fullTextAnnotation } = fileData.responses[0]

console.log(fullTextAnnotation.text);

let result = fullTextAnnotation.text.split('\n')
    .filter(str => str.match(/[0-9]/gi))
    .filter(str => str.match(/[a-zA-Z]/gi))
    .map(str => str.replace('(', ''))
    .map(str => str.replace(')', ''))
    .filter(str => str[0].match(/[0-9]/gi))
    .map(str => str.split(' '))
    .map(([a, ...rest]) => [a, rest.join(' ')])



let chart = []
const nos = result.map(([no]) => parseInt(no))



chart = Array.from({ length: Math.max(...nos) + 1 }).fill(null)


for (const [no, name] of result) {
    chart[no] = name
}

console.log(JSON.stringify(chart));


