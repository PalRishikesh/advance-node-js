Q. What to setup node.js project?

- Download Node.js instaler and Install it.
- Downlaod VSCode editor installer & install it.
- Create new folder (firstProject) anywhere.
- Open VSCode and open firstProject folder from it.
- Opern Termnal in VSCode and run command: npm init -y
- Create new JS file (index.js) within your project folder.
- Run your node.js Application by using command: node index.js

Q. What is NPM? What is the role of node_modules folder?

- NPM is used to manage the dependecies for your Node Project.
- node_moduels folders contains all the dependencies of the node project.

Q. What is the role of package.json file in Node?
The packages.josn file contains project metadat (Information about the project)
Eg. Project name, version, description, author, license etc.

Q. What are the modules? Difference between a function & modules?

- A module contains a <b>specific functionality </b> that can be easily reused within a Node.js Application.
- Ideally in node.js a JavaScript file can be treated as moudle.

```js
function sayHello(name) {
  console.log("Hello, " + name);
}

module.exports = sayHello;
```

- A module is a broader concept that encapsulates functionality, while a function is a specific set of instructions within that module.
- Modules can contain multiple functions and variables.

Q. How many ways are there to Export a module?

- <b>module.exports</b> object can be use to export the module
  ```js
        function sayHello(name){
            console.log("Hello, "+name);
        }
        const PI = 3.141459;
        const myObject = {
            key:"values"
        }
        module.exports.sayHello = sayHello;
        module.exports.PI = PI;
        module.exports.myObject = myObject;
    ```
- <b>exports</b> object can be also used directly to export the module.
    ```js
        exports.sayHello(name){
            console.log("Hello, "+name);
        }
        exports.PI = 3.141459;
        exports.myObject = {
            key:"values"
        }
    ```
- If we don't export the module, then the module functions will not be available outside the module.

Q. How to import single and multiple function from a module?
- Simple function can be import direct with require function.
    ```js
        const moduleName = require("./moudle);
        moduleName("data")
    ```
- Multiple function can be import 
    ```js
        const moduleName = require("./moudle);
        moduleName.sayHello("data")
        moduleName.diferentFunName("data")
    ```

Q. What is module wrapper function?\
- In node.js each module is wrapped in a function called the "module wrapper function" befire it is executed.
- It's try to convert/wrapped normal js file to below file
```js
(function(exports, require, module, __filename, __dirname) {
   // Module code 
   const message = "Hello";
   console.log(message)
});
```

Q. What are the Types of Modules in Node?
1. Built-in Module (Core Moudles)
    - These are  <b>already present modules </b> in Node.js which provide essential functionalities.
    - For example, fs(file system), http(HTTP server), path(path manupulation) and util(utilities)
2. Local Modules
    - These <b>user-defined moudles(JS file)</b> created by developers for specific functionalities.
3. Third-party Modules
    - These are <b> external packages or libraries </b> created by the community and provide additional functionalities for Node Projects. You install third-party modules using the npm install command
    - For example, npm install lodash.