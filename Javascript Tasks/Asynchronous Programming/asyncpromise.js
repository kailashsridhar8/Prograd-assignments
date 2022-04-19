let myPromise = new Promise(function(myResolve, myReject) {
    //myResolve("Second");
    myReject(new Error("Error in promise"));
});
myPromise.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});

async function abc() {
//   console.log(await myPromise);
await myPromise;
    console.log("Third");
}

// abc().then(
// function (value) {console.log(value);},
// function (err) {console.log(err);}
// );

console.log("Firstttt");

abc();