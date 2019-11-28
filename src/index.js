const Client = require("ftp");

const path = "ftp://www.ngs.noaa.gov/cors/rinex/2019/331/nybp/";
const file = "ftp://www.ngs.noaa.gov/cors/rinex/2017/257/nybp/nybp257x.17o.gz"

const c = new Client();

c.on('ready', function() {
    c.list(function(err, list) {
        if (err) {
            console.log(err);
        }

        console.log(list);
        c.end();
    })
})

// c.connect({
//     host: file, 
// });



// TODO: ERROR HANDLING TO CHECK IF DATE STRING IS IN ISO FORMAT


const input = "nybp 2017-09-14T23:11:22Z 2017-09-15T01:33:44Z"

const inputSplit = input.split(' ');

const baseStationId = inputSplit[0];
const startTime = new Date(inputSplit[1]);
const endTime = new Date(inputSplit[2]);

// console.log(startTime);
// console.log(endTime);

function getDayOfYear(date) {

    // timestamp in seconds since 1970/1/1
    const timestamp = new Date().setFullYear(date.getFullYear(), 0, 1);

    const secondsInDay = 1000 * 60 * 60 * 24;

    // day number of first day if the year since 1970/1/1
    const firstDayOfYear = Math.floor(timestamp / secondsInDay);

    // day number of the day in question since 1970/1/1
    const argDayOfYear = Math.floor(date.getTime() / secondsInDay);

    const dayNumberOfTheYear = argDayOfYear - firstDayOfYear;
    
    return dayNumberOfTheYear;    
}

getDayOfYear(startTime);
getDayOfYear(endTime);
