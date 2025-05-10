## L2-Assignment-1 
# interfaces and types in TypeScript

### Interfaces vs Types is huge debate in Typescript

Both types and interfaces allows developers to create reusable structures for variables, function parameters, return types, and more.

So then.. why should you always use Types rather than interface?

You should use types by default until you need a specific feature, like ‘extends’.
When you’re working with objects that inherit from each other, use interfaces. extends makes TypeScript's type checker run slightly faster than using &. Learn more about this from Matt pocock

Types allows the creation of union types. which means that it lets you define types that can hold multiple primitive types or objects within a single definition. whereas, this isn’t possible with Interfaces, as you can only define objects using interfaces.
An example of what you just read:

```
✅ type ID = string | number;

// this will cause an error!
❌ interface ID = string | number
```

Types allows the creation of string literal types, specifying exact string values that variables or parameters can hold. whereas interfaces on the other hand cannot

```
✅ type Status = "pending" | "in-progress" | "completed"

// this will cause an error!
❌ interface ID = "pending" | "in-progress" | "completed"

/**
 * 🤔 why can't I just add it to the interface object?  
 * Well.. it works, but it doesn't have enough flexibility just as types.
 */

```

Types are Immutable, with interfaces, you can merge multiple declarations of the same name. this isn’t the case for types. you can simply think of it as using the ‘const’ keyword to declare a variable in Javascript.
⚠ To be honest, time is precious, and we’ve got bigger fish to fry.
So, we use typescript because we want to catch errors during development, trust me, you don’t want to unknowingly mutate a variable whilst you’re codin’.

```
// Let's re-assign the types/interfaces.
✅ interface User {
    email: sting;
  }

✅ interface User {
    password: string;
  }

/**
* In interfaces, same name merges the values, so... should work!
* At the end, we get this gigantic interface.
*/

interface User {
  email: string;
  password: string;
}

// We get an eror when we try to do the same using Types

✅ type User = {
    email: string;
  }

❌ type User = {
    email: string;
  }
```
Types allow the creation of conditional types, enabling the selection of types based on conditions

```
type Check<T> = T extends string ? string : number;

let result1: Check<string>; // result1 is of type string
let result2: Check<number>; // result2 is of type number
```
