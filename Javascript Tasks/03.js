//JavaScript Functions: First-Class Objects

//Assign a function to a variable originalFunc
const originalFunc = (num) => { return num + 2 };
 
//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;
 
//Access the function's name property
newFunc.name; //'originalFunc'
 
//Return the function's body as a string
newFunc.toString(); //'(num) => { return num + 2 }'
 
//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;
 
//Pass the function as an argument
const functionNameLength = (func) => { return func.name.length }; 
functionNameLength(originalFunc); //12
 
//Return the function
const returnFunc = () => { return newFunc };
returnFunc(); //[Function: originalFunc]

//GIVEN