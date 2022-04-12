//The .map() Method given 

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
// add string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
 
console.log(announcements);