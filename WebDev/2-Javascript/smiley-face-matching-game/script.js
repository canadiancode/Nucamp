// // Main project:

// let round = 0;
// let numberOfFaces = 0;
// let aditionalFaces = null;

// const theLeftSide = document.querySelector('#leftSide');
// const theRightSide = document.querySelector('#rightSide');

// let windowWidth = window.innerWidth;
// let xAxisMax = (windowWidth / 2) - 55;

// function generateFaces() {

//     // clear the smiles
//     document.querySelectorAll('.side').forEach(side => {
//         side.innerHTML = '';
//     })

//     // add 5 more faces
//     numberOfFaces += 5;
//     round++;

//     // add faces
//     for (let i = 0; i < numberOfFaces; i++) {
//         let leftFace = document.createElement('img');
//         leftFace.src = 'img/smile.png';
//         leftFace.classList.add('wrong-face');

//         // for the x axis
//         let pushX = Math.floor(Math.random() * xAxisMax);

//         // for the y axis
//         let pushY = Math.floor(Math.random() * 400);

//         leftFace.style.transform = `translate(${pushX}px, ${pushY}px)`;

//         theLeftSide.appendChild(leftFace);

//         const rightFace = leftFace.cloneNode(true);
//         theRightSide.appendChild(rightFace);

//     }

//     // once all the faces are added, add the extra one:
//     let extraFace = document.createElement('img');
//     extraFace.src = 'img/smile.png';
//     extraFace.classList.add('extra-face');
//     theLeftSide.appendChild(extraFace);

//     // for the x axis
//     let pushX = Math.floor(Math.random() * xAxisMax);

//     // for the y axis
//     let pushY = Math.floor(Math.random() * 400);

//     extraFace.style.transform = `translate(${pushX}px, ${pushY}px)`;
//     extraFace.addEventListener('click', selectedExtraFace);
// }

// function selectedExtraFace() {
//     alert(`You made it through ${round}!`);
//     generateFaces();
// }

// document.addEventListener('click', (event) => {
//     console.log(event.target);
//     // I would add the left side and right side if I wanted to add the event for clicking the background
//     if (event.target.classList.contains('wrong-face')) {
//         alert(`Oh no! You did not select the right face! You made it to round ${round}.`);

//         // clear the smiles
//         document.querySelectorAll('.side').forEach(side => {
//             side.innerHTML = '';
//         })

//         alert('Lets play again!');
//         numberOfFaces = 0;
//         round = 0;
//         generateFaces();
//     }
// });




    // The bonus question:

let round = 0;
let numberOfFaces = 0;
let aditionalFaces = null;

const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');

let windowWidth = window.innerWidth;
let xAxisMax = (windowWidth / 2) - 55;

function generateFaces() {

    aditionalFaces = 0;
    if (round === 0) {
        aditionalFaces = prompt('How many faces would you like to start with?');
    } else {
        aditionalFaces = prompt('How many more faces would you like to add?');
    }

    if (aditionalFaces === '' || aditionalFaces == 0) {
        alert('Please add at least 1 face.');
        setTimeout(regenFaces, 10);
        return;
    } else if (!aditionalFaces) {
        return;
    }

    // clear the smiles (could also loop through the child list)
    document.querySelectorAll('.side').forEach(side => {
        side.innerHTML = '';
    })

    // add x many more faces
    numberOfFaces += +aditionalFaces; // Urnary operator to turn string into number
    round++;

    // add faces
    for (let i = 0; i < numberOfFaces; i++) {
        let leftFace = document.createElement('img');
        leftFace.src = 'img/smile.png';
        leftFace.classList.add('wrong-face');

        // for the x axis
        let pushX = Math.floor(Math.random() * xAxisMax);

        // for the y axis
        let pushY = Math.floor(Math.random() * 400);

        leftFace.style.transform = `translate(${pushX}px, ${pushY}px)`;

        theLeftSide.appendChild(leftFace);

        const rightFace = leftFace.cloneNode(true);
        theRightSide.appendChild(rightFace);

    }

    // once all the faces are added, add the extra one:
    let extraFace = document.createElement('img');
    extraFace.src = 'img/smile.png';
    extraFace.classList.add('extra-face');
    theLeftSide.appendChild(extraFace);

    // for the x axis
    let pushX = Math.floor(Math.random() * xAxisMax);

    // for the y axis
    let pushY = Math.floor(Math.random() * 400);

    extraFace.style.transform = `translate(${pushX}px, ${pushY}px)`;
    extraFace.addEventListener('click', selectedExtraFace);
}

function selectedExtraFace() {
    alert(`You made it through ${round}!`);
    generateFaces();
}

document.addEventListener('click', (event) => {
    // I would add the left side and right side if I wanted to add the event for clicking the background
    if (event.target.classList.contains('wrong-face')) {
        alert(`Oh no, you did not select the right face.\nYou made it to round ${round}.`);

        // clear the smiles
        document.querySelectorAll('.side').forEach(side => {
            side.innerHTML = '';
        })

        alert('Lets play again!');
        numberOfFaces = 0;
        round = 0;
        generateFaces();
    }
});

function regenFaces() {
    generateFaces();
}