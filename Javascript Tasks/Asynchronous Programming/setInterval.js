// setInterval(myDisplay,1000);

// function myDisplay(){
//     let d= new Date();
//     console.log(d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds());
// }

setInterval(function(){
    let d= new Date();
    console.log(d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds());
},1000);