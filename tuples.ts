type User= [string,number,number];
const user:User=['sk',19,1];
function displayUserName(userRef:User):string{
return `${userRef[2]}.hi ${userRef[0]},${userRef[1]}`
}
let sentense= displayUserName(user);
console.log(sentense)