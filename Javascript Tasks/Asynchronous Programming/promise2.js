let myFirstPromise=new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve("Success");
    },250);
});

myFirstPromise.then((result) =>{
    console.log(result);
})