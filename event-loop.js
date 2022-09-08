console.log("First");
console.log("Second");
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json)); // it will be show on the end of result
console.log("Third");
console.log("Fourth");