'use stict'

// To display the secert Number
let secretNumer = Math.trunc(Math.random() * 20 + 1);

//To display the score
let score = 20;
let highScore = 0;

//To display the message - same function we can create for number and score class.
const displaymessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// event will start when we start the game
document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value);

        // when there is no input
        if (!guess) {
            // this line is repeated in whole code so we store this in function and set the value using function to not to repate same code.
            //document.querySelector('.message').textContent = "🎃🎃 Not a Number";
            displaymessage("🎃🎃 Not a Number")
        }
        // when guess is too high   
        // else if (guess > secretNumer) {
        //     if (score > 1) {
        //         document.querySelector('.message').innerHTML = "📈HIGH Number";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = "🤦‍♀️🤦‍♀️🤦‍♀️Lost the Game";
        //         document.querySelector('.score').textContent = 0;
        //     }
        //     // when guess is too low   
        // } else if (guess < secretNumer) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = "📉LOW Number";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = "🤦‍♀️🤦‍♀️🤦‍♀️Lost the Game";
        //         document.querySelector('.score').textContent = 0;
        //     }

        // refactoring the code - DRY principle - instead of writing above we can accomdiate with below code
        // when guess is not correct
        else if (guess != secretNumer) {
            if (score > 1) {
                // Tenery operator
                document.querySelector('.message').textContent = guess > secretNumer ? "📈HIGH Number" : '📉LOW Number';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                //document.querySelector('.message').textContent = "🤦‍♀️🤦‍♀️🤦‍♀️Lost the Game";
                displaymessage("🤦‍♀️🤦‍♀️🤦‍♀️Lost the Game")
                document.querySelector('.score').textContent = 0;
            }
            // when guess is correct
        } else if (guess === secretNumer) {
            //document.querySelector('.message').textContent = "🎉🎉correct number";
            displaymessage("🎉🎉correct number");
            document.querySelector('.number').textContent = secretNumer;

            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.number').style.width = "30rem";
            // To set high score
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }


        }
    })
    // Reset the game when we click on again button
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumer = Math.trunc(Math.random() * 20 + 1);
    //document.querySelector('.message').textContent = 'Start guessing....';
    displaymessage('Start guessing....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})