const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// giveaway date 
const giveawayDate = '2022, 11, 8, 16:52:01';//set the givaway time

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date(giveawayDate);
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(giveawayDate);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

let year = futureDate.getFullYear()
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let seconds = futureDate.getSeconds();

let month = months[futureDate.getMonth()];
let date = futureDate.getDate()
let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway end on ${weekday}, ${date} ${month}, ${hours}:${minutes}`;

// future time in ms 
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHours = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHours); //get the reminder of a day
  let minutes = Math.floor((t % oneHours) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array 
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    };
    return item;
  };

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(contdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`
  }
};

// contdown 
let contdown = setInterval(getRemainingTime, 1000)
getRemainingTime();