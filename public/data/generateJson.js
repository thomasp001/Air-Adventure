var fs = require('fs');
var prompt = require('prompt');
//var json = require('json')

prompt.start();

prompt.get(['location'], function (err, result) {
    console.log(result)
    var datas = JSON.parse(fs.readFileSync(result["location"] + '-aq-2015.json', 'utf8'));
var myResults = {}


var counter = 0
var counted = 0;
var total = 0.0
while (counter < datas.length) {
    if (datas[counter]["Nitrogen Oxide (ppm)"] !== "") {
        total = total + datas[counter]["Nitrogen Oxide (ppm)"];
    //console.log("Completed " + (counter + 1) + "/" + counted + 1);
        counted++;
    }
    counter++;
}
//console.log(datas[1]["Nitrogen Oxide (ppm)"]);
if (((total / counted) > 0)) {
    console.log("Nitrogen Oxide (ppm): " + (total / counted));
    myResults["Nitrogen Oxide (ppm)"] = total / counted
}

var counter = 0
var counted = 0;
var total = 0.0
while (counter < datas.length) {
    if (datas[counter]["Nitrogen Dioxide (ppm)"] !== "") {
        total = total + datas[counter]["Nitrogen Dioxide (ppm)"];
    //console.log("Completed " + (counter + 1) + "/" + counted + 1);
        counted++;
    }
    counter++;
}
//console.log(datas[1]["Nitrogen Oxide (ppm)"]);
if (((total / counted) > 0)) {
console.log("Nitrogen Dioxide (ppm): " + (total / counted));
myResults["Nitrogen Dioxide (ppm)"] = total / counted
}
var counter = 0
var counted = 0;
var total = 0.0
while (counter < datas.length) {
    if (datas[counter]["Nitrogen Oxides (ppm)"] !== "") {
        total = total + datas[counter]["Nitrogen Oxides (ppm)"];
    //console.log("Completed " + (counter + 1) + "/" + counted + 1);
        counted++;
    }
    counter++;
}
//console.log(datas[1]["Nitrogen Oxide (ppm)"]);
    if (((total / counted) > 0)) {
console.log("Nitrogen Oxides (ppm): " + (total / counted));
myResults["Nitrogen Oxides (ppm)"] = total / counted
}
var counter = 0
var counted = 0;
var total = 0.0
while (counter < datas.length) {
    if (datas[counter]["Carbon Monoxide (ppm)"] !== "") {
        total = total + datas[counter]["Carbon Monoxide (ppm)"];
    //console.log("Completed " + (counter + 1) + "/" + counted + 1);
        counted++;
    }
    counter++;
}
//console.log(datas[1]["Nitrogen Oxide (ppm)"]);
    if (((total / counted) > 0)) {
console.log("Carbon Monoxide (ppm): " + (total / counted));
myResults["Carbon Monoxide (ppm)"] = total / counted
}
var counter = 0
var counted = 0;
var total = 0.0
while (counter < datas.length) {
    if (datas[counter]["PM10 (ug/m^3)"] !== "") {
        total = total + datas[counter]["PM10 (ug/m^3)"];
    //console.log("Completed " + (counter + 1) + "/" + counted + 1);
        counted++;
    }
    counter++;
}
//console.log(datas[1]["Nitrogen Oxide (ppm)"]);
    if (((total / counted) > 0)) {
console.log("PM10 (ug/m^3): " + (total / counted));
myResults["PM10 (ug/m^3)"] = total / counted
    }
var counter = 0
var counted = 0;
var total = 0.0
while (counter < datas.length) {
    if (datas[counter]["PM2.5 (ug/m^3)"] !== "") {
        total = total + datas[counter]["PM2.5 (ug/m^3)"];
    //console.log("Completed " + (counter + 1) + "/" + counted + 1);
        counted++;
    }
    counter++;
}
//console.log(datas[1]["Nitrogen Oxide (ppm)"]);
    if (((total / counted) > 0)) {
console.log("PM2.5 (ug/m^3): " + (total / counted));
myResults["PM2.5 (ug/m^3)"] = total / counted
    }
var counter = 0
var counted = 0;
var total = 0.0
while (counter < datas.length) {
    if (datas[counter]["Bsp (Mm^-1)"] !== "") {
        total = total + datas[counter]["Bsp (Mm^-1)"];
    //console.log("Completed " + (counter + 1) + "/" + counted + 1);
        counted++;
    }
    counter++;
}
//console.log(datas[1]["Nitrogen Oxide (ppm)"]);
    if ((total / counted) > 0) {
console.log("Bsp (Mm^-1): " + (total / counted));
myResults["Bsp (Mm^-1)"] = total / counted
    }
fs.writeFile(result["location"] + "_average.json", JSON.stringify(myResults), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved in " + result["location"] + "_average.json");
});

});

