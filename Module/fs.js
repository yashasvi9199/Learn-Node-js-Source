// importing a core non-global module
const files = require('fs')

// write files synchronously
// Syntax : fs.writeFileSync(<file directory>,<string>,<encoding>)     
// note that if file does not exists, then it will be created but the directory should be present

files.writeFileSync('../fs_files/test.txt', 'Hello, this is my first text file', 'utf8')