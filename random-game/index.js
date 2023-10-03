const doors = document.querySelectorAll(".door");
const targets = document.querySelectorAll(".target");
const score = document.querySelector('score')

const randomTime = (min, max) => {
    return Math.round(Math.random() * (max-min) + min);
}

const randomDoor = (doors) => {
    
    const nthdoor = Math.floor(Math.random()*doors.length)
    console.log(nthdoor);
}