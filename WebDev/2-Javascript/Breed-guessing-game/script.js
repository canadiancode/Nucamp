// fetch endpoint:
// https://dog.ceo/api/breeds/image/random/4

let correctValue = null;
let totalQuestions = 0;
let totalCorrect = 0;

async function fetchDogs() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/4');
        const data = await response.json();

        const breedArray = [];
        for (let links of data.message) {
    
            // Get breed name from URL
            const startIndex = links.indexOf("breeds") + "breeds".length + 1;
            const textAfterBreed = links.substring(startIndex); 
            const lowerCaseBreed = textAfterBreed.split("/")[0];
    
            // Format breeds 
            if (lowerCaseBreed.includes('-')) {
                
                // Split the text
                const subBreeds = lowerCaseBreed.split('-');
                
                // Capitalize the first letter
                const capitalizedBreeds = subBreeds.map(breed => breed.charAt(0).toUpperCase() + breed.slice(1));
    
                // Reorder words
                const breed = capitalizedBreeds.reverse().join(' ');
    
                // Push into array
                breedArray.push(breed);
            } else {
    
                // Capitalize the first letter
                const breed = lowerCaseBreed.charAt(0).toUpperCase() + lowerCaseBreed.slice(1);
    
                // Push into array
                breedArray.push(breed);
            }
        }
        // add breed names onto the button
        const BtnOne = document.querySelector('#btn-1');
        const BtnTwo = document.querySelector('#btn-2');
        const BtnThree = document.querySelector('#btn-3');
        const BtnFour = document.querySelector('#btn-4');
        BtnOne.textContent = breedArray[0];
        BtnTwo.textContent = breedArray[1];
        BtnThree.textContent = breedArray[2];
        BtnFour.textContent = breedArray[3];
    
        // correct index
        correctValue = Math.floor(Math.random() * 4);
        document.querySelector('.img').src = data.message[correctValue];
        console.log(correctValue);

    }  catch (error) {
        console.log(error);
    }
}
fetchDogs();

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        totalQuestions++;
        if (correctValue == button.dataset.num) {
            console.log('correct');
            totalCorrect++;
            document.querySelector('.current-score').textContent = totalCorrect;
        } else {
            console.log('sad times.');
        }
        document.querySelector('.current-question').textContent = totalQuestions;

        if (totalQuestions < 10) {
            console.log(totalQuestions);
            fetchDogs();
        } else {
            endGame();
        }
    })
});

const mainContent = document.querySelector('.main-content');
const endGamePage = document.querySelector('.end-game-page');
const congratsText = document.querySelector('.end-score');

function endGame() {
    congratsText.innerHTML = `${totalCorrect}`;

    mainContent.style.display = 'none';
    endGamePage.style.display = 'flex';
}

document.querySelector('#play-again-btn').addEventListener('click', () => {
    correctValue = null;
    totalQuestions = 0;
    totalCorrect = 0;

    document.querySelector('.current-score').textContent = '0';
    document.querySelector('.current-question').textContent = '0';

    mainContent.style.display = 'flex';
    endGamePage.style.display = 'none';

});