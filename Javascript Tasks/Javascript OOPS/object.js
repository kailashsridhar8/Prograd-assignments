// let school={
//     name:'Velammal',
//     location:'Surapet',
//     board:'cbse',
//     displayInfo: function(){
//         console.log(`${school['name']} is a ${school['board']} board school and it is located in ${school.location}`);
//         console.log(`${school.name} is a ${school.board} board school and it is located in ${school.location}`);
//     }
// }

// school.displayInfo();

const school = new Object();
school.name = 'Velammal';
school.board ='CBSE';
school.location ='Surapet';
school.displayInfo=function(){
    console.log(`${school.name} is a ${school.board} board school and it is located in ${school.location}`);
};

school.displayInfo();
