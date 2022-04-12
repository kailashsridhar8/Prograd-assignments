//Functions Assigned to Variables

let plusFive = (number) => {
    return number + 5;  
  };
  // f is assigned the value of plusFive
  let f = plusFive;
   
  plusFive(3); // 8
  // Since f has a function value, it can be invoked. 
  // 14
  console.log( f(9));
  console.log( plusFive);

  //GIVEN