# advance-node-js
Libuv have total 7 thread (including main thread)
2 of them are reserver for garbage collection and 4 of them are use when needed (ie. DB queries, file read/write, network operation) (seem to asynchoronus), not a high CPU works

Here are few Javascript topics which are frequently asked

🔍 Execution Context and Execution Stack\
Whenever any code is run in JavaScript, it’s run inside an execution context.
- **Global Execution Context —** This is the default or base execution context. The code that is not inside any function is in the global execution context. It performs two things: it creates a global object which is a window object (in the case of browsers) and sets the value of `this` to equal to the global object. There can only be one global execution context in a program.
- **Functional Execution Context —** Every time a function is invoked, a brand new execution context is created for that function. Each function has its own execution context, but it’s created when the function is invoked or called. There can be any number of function execution contexts. Whenever a new execution context is created, it goes through a series of steps in a defined order which I will discuss later in this article.
- **Eval Function Execution Context —** Code executed inside an `eval` function also gets its own execution context, but as `eval` isn’t usually used by JavaScript developers, so I will not discuss it here.

**Execution Stack**
- Execution stack, also known as “calling stack” in other programming languages, is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.

- When the JavaScript engine first encounters your script, it creates a global execution context and pushes it to the current execution stack. Whenever the engine finds a function invocation, it creates a new execution context for that function and pushes it to the top of the stack.

- The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches to the context below it in the current stack.
````js
    let a = 'Hello World!';
    function first() {
    console.log('Inside first function');
    second();
    console.log('Again inside first function');
    }
    function second() {
    console.log('Inside second function');
    }
    first();
    console.log('Inside Global Execution Context');
````
![Altd](/img/EXC.webp)
- When the above code loads in the browser, the Javascript engine creates a global execution context and pushes it to the current execution stack. When a call to `first()` is encountered, the Javascript engines creates a new execution context for that function and pushes it to the top of the current execution stack.

- When the `second()` function is called from within the `first()` function, the Javascript engine creates a new execution context for that function and pushes it to the top of the current execution stack. When the `second()` function finishes, its execution context is popped off from the current stack, and the control reaches to the execution context below it, that is the `first()` function execution context.

- When the `first()` finishes, its execution stack is removed from the stack and control reaches to the global execution context. Once all the code is executed, the JavaScript engine removes the global execution context from the current stack.

🔍 How is the Execution Context created?
1. Creation Phase.
2. Execution Phase.

    **The Creation Phase**

    1. **LexicalEnvironment** component is created.
    2. **VariableEnvironment** component is created.

     **The Execution Phase**
     - In this phase assignments to all those variables are done and the code is finally executed

📚 Callstack

At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

- An Ordered set of stack frames
- Most recently invoked function is on the top of the stack
- The bottom of the stack is the first function invoked
- The stack is processed from top to bottom
- To check the maximum size of call stack
    ```js
    function computeMaxCallStackSize() {
        try {
            return 1 + computeMaxCallStackSize();
        } catch (e) {
            // Call stack overflow
            return 1;
        }
    }
    ```
- Chrome : 10477
- Node.js: 11034
- Firefox: 50994

The V8 engine has two main components
- **Heap** is an unstructured memory that is used for memory allocation of the variables and the objects.
- **Call Stack** is a [LIFO](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) data structure that is used for function calls that record where we are in the program.
![Altd](/img/callstack.gif)

🧑‍🤝‍🧑 Callback Queue
- The Callback Queue is a [FIFO](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) data structure.
- The Callback Queue stores all the callback functions in the order in which they are added.

🔢 Data types (Especially Arrays, Objects, Strings)

Every Variable has a data type that tells what kind of data is being stored in a variable. There are two types of data types in JavaScript.
- Primitive data types
- Non-primitive data types
# Primitive data types:
The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
- Number
- String
- Undefined
- Boolean
- Null
- BigInt
    - This data type can represent numbers greater than 2^253-1 which helps to perform operations on large numbers. The number is specified by writing ‘n’ at the end of the value

- Symbol
    ```js
    let sym = Symbol("Hello")
    console.log(typeof(sym));
    console.log(sym);
    ```
# Non-primitive data types:

The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

- Object
- Array

![Altd](/img/Primitive-Types.png)
![Altd](/img/Primitive-Types1.png)



<b>Arrays</b> Arrays are a type of object in JavaScript. They are used to store multiple values in a single variable.
```JS
let array = [1, 2, 3, 4];
console.log(typeof array); // "object"
```
<b>Objects</b> Objects are a collection of properties, and each property is associated with a key and a value.
```JS
let obj = { name: "Alice", age: 30 };
console.log(typeof obj); // "object"
```
<b>Strings</b> Strings are a sequence of characters used to represent text.Strings: Strings are a sequence of characters used to represent text.
```JS
let str = "Hello, world!";
console.log(typeof str); // "string"
```

🔄 Array and Object methods

Iterative Methods:

# forEach() 
- Executes a provided function once for each array element.
map() - Creates a new array with the results of calling a provided function on every element in the original array.
# filter() 
- Creates a new array with all elements that pass the test implemented by the provided function.
# find() 
- Returns the value of the first element in the array that satisfies a provided testing function.
# findIndex() 
- Returns the index of the first element in the array that satisfies a provided testing function. Similar to find() but returns the index instead of the value.
# some() 
- Determines whether at least one element in the array passes a provided testing function.
# every() 
- Determines whether all elements in the array pass a provided testing function.
# reduce() 
- Applies a function against an accumulator and each element in the array to reduce it to a single value.
# reduceRight() 
- Similar to reduce() but applies the function right-to-left.

## Transformative Methods:

# concat() 
- Merges two or more arrays and returns a new array containing all elements.
# slice() 
- Extracts a section of an array and returns a new array (copies a section).
# splice() 
- Removes elements from an array and/or inserts new elements in place, modifying the original array.

## Searching and Sorting Methods:

# indexOf() 
- Returns the first index at which a given element can be found in the array, or -1 if it's not found.
# lastIndexOf() 
- Returns the last index at which a given element can be found in the array, or -1 if it's not found.
# sort() 
- Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.

## Other Useful Methods:

# join() 
- Joins all elements of an array into a string, separated by a specified separator.
# push()
 - Adds one or more elements to the end of an array and returns the new length.
# pop() 
- Removes the last element from an array and returns that element.
# shift() 
- Removes the first element from an array and returns that element.
# unshift() 
- Adds one or more elements to the beginning of an array and returns the new length.
# fill() 
- Fills all or part of an array with a static value.
# reverse() 
- Reverses the order of the elements in an array in place.
# includes() 
- Determines whether an array includes a certain value among its entries, returning true or false.

## Additional Methods (newer additions):

# entries() 
- Returns an Array Iterator object containing key-value pairs for each index in the array.
# keys() 
- Returns an Array Iterator object containing the keys (indices) of each element in the array.
# values() 
- Returns an Array Iterator object containing the values of each element in the array.
# flat() 
- Creates a new array with sub-array elements concatenated to a specified depth.
# flatMap() 
- Similar to flat() but applies a function to each element before flattening.
# copyWithin() 
- Copies elements within the array, overwriting existing elements.

## Important Methods Related to Objects (provided by built-in JavaScript objects):
### Object Properties:

- Objects store key-value pairs. Properties are essentially the "keys" that you can use to access the corresponding values associated with them.
- You can access properties using dot notation (object.propertyName) or bracket notation (object["propertyName"]).
## Common Object Methods:

- <b>hasOwnProperty(propName)</b> - Returns a boolean indicating whether the object has a property as its own property (not inherited from the prototype chain).
- <b>propertyIsEnumerable(propName)</b> - Determines if a specified property is enumerable (shows up in a loop like for...in).
### Modifying Object Properties:

You can directly assign values to properties (object.propertyName = value).
Newer methods like <b>Object.assign()</b> allow copying properties from one object to another.

### Object Deletion:

The <b>delete</b> operator can be used to remove a property from an object.
Prototype Chain:

Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from. This prototype chain allows for code reusability.
# Object.keys(obj) 
- Returns an array containing the enumerable property names of an object.
# Object.values(obj) 
- Returns an array containing the enumerable property values of an object.
# Object.entries(obj) 
- Returns an array of key-value pairs (entries) for an object's own enumerable properties.
# Object.freeze(obj) 
- Prevents further modifications to an object's existing properties.
# Object.seal(obj) 
- Prevents adding new properties but allows modifying existing ones.


🔗 let/var/const

In JavaScript, let, var, and const are keywords used to declare variables, but they have distinct characteristics regarding scope and mutability (the ability to change the value). Here's a breakdown of their key differences:

1. var (Mostly avoided in modern JavaScript):

- <b>Scope:</b> Function-scoped or globally scoped. Variables declared with var are accessible within the function they are declared in or globally if declared outside any function.
- <b>Mutability:</b> Can be reassigned a new value after declaration.
    ### Consider avoiding var due to:
- <b>Hoisting:</b>  var variables are hoisted to the top of their scope (function or global), meaning they can be accessed even before they are declared in the code. This can lead to unexpected behavior if you're not familiar with hoisting.
- <b>Scope Issues:</b>  The function scope of var can cause confusion, especially when dealing with nested functions.

2. let:
- <b>Scope:</b> Block-scoped. Variables declared with let are only accessible within the block they are declared in (e.g., inside an if statement, for loop, or curly braces {}).
- <b>Mutability:</b> Can be reassigned a new value after declaration.
    ### Use let when:
- You want to limit the scope of a variable to avoid conflicts with other variables in different parts of your code.
- You need to reassign a value to the variable within its scope.

3. const:
- <b>Scope:</b> Block-scoped, similar to let.
- <b>Mutability:</b> Cannot be reassigned a new value after declaration. The value must be initialized at the time of declaration.
    ### Use const when:
- You want to declare a variable that should hold a constant value and shouldn't be changed throughout the program.
- You want to prevent accidental reassignment and improve code clarity.


🕳️ Hoisting, Temporal Dead Zone

In JavaScript, hoisting and the Temporal Dead Zone (TDZ) are two interrelated concepts that affect how variables are handled during code execution.
## Hoisting
- <b>Behavior:</b> Hoisting refers to the process of moving variable and function declarations to the top of their scope (function or global) during compilation. This creates the illusion that these declarations are made at the beginning of their scope, even if they appear later in the code.
- <b>Impact:</b> 
    - <b>Variables:</b> When you declare a variable with var, it gets hoisted but is initialized with undefined by default. You can access the variable before its declaration, but trying to use it before it's assigned a value will result in a ReferenceError.
    - <b>Functions:</b> Function declarations are also hoisted completely. You can call a function before its declaration in the code.
    #### Example of Hoisting:
    ```js
    console.log(message); // Outputs: undefined (variable hoisted but not initialized)
    var message = "Hello!";

    function sayHi() {
    console.log("Hi from hoisted function!");
    }

    sayHi(); // This works because function declarations are hoisted
    ```

## Temporal Dead Zone (TDZ)
- <b>Concept:</b> The TDZ is a specific period within a block (denoted by curly braces {}) where a variable declared with let or const exists but cannot be accessed. This prevents the variable from being used before it's properly initialized with a value.
- <b>When it occurs:</b> The TDZ starts at the beginning of the block where the let or const variable is declared and lasts until the line where the variable is initialized.
- <b>Impact:</b> Trying to access a let or const variable before its initialization will result in a ReferenceError.
### Example of TDZ:
```js
        if (true) {
        console.log(x); // ReferenceError: x is not defined (TDZ for let)
        let x = 10;
        }

        console.log(y); // ReferenceError: y is not defined (TDZ for const)
        const y = 20;

```
#### Key Differences:

- <b>Hoisting applies to:</b> var declarations (both variables and functions).
- <b>TDZ applies to:</b> let and const declarations (variables only).
- <b>Hoisting moves declarations:</b> Doesn't affect the actual value assignment, which happens at runtime.
- <b>TDZ prevents access:</b> The variable is inaccessible until it's initialized.


🚫 Illegal shadowing

🔍 Scope, Scope chaining
#### Scope
- In JavaScript, scope determines the accessibility of variables and functions within your code.
- It defines where you can reference a particular variable or function without getting an error.

- Types of Scope:
    - <b>Global Scope:</b> Variables declared outside any function are in the global scope. They are accessible from anywhere in your code. (Use with caution as it can lead to naming conflicts)
    - <b>Local Scope (Function Scope):</b> Variables declared within a function are local to that function and cannot be accessed from outside.
    - <b>Block Scope (Introduced in ES6):</b> Variables declared with let or const within a block (denoted by curly braces {}) are only accessible within that block.
    ```js
    let globalVar = "Global"; // Global scope

    function myFunction() {
    let localVar = "Local"; // Local scope to myFunction

    if (true) {
        let blockVar = "Block"; // Block scope
        console.log(localVar); // Can access localVar
    }

    console.log(globalVar); // Can access globalVar
    // console.log(blockVar); // ReferenceError (blockVar is not accessible here)
    }

    myFunction();
    // console.log(localVar); // ReferenceError (localVar is not in global scope)

    ```

#### Scope chaining
- Scope chaining provides a mechanism for resolving references to variables when they are not found in the current scope.
    - When you try to access a variable within your code, JavaScript follows a chain of scopes to find it.
    - The chain starts from the current scope (where the reference is made) and then progresses outward to enclosing scopes (parent functions or blocks) until the variable is found or the global scope is reached.
    - If the variable is not found anywhere in the scope chain, you'll get a ReferenceError.
    ```js
    function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log(outerVar); // Accesses outerVar from outer function's scope
    }

    innerFunction();
    }

    outerFunction();
    ```
    Key Points:
    - Variables are looked up in the current scope first, then in the outer scopes if not found.
    - Inner functions can access variables from their outer (enclosing) functions.
    - Global variables are accessible from anywhere in your code, but their use is discouraged due to potential naming conflicts.
    - By understanding scope and scope chaining, you can write cleaner, more maintainable JavaScript code and avoid errors related to variable accessibility.

🔄 Mutable/Immutable data types
- In JavaScript, data types can be classified into mutable and immutable based on whether their values can be changed after creation.
- This distinction is important for understanding how data is handled in your programs.
### Mutable Data Types
- Objects
    - Objects store key-value pairs
    -  While the reference to the object itself might not change, the values of its properties can be modified after creation.
    ```js
    let person = { name: "Alice", age: 30 };
    person.age = 31; // Modifying a property value
    console.log(person.age); // Outputs: 31
    ```
- Arrays
    - Arrays hold collections of elements.
    -  You can add, remove, or change elements within an array, effectively altering the original array.
    ```js
    let numbers = [1, 2, 3];
    numbers[1] = 5; // Changing an element value
    console.log(numbers); // Outputs: [1, 5, 3]

    ```
### Immutable Data Types
- Primitives
    -  Primitive data types like numbers, strings, booleans, null, and undefined are immutable.
    -  Once a primitive value is created, its content cannot be directly changed. Assigning a new value creates a new primitive data type in memory.
    ```js
    let message = "Hello";
    message = "World"; // Reassigns a new string value
    console.log(message); // Outputs: World (original "Hello" is not modified)
    ```
#### When to use Mutable vs. Immutable Data Types:

- Mutable data types:
    - Suitable for situations where data needs to be modified or updated frequently.
- Immutable data types:
    - Preferred for scenarios where data integrity is crucial and you want to avoid accidental modifications.
    - Immutable data types can also improve reasoning about your code and potentially simplify debugging.
- Functional programming paradigms often emphasize immutability for predictable program behavior. By creating new immutable data structures instead of modifying existing ones, you can ensure that the original data remains unaltered.


🔍 Shallow and Deep copy

🌐 DOM (DOM methods) and BOM

📝 Critical Rendering Path

🔧 Functions

📄 Function Declaration

🗣️ Function Expression

🔄 Functional Programming

➡️ Arrow Functions

📦 IIFE

🔑 this keyword

➡️ Arrow function and this keyword

📞 Call, Apply, Bind

🔒 Closure and its uses

🔄 Callbacks, Callback Hell

🔮 Promises, promise chaining

⏳ Async/Await

🔄 Callbacks vs promises vs async/await

🍛 Currying

🛠️ Debouncing and Throttling

🔍 Event Propagation

🔵 Bubbling 

🎣 Capturing 

📦 Event Delegation

📘 Prototype and Prototypal Inheritance

🧠 Memoization

🌀 Generator Functions

🔄 Event Loop, Microtasks, Macrotask

🎉 Events: DOMContentLoaded, load, beforeunload, unload

⏩ async/defer

🩹 Polyfills (Mostly asked polyfills: Promise, Promise.all, Promise.any, Promise.race, Promise.allSettled, call, apply, bind, map, reduce, filter, forEach, flat, fetch API)

🌐 Web APIs

⏲️ setTimeout, setInterval, nexTrick

🔄 High Order Functions

🔧 Working of JS Engine

E6 Feature

Repl



package and package loc difference

fork and resposne 

buffer class in nodejs

#### Pipline in nodejs
- In Node.js, a pipeline refers to a series of asynchronous operations chained together where the output of one operation becomes the input for the next.
- This approach is particularly useful for processing data in a streaming manner, meaning you can handle data in chunks rather than waiting for the entire dataset to be available.
##### Building a Pipeline:
1. Data Source: The pipeline starts with a source that provides the initial data (e.g., a readable stream like a file system read stream or network request).
2. Transform Streams: You can chain multiple transform streams together. Each stream processes the incoming data chunk by chunk and can modify it, filter it, or perform other transformations.
3. Destination: The final stage is a writable stream that receives the transformed data from the last transform stream and writes it to the desired destination (e.g., a file write stream, network response stream, or another processing logic).
```js
stream.pipeline(source, [transform1, transform2, ..., ], destination, [callback])
```
- source: The readable stream representing the initial data source.
- transform1, transform2, ...: An optional array of zero or more transform streams for data processing.
- destination: The writable stream representing the final output destination.
- callback (optional): An optional function called once the pipeline finishes execution (successfully or with an error).
```js
const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('large_file.txt');
const gzip = zlib.createGzip();
const writableStream = fs.createWriteStream('large_file.txt.gz');

// Pipeline the streams for compression
stream.pipeline(readableStream, gzip, writableStream, (err) => {
  if (err) {
    console.error('Pipeline error:', err);
  } else {
    console.log('File compressed successfully!');
  }
});
```
- In this example, the pipeline reads data from large_file.txt, compresses it with gzip, and writes the compressed data to large_file.txt.gz. The optional callback function handles any errors or signals the successful completion.
##### Benefits of Pipelines:

- Efficient Data Handling: Pipelines enable processing data in chunks, improving memory usage and performance, especially for large datasets.
- Modular and Reusable: You can create reusable transform streams for common data processing tasks, promoting code modularity.
- Error Handling: The stream.pipeline() function simplifies error handling by providing a central callback for the entire pipeline.
##### Alternatives to stream.pipeline():
- Manual Stream Chaining: While stream.pipeline() is a convenient option, you can still achieve pipelines by manually chaining streams together using the pipe() method on each stream object.
- Promises API: Node.js also offers a Promises API for streams, which provides an alternative approach for asynchronous data handling.

### Pipeline vs Pipe
- Both pipes and pipelines are related to handling data streams in Node.js, but they have distinct roles:

Pipe (.pipe() method):
- Concept: A method available on readable streams that connects it to a writable stream.
- Functionality: Establishes a one-to-one connection for data flow. The output from the readable stream is sent directly to the writable stream chunk by chunk.
- Use Cases: Simple data transfer scenarios where you want to send data from one stream to another (e.g., copying a file, compressing data).
    ```js
    const fs = require('fs');
    const readableStream = fs.createReadStream('input.txt');
    const writableStream = fs.createWriteStream('output.txt');
    readableStream.pipe(writableStream);  // Connect readable to writable stream
    readableStream.on('end', () => {
    console.log('File copied successfully!');
    });
    ```
Pipeline (stream.pipeline() function):
- Concept: A more complex approach that involves chaining multiple streams together to create a data processing workflow.
- Functionality: Allows you to connect a series of readable, transform (optional), and writable streams. Each transform stream can process the data before passing it to the next stream in the pipeline.
- Use Cases: Building data processing workflows that involve multiple steps (e.g., reading a file, transforming data, writing to a database).
    ```js
    const fs = require('fs');
    const zlib = require('zlib');
    const readableStream = fs.createReadStream('large_file.txt');
    const gzip = zlib.createGzip();
    const writableStream = fs.createWriteStream('large_file.txt.gz');

    stream.pipeline(readableStream, gzip, writableStream, (err) => {
    if (err) {
        console.error('Pipeline error:', err);
    } else {
        console.log('File compressed successfully!');
    }
    });
    ```
    
### Middleware in nodejs
- Middleware act as intermediaries between the incoming request and the final response, allowing you to manipulate the request and response objects, perform actions, and potentially modify the flow of the application.
- How Middleware Works:
    1. Request Initiation: A client sends an HTTP request to your Node.js application.
    2. Middleware Stack: The request enters a stack of middleware functions defined in your application.
    3. Sequential Execution: Each middleware function in the stack has access to the request (req) object, the response (res) object, and a next function. The middleware can:
        - Modify the request object (e.g., adding data, parsing body content).
        - Modify the response object (e.g., setting headers, sending content).
        - Call the next() function to proceed to the next middleware in the stack or terminate the request-response cycle.
    4. Final Handler: After processing by all middleware, the request reaches the final handler, which could be a route handler function defined in your framework (like Express.js) or custom logic to handle the request.
- Benefits of Middleware:
    - Modular Code: Middleware promotes code reusability and separation of concerns. You can create modular middleware functions for common tasks like logging, authentication, or error handling.
    - Request Flow Control: Middleware allows you to intercept requests, perform validations, or redirect them based on specific conditions.
    - Flexibility: You can chain multiple middleware functions together to create complex request processing pipelines.
- Common Middleware Use Cases:
    - Logging: Log request details, response times, or errors for debugging and monitoring purposes.
    - Authentication: Validate user credentials and restrict access to protected resources.
    - Authorization: Check user permissions to ensure they have the necessary rights to perform certain actions.
    - Error Handling: Catch and handle errors gracefully, providing informative error messages to the user or logging them for further analysis.
    - Parsing Request Body: Parse incoming data from the request body (e.g., JSON parsing, form data handling).
    - Static File Serving: Serve static files like images, CSS, or JavaScript efficiently.
    ```js
    const express = require('express');

        const app = express();

        // Middleware function to log requests
        function logRequest(req, res, next) {
        console.log(`${req.method} ${req.url}`);
        next();
        }

        // Apply middleware to all routes
        app.use(logRequest);

        // Route handler example
        app.get('/', (req, res) => {
        res.send('Hello from Node.js server!');
        });

        app.listen(3000, () => {
        console.log('Server listening on port 3000');
        });

    ```

#### how to connect with database
1. Choose a Database Driver
2. Install the Driver Package
3. Create a Database Connection
4. Execute Database Queries
5. Close the Connection
    1. Choose a Database Driver:
    - Select a database driver compatible with your chosen database system (e.g., MySQL, PostgreSQL, MongoDB). Popular options include:
        - MySQL: mysql2 or mysql
        - PostgreSQL: pg or pg-promise
        - MongoDB: mongodb or mongoose (Mongoose provides an object-oriented layer on top of the MongoDB driver)
    2. Install the Driver Package:
        - Use npm or yarn to install the chosen database driver package for your project:
        ```
        npm install mysql2 
        ```
    3. Create a Database Connection:
        - Import the driver module in your Node.js file and establish a connection using the driver's specific connection method. Here's a general example using mysql2
        ```js
        const mysql = require('mysql2/promise');

        // Connection configuration (replace with your credentials)
        const connectionConfig = {
        host: 'localhost',
        user: 'your_username',
        password: 'your_password',
        database: 'your_database_name'
        };

        async function connectToDatabase() {
        try {
            const connection = await mysql.createConnection(connectionConfig);
            console.log('Successfully connected to the database!');
            // You can now execute queries using the connection object
        } catch (error) {
            console.error('Error connecting to the database:', error);
        }
        }

        connectToDatabase();

        ```
    4. Execute Database Queries:
        - Once connected, you can use the driver's provided methods to execute queries against the database. Here's a basic example using connection.query (replace the query with your specific operation):
        ```js
        async function fetchData() {
        try {
            const [rows] = await connection.query('SELECT * FROM your_table');
            console.log(rows); // Output the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }

        fetchData();

        ```
    5. Close the Connection
        - Remember to close the database connection when you're finished to release resources. 
        - This typically involves a connection.end() method or similar depending on the driver.

#### Additional Considerations:
- <b>Error Handling:</b> Implement proper error handling mechanisms to gracefully handle connection errors or query execution failures.
- <b>Prepared Statements:</b>  Consider using prepared statements to prevent SQL injection vulnerabilities, especially when dealing with user-provided data in your queries.
- <b>Connection Pooling:</b>  For production applications, explore connection pooling techniques to improve performance and manage database connections efficiently.
#### Security Best Practices:
- <b>Never store sensitive database credentials directly in your code.</b>  Consider using environment variables or a secure configuration file to store them.
- <b>Validate user input:</b>  Sanitize any user-provided data before incorporating it into database queries to prevent SQL injection attacks.
- <b>Keep your database drivers and libraries updated</b>  to address security vulnerabilities.


#### Difference between .env  and config files in nodejs
- Both .env files and config files are used to store configuration data in Node.js applications
- But they serve different purposes and have distinct advantages
 1. .env Files:
    - <b>Purpose:</b> Primarily used to store environment-specific configuration variables. This includes sensitive information like API keys, database passwords, or URLs that might differ between development, testing, and production environments.
    - <b>Security:</b> Since .env files are typically not included in version control due to their sensitive content, they help keep your credentials secure.
    - <b>Usage:</b> Node.js applications often use packages like dotenv to load environment variables from the .env file into the process environment (process.env). This allows you to access these variables throughout your code using process.env.VARIABLE_NAME.
2. Config Files:
    - <b>Purpose:</b> Store general application configuration that is not environment-specific. This might include application settings, logging configurations, or default values for non-sensitive data.
    - <b>Security:</b> Config files are usually part of your codebase, so they don't necessarily require the same level of security as .env files. However, it's still recommended to avoid storing highly sensitive information in config files that are committed to version control.
    - <b>Formats:</b> Config files can come in various formats like JSON, YAML, or JavaScript modules. The choice depends on your preference and project requirements.
    - <b>Loading:</b> You can use libraries like fs (file system) or framework-specific methods to read and parse configuration data from these files.

![Comparing](img/campare.png)
#### http function
```js
const http = require('http');
const PORT = 5000;
const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","application/json");
    res.writeHead(200);
    res.end(`{"message":"This is response"}`)
})
server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
```
[HTTP Code](http.js)

#### What is event listeners (with example)
[EventCode](event.js)
- At the time of publishing the event, there must be an `EventEmitter` listener existing to listen to the published event.
- The `on()` and the `emit()` functions must be called on the same EventEmitter instance.
- When creating the `EventEmitter` instance, we can simply store it as an application-level setting using `app.set(<key>, <value>)`.
```js
import { EventEmitter } from "events";
import express from 'express';

const eventEmitter = new EventEmitter();

const app = express();
app.set('eventEmitter', eventEmitter);

// access it from any module of the application
console.log(app.get('eventEmitter'));
```
- The events raised by event emitters are synchronously executed by the listeners in the current event loop’s iteration.
- `removeAllListeners()` to remove all active event listeners from an `EventEmitter` instance.

// Calling function for something if something went wrong\
//set limited amount of chace item and remove when ever is not in use or less use
