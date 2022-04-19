let myPromise = new Promise(function(myResolve, myReject) {

    let x=0;

    if(x==0) {
        myResolve("OK");
    }
    else{
        myReject("Errorrr");
    }

    // myResolve();
    // myReject();
});

myPromise.then(
    function(value){
        myDisplay(value);
    },
    function(error){
        myDisplay(error);
    }
);

function myDisplay(value){
    console.log(value);
}