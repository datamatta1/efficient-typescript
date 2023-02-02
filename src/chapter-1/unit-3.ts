// Example 1

let x = "hello"; 
x = 1234; 

// let x: string
// Type 'number' is not assignable to type 'string'.ts(2322)

// Example 2

interface Square {
    width: number; 
}

interface Rectangle extends Square {
    height: number; 
}

type Shape = Square | Rectangle; 

function calculateArea(shape: Shape) {
    if(shape instanceof Rectangle) {
        // TSerror: 'Rectangle' only refers to a type, but is being used as a value here.ts(2693)
        return shape.width * shape.height;
        // TSerror: Property 'height' does not exist on type 'Shape'. Property 'height' does not exist on type 'Square'.
    } else {
        return shape.width * shape.width;
    } 
}

// Reconstructing it's type in at the runtime
function calculateArea2(shape: Shape) {
    if('height' in shape) {
        // Type is Rectangle
        return shape.width * shape.height;
    } else {
        // Type is Square
        return shape.width * shape.width;
    }
} 

// Introducing tag 

interface Square2 {
    kind: "square";
    width: number; 
}

interface Rectangle2 {
    kind: "rectangle";
    height: number; 
    width: number; 
}

type Shape2 = Square2 | Rectangle2

function calculateArea3(shape: Shape2) {
    if(shape.kind === "rectangle") {
        shape; // Type is Rectangle
        return shape.width * shape.height 
    } else {
        shape; // Type is Square
        return shape.width * shape.width
    }
}

class Square3 {
    constructor(public width: number) {}
}

class Rectangle3 extends Square3 {
    constructor(public width: number, public height: number) {
        super(width);
    }
}

type Shape3 = Square3 | Rectangle3; 

function calculateArea4(shape: Shape3) {
    if (shape instanceof Rectangle3) {
        shape; // Type is Rectangle
        return shape.width * shape.height
    } else {
        shape; // Type is Square
        return shape.width * shape.width;
    }
} 


