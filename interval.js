console.log("First");
console.log("Second");
let count = 0;
let interval = setInterval(() => {
    // console.log(count++);// when it will got 9 it will be stop
    console.log(++count); // it will stop when will be 10
    if (count === 10) {
        clearInterval(interval);
    }
    // clearInterval(interval);
}, 1000);
console.log("Second");