let myPromise= new Promise(function(myResolve,myReject){
    setTimeout(function(){
        
        //myResolve("Hey Resolve!!");
        myReject("Error!!");
    },3000);

});

myPromise.then(function(value){
    console.log(value);
});
myPromise.catch(function(err){
    console.log(err);
})