console.log("First");
console.log("Second");
console.log("Third");

let setTime = setTimeout(() => {
    console.log("Fourth");
}, 2000);
clearTimeout(setTime);

console.log(setTime);
console.log("Fifth");