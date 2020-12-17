//mixed messages project from Codecademy

//Function to return a random number to be used as 
function generateRandomNumber (num) {
    return Math.floor(Math.random) * num
};

//Create an Object
const randomMessage = {
    luckyNumber() {generateRandomNumber(5);
    },
    luckyColor: ['aqua', 'indigo', 'blush', 'apricot'],
    action: ['take the dog for a walk', 'phone a friend', 'buy a coffee for a stranger', 'lie under a tree in the park']
};
//Array to hold radomised message elements
let personalMessage = [];

//Iterate over the object
for (let prop in messageOfTheDay) {
    let valueIndex = generateRandomNumber(randomMessage[prop].length)

    switch (prop) {
        case 'luckyNumber':
    }
}