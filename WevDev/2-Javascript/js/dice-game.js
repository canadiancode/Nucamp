const num = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function startGame() {

    attempts += 1;

    const guess = prompt(`I am thinking of number in the range of 1 - 100. 
  
  What is the number?`);
    
    // using RegEx to test if there are numbers within the inputted string
    if (/[a-zA-Z]/.test(guess) || guess === '') {
       alert(`You have not entered a number. 
       
       Please enter a number in the 1 - 100 range.`);

    } else if (guess > 100 || guess < 1) {
        alert('Please enter an integer in the 1 - 100 range.');
        
    } else if (guess == num) {
        alert(`You got it! The number was ${num}.
        
        It took you ${attempts} to guess correctly.
        `);

    } else {
        if (guess > num) {
            alert('Your guess is too big!');
        } else if (guess < num) {
            alert('Your guess is too small!');
        }
    }
  };
  