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
> [!WARNING]
> To be honest, time is precious, and we’ve got bigger fish to fry.
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

# TypeScript Type Inference

TypeScript type inference is a feature that allows the TypeScript compiler to automatically deduce the type of a variable or expression. This means that you do not have to explicitly specify the type of every variable and expression in your code.

For example, consider the following TypeScript code:

```
const x = 10;
const y = x + 2;

console.log(y); // 12
```
In this code, the TypeScript compiler can infer that the type of x is number. This is because x is being assigned a number value. The compiler can also infer that the type of y is number, because y is the result of adding two numbers together.

As a result, the TypeScript compiler does not need to be explicitly told the type of x or y. This can make the code more concise and readable, as it eliminates the need for type annotations.

## How Does TypeScript Type Inference Work?
TypeScript type inference works by using a variety of techniques to deduce the type of a variable or expression. These techniques include:

i. Type checking: The TypeScript compiler checks the types of the expressions that are used to initialize a variable or expression. This can be used to infer the type of the variable or expression.
ii. Type inference rules: TypeScript has a set of rules that can be used to infer the type of a variable or expression. These rules are based on the types of the expressions that are used in the variable or expression.
iii. Type annotations: If you have explicitly annotated the type of a variable or expression, the TypeScript compiler will use that type annotation to infer the type of the variable or expression.

## Benefits of TypeScript Type Inference

TypeScript type inference provides a number of benefits, including:

Conciseness: TypeScript type inference can help to make your code more concise by eliminating the need for type annotations. This can make your code easier to read and write.
Readability: TypeScript type inference can help to make your code more readable by making it clear what the types of your variables and expressions are. This can make it easier to understand your code for both humans and machines.
Type safety: TypeScript type inference can help to prevent errors by ensuring that your code is type-safe. This means that the TypeScript compiler can detect errors at compile time, rather than at runtime.




