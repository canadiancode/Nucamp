//----------- timeouts and intervals -------------
function sayHello() {
  console.log("hello!");
}

function startTimeout() {
  setTimeout(sayHello, 3000);
  setTimeout(() => {console.log("hello!")}, 3000);
  console.log("Starting timeout!");
}
//what will the order of the logs be when you click the button? why?
//which part of this function is synchronous? which part is asynchronous?
//sayHello() is being used as a callback - explain the call stack
//change the callback to an arrow function instead


//what does this line do? Uncomment to see!
const clock = setInterval(getTime, 1000);

//this is new, but guess what it does!
function getTime() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}
getTime();

//how does this work?
function endInterval() {
  clearInterval(clock);
}
endInterval();


//---------------- Promises ----------------------
function networkRequest() {
  const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      let condition = Math.random() > 0.5;
      console.log(condition);
      if (condition) {
        resolve("Data retrieved successfully!");
      } else {
        reject("Data retrieval failed!");
      }
    }, 2000);
    document.getElementById('result').textContent = "Sending network request....";
  });
  
  fetchData.then((message) => {
    document.getElementById('result').textContent = message;
  }).catch((error) => {
    document.getElementById('result').textContent = error;
  }).finally(() => {
    console.log("request complete");
  });
  
}

//----------- Async / Await --------------------

//local async function call
async function newNetworkRequest() {
  document.getElementById('result').textContent = "Sending network request....";
  
  try {
    const message = await createFetchData();
    document.getElementById('result').textContent = message;
  } catch (error) {
    document.getElementById('result').textContent = error;
  } finally {
    console.log("request complete");
  }
}

function createFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let condition = Math.random() > 0.5;
      console.log(condition);
      if (condition) {
        resolve("Data retrieved successfully!");
      } else {
        reject("Data retrieval failed!");
      }
    }, 2000);
  });
}

//-------------  Fetch API ------------------
const url = 'https://api.thecatapi.com/v1/images/search'; // Cat API endpoint

async function fetchCat() {
    try {
        // let response = what goes here?
        // let data = what goes here?
        console.log(data);
        // displayCat(what goes here?);
    } catch (error) {
        // console.error(what goes here?);
    }
}

function displayCat(imageUrl) {
    const img = //create an image elememnt
    img.src = imageUrl;
    img.width = 500;
    //append the cat to the #cat div
}