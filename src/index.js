const Client = require("ftp");

const path = "ftp://www.ngs.noaa.gov/cors/rinex/2019/331/nybp/";


const c = new Client();

c.on('ready', () => {
    c.get(path, (err, stream) => {
        if (err) {
            throw err;
        }
    })
})


