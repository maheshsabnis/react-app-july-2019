# React.js 
#=============================================================================
React.js is ES 6 based library
1. let keyword for block-scope declarations
2. Template String aka immutable interpolated string `${Expressions}`
3. Arrow Operator '=>', an alternative to callback parameter to a method /function
4. Array as Type Object with ES 6 methods, e.g. sort() / reverse() / pop() / find() / filter() / reduce(), etc.
5. New collections like, Map with WeakMap, Set with WeakSet.
6. rest parameters, dynamic parameters to a methods, represented using ...
   1. Object.assign()  
7. Object Oriented Programming
   1. Class
   2. Inheritence
   3. Interface (with typescript enability)
   4. The 'this' is the self-reference for accessing class members within class
8.  The 'babel' transpiler for transpiling ES 6 to ES 3
    1.  babel-core
    2.  babel-cli

#=============================================================================
# React.js Programming
1. package.json, npm init -y command 
   1. npm install --save <PACKAGE-NAME>, will install package in local workspace socpe aka 'devDependencies'
   2. npm install <PACKAGE-NAME>, for dependencies
2. React Component
   1. react
      1. Component Class
         1. render()
            1. returns HTML with 
               1. data
               2. events
         2. The base class for each React Component in application
   2. react-dom
      1. ReactDom class
         1. render() method
            1. Renders react componenent inside HTML root element from index.html 
3. Component
   1. Component Categories
      1. Controlled Component
         1. Stateless Components
            1. Contains HTML Rendering and CSS
         2. Statefull Component
            1. Line-Of-Business Components having
               1. Data
               2. Events
            2. the 'state' object
               1. The JSON object for contianing data for the component
               2. The 'setState()' method to update the state of the component
         3. The 'props' property
            1. An immutable object, that is used to share data across components
         4. Unidirectional Data Binding aka UniDirectional DataFlow
            1. Use the HTML ELements 'value' attribute to bind state to UI 
      2. UnControlled Components
         1. Not-Recommended
         2. Can be used for Creating Utility UI elements
         3. Can have state for UI elements represented using 'ref' identifier 