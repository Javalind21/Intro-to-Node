const fs = require('fs');

// files will be an array of filenames, like ['bash.js', 'pwd.js']
//  fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       process.stdout.write(files.join('\n'));
//       process.stdout.write('prompt > ');
//     }
//   });

  // Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
module.export = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newLine
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err;
        } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('\nprompt > ');
    }
  });
  
  process.stdout.write('\nprompt > ');
});