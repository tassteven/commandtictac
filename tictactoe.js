var prompt = require('prompt');

console.log(
	'---------WELCOME TO TIC TAC TOE-----------' + '\n' 
);
prompt.start();
 
  // Get two properties from the user: username and email
  //
  prompt.get('start', function (err, result) {
    //
    // Log the results.
    //
    if (result.start === 'yes') {
      console.log('Starting Game!');
      console.log(`
        --BOARD--

        1 | 2 | 3
        ---------
        4 | 5 | 6
        ---------
        7 | 8 | 9
        `
      );
      // prompt.get('player X', function(err, result) {
      //   console.log('Input coordinate')
      // })
    } else {
      console.log('not ready?');
    }
    
  });