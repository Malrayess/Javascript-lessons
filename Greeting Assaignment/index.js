let time = 9; //Change this simulating automatically reading time from Internet Clock or System Tray Clock
console.log("The current time is ",time);

for (let i=0; i<24; i++) {
  if (time < 12 && time >= 6) {
    console.log('Good Morning');
  } else if (time < 18 && time >= 12) {
    console.log('Good Afternoon');
  } else if (time < 23 && time >= 18) {
    console.log('Good Evening');
  } else if (time < 6 && time >= 0) {
     console.log('Why am I awake at this time?');
   }
}
