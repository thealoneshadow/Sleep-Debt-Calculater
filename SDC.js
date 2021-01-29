const getSleepHours = (day) => {
day=day.toLowerCase();
if(day === 'monday')
return 9;
else if(day === 'tuesday')
return 1;
else if(day === 'wednesday')
return 8;
else if(day === 'thursday')
return 1;
else if(day === 'friday')
return 8;
else if(day === 'saturday')
return 9;
else if(day === 'sunday')
return 9;
else 
console.log('Enter Valid Credentials');
}
getSleepHours('monday');

const getActualSleepHours = () => {
const sum = getSleepHours('Monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
return sum;
};

const getIdealSleep = () => {
  const idealHours = 7;
  return idealHours*7;
}
const calculateSleepDebt = () => {
  const actual = getActualSleepHours();
  const ideal = getIdealSleep();
  if(actual == ideal)
  console.log("Ideal Sleep");
  else if(actual > ideal)
  console.log(actual - ideal);
  else
  console.log(`You Need To Increase ${ideal - actual} hours In Your Sleep`);
}
calculateSleepDebt();

