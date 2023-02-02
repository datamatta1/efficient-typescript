// How types can help you spot the errors

interface State {
    name: string,
    capital: string,
}

const states: State[] = [
    { name: "Alabama", capital: "Montgomerry"},
    { name: "Arizona", capital: "Phoenix" }
]; 

// Using this approach, creating interface State, and using it as a type in the states variable, 
// we ensure that not only the state variable has to be an Array, but also that it has to have
// the same properties as interface. We cannot miss the name, or capital.

for (let state of states) {
    console.log(`The capital of ${state.name} is ${state.capital}.`); 
}

// Sometimes we don't have to explicitly return the type due to the inheritance. 
function sum(a: number, b: number) {
    return a + b; 
}

console.log(sum(5,6))
// As we can see, inheritance will place the output for us, but for complicated ones, it's better to have it.
