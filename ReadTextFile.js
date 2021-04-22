let map = new Map();

const fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync('reducedPickeringRealEstate.csv', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        console.log(line);
        // parse the line to pull out the parts between the commas
        console.log("*****");
    });
} catch (err) {
    console.error(err);
}
