function test() {
    console.log('testDone!');
}
test();

//------------------------------------//

function printMyName() {
    console.log('Makson');

    return "6 letters";
}
let numberOfLetters = printMyName();
// '6 letters'

//------------------------------------//

function getSum(a, b, c) {
    const sum = a + b + c;
    return sum;
}
const result = getSum(10, 20, 30);
console.log(result);
//--and/or--
console.log(getSum(20, 30, 40));

//-------------------------------------//

function getGreatingMessage(userName, companyName) {
    const message = "Hello, " + userName + "! Welcome to " + companyName;
    return message;
}
const greatMessage = getGreatingMessage('Makson', 'IT-company');
console.log(greatMessage)

//------------------------------------//