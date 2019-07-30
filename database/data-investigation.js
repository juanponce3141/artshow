const fs = require('fs');
const csv = require('fast-csv');
const parser = csv.parse();

const path = "./the-tate-collection-backup.csv";

var count = 0;

const fileStream = fs.createReadStream(path);

fileStream
    .pipe(parser)
    .on('error', error => console.error(error))
    .on('data', row => {
        count++;
        // console.log("Artist : " + row["artist"])
        // Insert at this point data into queue
        if (count % 10000 == 1) {
            fileStream.pause()
            var intervalID = setInterval(() => { //Set interval would maybe better
                console.log("Count : " + count);
                clearInterval(intervalID); // if queue is under certain threshold, then go ahead and clear timeout.
                fileStream.resume(); // I can write logic here : if queueto big, don't continue. setInterval() till queue is fine.
            }, 1000)
        }
    })
    .on('end', rowCount => {
        console.log(`Parsed ${rowCount} rows`);
        console.log("End, but count is " + count);
    });



