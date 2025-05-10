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

## Advanced TypeScript Type Inference
In addition to the basic type inference techniques that we have already discussed, TypeScript also supports a number of advanced type inference techniques. These techniques can be used to infer the types of more complex variables and expressions.

Some of the more advanced TypeScript type inference techniques include:

### Union types

Union types allow you to specify that a variable or expression can have one of a few different types. For example, the following code defines a variable x that can be either a string or a number:

```
const x: string | number;
```

The TypeScript compiler can infer the type of x based on the expressions that are used to initialize it. For example, if x is initialized to the string "hello", the compiler will infer that the type of x is string. If x is initialized to the number 10, the compiler will infer that the type of x is number.


### Intersection types
Intersection types allow you to specify that a variable or expression must have all of the types in a set.

For example:

```
// Define two types representing different features
type HasName = { name: string };
type HasAge = { age: number };

// Create an intersection type combining both features
type Person = HasName & HasAge;

// Create an object that satisfies the intersection type
const person: Person = {
  name: 'Alice',
  age: 30,
};

console.log(person); // { name: 'Alice', age: 30 }
```
We have two types, HasName and HasAge, each representing an object with specific properties. We then create an intersection type Person that combines both HasName and HasAge. The resulting Person type enforces that any object assigned to it must have both a name and an age property. Finally, we create an object person that satisfies the intersection type and contains both properties.

## Generics
Generics allow you to create functions and classes that can work with different types of data. For example, the following code defines a generic function swap that takes two variables of the same type and swaps their values:

```
function swap<T>(x: T, y: T): void {
  const temp = x;
  x = y;
  y = temp;
}
```

The swap function can be used to swap the values of any two variables of the same type. For example, the following code swaps the values of the variables a and b:

```
const a = 10;
const b = 20;

swap(a, b);

console.log(a); // 20
console.log(b); // 10t
```

## Conclusion
TypeScript type inference is a powerful feature that can help you to write more concise, readable, and type-safe code. If you are new to TypeScript, I encourage you to learn more about type inference and how to use it in your code.

