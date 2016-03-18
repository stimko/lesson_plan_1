var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var args = [];

var promptUser = () => {
  rl.question('Enter argument:', (arg) => {
    args.push(arg);
    if (args.length >= 2){
      console.log('Are they equal?', args[0] === args[1]);
      rl.close();
    } else {
      promptUser();
    }
  });
}

promptUser();

