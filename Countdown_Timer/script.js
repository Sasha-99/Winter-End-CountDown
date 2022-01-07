const countdown = () => {
  // Gets the date in miliseconds(getTime()).
  const countDate = new Date("March 1, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  // Find the gap between now and the future date.
  const timeBetween = countDate - now;

  // Find the time units
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const unitDay = Math.floor(timeBetween / days);
  const unitHour = Math.floor((timeBetween % days) / hours);
  const unitMinute = Math.floor((timeBetween % hours) / minutes);
  const unitSecond = Math.floor((timeBetween % minutes) / seconds);

  document.querySelector("#days").innerText = unitDay;
  document.querySelector("#hours").innerText = unitHour;
  document.querySelector("#minutes").innerText = unitMinute;
  document.querySelector("#seconds").innerText = unitSecond;
};

setInterval(countdown, 1000);
