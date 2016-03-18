var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arguments = [];

var promptUser = () => {
  rl.question('Enter argument:', (arg) => {
    arguments.push(arg);
    
    if (arguments.length >= 2){
      var arg1asInt = arguments[0];
      var arg2asInt = arguments[1];
      var arg1isMulptipleOf7 = arg1asInt % 7 === 0;
      var arg2isMulptipleOf7 = arg2asInt % 7 === 0;

      console.log('Are they multiple of 7?', arg1isMulptipleOf7 && arg2isMulptipleOf7);
      rl.close();
    } else {
      promptUser();
    }
  });
}

promptUser();

