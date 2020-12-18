//mixed messages project from Codecademy

//Function to return a random number to be used as 
function generateRandomNumber (num) {
    return Math.floor(Math.random() * num)
};

//Create an Object
const randomMessage = {
    luckyNumber: generateRandomNumber(5),
    luckyColor: ['aqua', 'indigo', 'blush', 'apricot'],
    action: ['take the dog for a walk', 'phone a friend', 'buy a coffee for a stranger', 'lie under a tree in the park']
};
//Array to hold radomised message elements
let returnMessage = [];

//Iterate over the object
for (let prop in randomMessage) {
    let valueIndex = generateRandomNumber(randomMessage[prop].length)

    switch (prop) {
        case 'luckyNumber': 
            returnMessage.push(`Your lucky number today is ${randomMessage[prop]}.`)
            break
        case 'luckyColor':
            returnMessage.push(`Your lucky color for today is ${randomMessage[prop][valueIndex]}.`)
            break
        case 'action':
            returnMessage.push(`You should ${randomMessage[prop][valueIndex]}.`)
            break
        default:
            returnMessage.push('Today is your luckiest of days.  Anything you do today will be a great success.')       
    }
}

const mixedMessage = returnMessage.join(" ");
console.log (mixedMessage);

