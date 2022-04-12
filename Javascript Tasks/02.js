//Callback Functions

const isEven = (n) => {
    return n % 2 == 0;
  }
  const isOdd = (n) => {
    return n % 2 != 0;
  }
   
  let printMsg = (send_Func, num) => {
    const isNumEven = send_Func(num);
    const isNumOdd = send_Func(num);
   // console.log(`The number ${num} is an even number: ${isNumEven}.`);
    console.log(`The number ${num} is an odd number: ${isNumOdd}.`);
  }
   
  // Pass in isEven as the callback function
 printMsg(isOdd, 4); // Prints: The number 4 is an even number: True.


 //GIVEN