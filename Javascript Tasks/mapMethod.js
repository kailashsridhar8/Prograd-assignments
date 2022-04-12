const students= ['Stefan','Damon','Elena','Caroline','BonnieBennett'];

const leaveNotice= students.map(student =>{ 
    return student+' will not be available for the the next Friday';
});

console.log(leaveNotice);