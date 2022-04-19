//The .reduce() Method

const arr=[[3,4],[2,3],[6,7,8,9]];

const join= arr.reduce((accumulator,currentValue)=>{
     return accumulator.concat(currentValue);

},[]);

console.log(join);