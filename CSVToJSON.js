/* The assignment lab for this module is to build a node script to convert CSV files to JSON files
*/
var fs = require('fs');
var csv = require('csvtojson');
var path = require('path');
var my_json = [];
//Function to convert the input file csv type to json file.
//var file_in = 'customer-data.csv';
//var file_out = 'customer-data.json';
var file_in =process.argv[2];
var file_out=process.argv[3];
console.log('Arguments: ' + file_in+ ',' + file_out);
function csv_to_json(file_in, file_out) {
    if (file_out === void 0) {
        file_out = 'sample.json';
    }
    if (!file_in) {
        console.log('Input File name empty');
        return (1);
    }
    csv()
        .fromFile(path.join(__dirname, file_in))
        .on('json', function (jsonObj) {
        // console.log(jsonObj)
        my_json.push(jsonObj);
    })
        .on('done', function (error) {
        // console.log(my_json)
        fs.writeFile(file_out, JSON.stringify(my_json, null, ' '), function (error) {
            if (error)
                console.error(error);
            console.log(' File Created: ', file_out);
            return (0);
        });
    });
}
console.log(csv_to_json(file_in, file_out));
