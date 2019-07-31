const fs = require('fs');
const csv = require('fast-csv');
const parser = csv.parse();

const path = "./the-tate-collection-backup.csv";

var count = 0;

const fileStream = fs.createReadStream(path);

var csvArray = [];

// build function to clean year column
cleanYear = (saidYear) => {
    var realYear = 0;

    var arraySaidYear = saidYear.split(/[ -]+/);


};

numberValidation = (year) => {
    if(!Number(year)){
        return "NULL"
    } else {
        return year
    }
}

fileStream
    .pipe(csv.parse({headers: true}))
    .on('error', error => console.error(error))
    // .on('data', row => { // <-------------------------------- This is for when the data would not fit in memory.
    //     count++;
    //     // console.log("Artist : " + row["artist"])
    //     // Insert at this point data into queue
    //     if (count % 10000 == 1) {
    //         fileStream.pause()
    //         var intervalID = setInterval(() => { //Set interval would maybe better
    //             console.log("Count : " + count);
    //             clearInterval(intervalID); // if queue is under certain threshold, then go ahead and clear timeout.
    //             fileStream.resume(); // I can write logic here : if queueto big, don't continue. setInterval() till queue is fine.
    //         }, 1000)
    //     }
    // })
    .on('data', row => {
        count++;
        if(!Number(row["year"])) {
            csvArray.push({
                title: row["title"],
                artist: row["artist"],
                year: "NULL"
            })
        } else {
            csvArray.push({
                title: row["title"],
                artist: row["artist"],
                year: row["year"]
            });
        }
    })
    .on('end', rowCount => {
        console.log(`Parsed ${rowCount} rows`);
        console.log("End, but count is " + count);
        csvArray.forEach((x) => {
            console.log(JSON.stringify(x));
        })
    });



