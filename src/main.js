// TODO: ERROR HANDLING TO CHECK IF DATE STRING IS IN ISO FORMAT



const input = "nybp 2017-09-14T23:11:22Z 2017-09-15T01:33:44Z"

const inputSplit = input.split(' ');

const baseStationId = inputSplit[0];
const startTime = new Date(inputSplit[1]);
const endTime = new Date(inputSplit[2]);

function getDayOfYear(date) {

    const oneDay = 1000 * 60 * 60 * 24;
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const day = Math.round(diff / oneDay);
    console.log(day);
    
    return day;
}

getDayOfYear(startTime);
getDayOfYear(endTime);

