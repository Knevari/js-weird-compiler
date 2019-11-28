const fs = require('fs');
const path = require('path');
const compile = require('./compiler');

const filepath = path.join(__dirname, 'code.js');
const code = fs.readFileSync(filepath, 'utf-8');

fs.writeFileSync('output.js', compile(code), 'utf-8');
