const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = date.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = date.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);

const currentTime = document.getElementById('current-time');
 
function getCurrentTime() {
    return new Date().toTimeString().replace(/ .*/, '');
}
 
setInterval(() => currentTime.innerHTML = getCurrentTime(),1000);

const n = new Date();
const day = n.getUTCDay();
const d = n.getDate();
const m = n.getMonth();

const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'satturday', 'sunday'];

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.getElementById("current-date").innerHTML = weekDays[day] + ", " + d + " " + months[m];


