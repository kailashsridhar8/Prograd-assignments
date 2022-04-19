// let makeCake = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Make the cake"),2000)
//   });
//   makeCake.then(function(result1){
//     console.log(result1);
// })

// let makeBurger = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Make the Burger"),1000)
//   });
//   makeBurger.then(function(result1){
//     console.log(result1);
// })

// async function burgerFunction(){
//   let buyBurger = await makeBurger;
//     console.log("B ready");
//     let result =  await buyBurger;
//     console.log("Bought the b.Promise fulfilled.");
//      console.log('Eat the b');
// }
//  async function cakeFunction() {
  
//   try{
//     let buyCake = await makeCake;
//     console.log("Cake ready");
//     let result =  await buyCake;
//     console.log("Bought the cake.Promise fulfilled.")
//   }
//   catch{
//     console.log("error");
//   }
  
//   console.log('Eat the cake');
// }

// cakeFunction();
// burgerFunction();
let makeCake = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Make the cake"),1000)
});
makeCake.then(function(result1){
  console.log(result1);
})

let makeBurger = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Make the Burger"),1000)
});
makeBurger.then(function(result1){
  console.log(result1);
})

async function burgerFunction(){
let buyBurger = await makeBurger;
  console.log("Burger ready");
  let result =  await buyBurger;
  console.log("Bought the Burger.");
   console.log('Eat the Burger');
}
async function cakeFunction() {

try{
  let buyCake = await makeCake;
  setTimeout(()=> console.log("Cake ready"),3000)
  
  let result =  await buyCake;
  setTimeout(()=> console.log("Bought the cake"),4000)
}
catch{
  console.log("error");
}

console.log('Eat the cake');
}

cakeFunction();
burgerFunction();
