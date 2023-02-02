# Chapter 1: Getting to know TypeScript
---
- Typescript neither runs in an interperter (as Python or Ruby) nor compiles down to a lower-level language (as Java and C do).
- It compiles to another high-level language - JavaScript.
- It’s JS that runs, not TS.

## Item 1: Understand the Relationship Between TypeScript and JavaScript
---
- TypeScript is a typed superset of JS.
- It’s a superset of JS in a syntactic sense - so long as your JS program doesn’t have any syntax errors, then it is also a TS program.
- Gentle migration from JS to TS is one of the best features of TS.
- All JS programs are valid TS program but it doesn’t work vice versa.
- The below is a valid TS program

```
function greet(who: string) {
  console.log('Hello', who);
}
```

- But in JS we get the error: 

```
function greet(who: string) {
                  ^
SyntaxError: Unexpected token :
```