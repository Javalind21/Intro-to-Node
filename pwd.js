const { cwd } = require('node:process');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
module.export = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newLine
    console.log(`${cwd()}`);
    process.stdout.write('prompt > ');
});