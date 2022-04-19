// setTimeout( myDisplay,3000);

// function myDisplay(){
//     console.log("Hello async world");
// }

setTimeout(function(){ 
    myDisplay("Hello Async World after 3 seconds");
},3000);

function myDisplay(message){
    console.log(message);
}