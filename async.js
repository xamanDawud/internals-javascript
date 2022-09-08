function showingResult() {
    console.log("Third");
}

console.log("First");
console.log("Second");
// setTimeout(() => {
//     showingResult();
// }, 1000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
console.log("Fourth");