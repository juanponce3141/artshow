const Pool = require('pg').Pool;
const fs = require('fs');
const csv = require('csv-parser');
const format = require('pg-format');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'art',
    password: '',
    port: 5433
});

const path = "./the-tate-collection-backup.csv";

let artwork = [];

// function yearParser(year) {
//     // if (parseInt(year).length >= 4 ) {
//     //     const yearsplit = year.split(/[ -]+/);
//     //     for( i in yearsplit){
//     //         if(parseInt(yearsplit[i]).length > 3) { // Could fail if case where after split number is still larger then 4, could create flag to catch this instead.
//     //             return yearsplit[i];
//     //         }
//     //     }
//     // } else if ((parseInt(year)).length != 4 ) {
//     //     return "0"
//     // } else {
//     //     return year;
//     // }
//
//
//     return parseInt(year)
// }


fs.createReadStream(path)
    .pipe(csv())
    .on('data', function(data){
        try {
            artwork.push([data.id, data.title, data.artist, parseInt(data.year)])
        }
        catch(err) {
            console.log("err :");
            console.log(err);
        }
    })
    .on('end',function(){
        //some final operation
        console.log(artwork);
        let query1 = format('INSERT INTO art (id,title,artist, year)  VALUES %L returning id', artwork);
        function run() {

            // let client;
            try {
                pool.query(query1)
            } catch (e) {
                console.error(e);
            } finally {
                pool.end();
            }
        }

        run();
    });




