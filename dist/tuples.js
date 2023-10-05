"use strict";
const user = ['sk', 19, 1];
function displayUserName(userRef) {
    return `${userRef[2]}.hi ${userRef[0]},${userRef[1]}`;
}
let sentense = displayUserName(user);
console.log(sentense);
