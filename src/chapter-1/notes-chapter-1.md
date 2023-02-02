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

- TypeScript provides the value and it is able to spot the problem in the syntax.
- One of the goals of TS is to spot the code that will throw an exception at runtime, without having to run the code. This refers to when we hear tha TS is described as a static type system.
- While TS can catch errors even if you don’t provide type annotations, it’s able to do a much more thorough job if you do.
- Type annotations tell TS what your *intent* is, and this lets it spot places where your code’s behavior doesn’t match your intent.
- The guiding principle of TS type system is that it should model JS runtime behaviour. TS considers it more likely that the off usage is the result of an error than the developers intent.
- UNCAUGHT ERRORS ALSO FREQUENTLY COME UP WHEN YOU USE THE ANY TYPE!!!!!

## Item 2: Know which TypeScript Options You’re Using.
---
- Without knowing which options you’re using, it’s impossible to say. TS compiler has an enormous set of rules.
- configuration can be set thru config file, *tsconfig.json*
  - *any* is a useful tool but it has to be used with caution.
- The implicit any option can be fxed with explicitly writing type declarations, either *: any* or more specific type.
- TypeScript is most helpful language when it has type information, so you should be sure to set *noImplicitAny* whenever possible.
- *strictNullChecks*controls whether null and undefined are permissable values in every type.
- If you mean to allow *null*, you can fix the error by making your intent explicit:
```
const x: number | null = null;
```
- If you do not wish to permit null, you’ll need to track down where it came from and add either a check or an assertion:
```
const el = document.getElementById('status');
   el.textContent = 'Ready';
// ~~ Object is possibly 'null'

   if (el) {
     el.textContent = 'Ready';  // OK, null has been excluded
   }
   el!.textContent = 'Ready';  // OK, we've asserted that el is non-null”
```
- *strictNullChecks* is tremendously helpful for catching errors involving null and undefined values, but it does increase the difficulty of using the language. 

## Item 3: Understand THat Code Generation is Independent of Types
- at a high level, `tsc` compiler does two things: 
  - Converts next gen TS/JS to an older version of JS that works in browsers ("transpiling")
  - Checks code for type errors.
- Those two behaviors are entirely independent of one another. 
- Types can't affect the way code runs. 
- In `chapter-1/unit-3.ts` we can see that the code with type erros can still produce output. 
- Think of the TS errors as being similar to warnings in those languages.
- It is likely they indicate an issue worth investigating. 
- As long as TS code is valid JS, TS will still produce output. 
- If you want to disable output on errors, use `noEmitOnError` in `tsconfig.json`.
---
### Example 2 - `chapter-1/unit-3.ts`

- the `instanceof` check is happening at a runtime. 
- Rectangle is a type and it doesn't affect the behavior of the code. 
- Part of compilation to JS is removing all the interfaces, types and type annotations from the code. 
- This means that the TypeScript types are erasable. 
---
- After we revisited `calculateArea` and created `calculateArea2`, we can see that it works, because the property check only involves values available at the runtime.
- It still allows the type checker to refine shape's type to `Rectangle`.
---
- Another way to solve this problem is to introduce a `tag` to explicitly store the type in a way that's available at runtime.
- In the `calculateArea2` case, `Shape2` type is an example of a "tagged union". 
- Tagged unions are ubiquitous in TS. 
---
- Some constructs introduce both a *type* and a *value*. The `class` is one of these. Making `Square` and `Rectangle` classes would be another way to fix the error: 
- This works because `class Rectangle3` introduces both a type and a value, whereas `interface` only introduced a type. 
- The `Rectangle3` type in `type Shape3 = Square3 | Rectangle3` refers to the `type`, but the `Rectangle3` in `shape instance of Rectangle3` refers to the value.
- This is important distinction to understand but quite subtle. 
---

### Example 3 - `chapter-1/unit-3.ts`

-


