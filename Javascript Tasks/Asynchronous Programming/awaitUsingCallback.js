async function myAsyncFunction(){
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(function(){resolve("Hello Await Callbackk");},3000);
    });

    console.log(await myPromise);
}

myAsyncFunction();