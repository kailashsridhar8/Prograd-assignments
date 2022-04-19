//let value = await promise;
//The await keyword can only be used inside an async function.

// async function myDisplay(){

//     let myPromise= new Promise(function(myResolve, myReject) {
//         myResolve("Iam Resolver");
//     });

//     console.log(await myPromise);
// }


// myDisplay();

async function myDisplay(){

    let myPromise= new Promise(function(myResolve) {
        myResolve("Iam Resolver");
    });

    console.log(await myPromise);
}


myDisplay();
