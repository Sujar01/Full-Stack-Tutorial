// A. Simple greeting
function greet(name) {
    return "Hello " + name;
}

// Example 1: Function Call (using the original function)
console.log(greet("Sujar"));

// Example 2: Arrow Function with console.log
// Note: Changed the variable name to greetArrow to avoid re-declaration errors.
let greetArrow = (name) => {
    console.log("Hello " + name);
};

// Example 3: Array Iteration using anonymous function
let movies = ["Kantara", "Spirited Away"];

movies.forEach(function(movie) {
    console.log("Movie: " + movie);
});
