const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
  const now = new Date();
  const nextYearDate = new Date("2026-01-01T00:00:00");
  let difMS = nextYearDate - now;
  let day = difMS / (1000 * 60 * 60 * 24);
  day = Math.floor(day);
  difMS -= day * (1000 * 60 * 60 * 24);
  
  let hour = difMS / (1000 * 60 * 60);
  hour = Math.floor(hour);
  difMS -= hour * (1000 * 60 * 60);
  
  let min = difMS / (1000 * 60);
  console.log(min);
  min = Math.floor(min);
  difMS -= min * (1000 * 60);
    
  let sec = difMS / (1000);
  sec = Math.floor(sec);
  difMS -= sec * (1000);

  days.innerText = day;
  hours.innerText = hour;
  minutes.innerText = min;
  seconds.innerText = sec;

}, 1000);

console.log(new Date());
