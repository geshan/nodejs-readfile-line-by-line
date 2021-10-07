const nReadlines = require('n-readlines');
const broadbandLines = new nReadlines('broadband.sql');

let line;
let lineNumber = 1;

while (line = broadbandLines.next()) {
    console.log(`Line ${lineNumber} has: ${line.toString('ascii')}`);
    lineNumber++;
}

console.log('end of file.');
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
