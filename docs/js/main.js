/*
var selected = 0;
$('#id').dialog({
  buttons: {
    "First": function() {
      selected = 1;
    },
    "Second": function() {
      selected = 2;
    },
    "Third": function() {
      selected = 3;
    },
    "Fourth": function() {
      selected = 4;
    }
  }
});
*/

//var r = confirm("Press a button");
//var r = confirm("Press a button");











































var map;
var percentageParagraph = document.getElementById("percentage");
var chart;
var selectedTitle;
//var mode = 1;
var place;
var locationData = {"boatcreek":{"name":"Boat Creek (Gladstone)","latitude":-23.82,"longitude":151.1539,"height":10},"boyneisland":{"name":"Boyne Island (Gladstone)","latitude":-23.9408,"longitude":151.3507,"height":10},"brisbanecbd":{"name":"Brisbane CBD","latitude":-27.4774,"longitude":153.0281,"height":4},"cannonhill":{"name":"Cannon Hill","latitude":-27.4654,"longitude":153.0872,"height":10},"clinton":{"name":"Clinton (Gladstone)","latitude":-23.8701,"longitude":151.2216,"height":10},"deceptionbay":{"name":"Deception Bay","latitude":-27.1935,"longitude":153.0347,"height":10},"flindersview":{"name":"Flinders View (Ipswich)","latitude":-27.6528,"longitude":152.7741,"height":10},"jondaryan":{"name":"Jondaryan","latitude":-27.3713,"longitude":151.5934,"height":10}, "luscombe":{"name":"Luscombe","latitude":-27.7747,"longitude":153.2014,"height":10},"lytton":{"name":"Lytton","latitude":-27.4065,"longitude":153.1527,"height":10},"mountaincreek":{"name":"Mountain Creek (Sunshine Coast)","latitude":-26.6917,"longitude":153.1038,"height":10},"mutdapilly":{"name":"Mutdapilly","latitude":-27.7528,"longitude":152.6509,"height":10},"northmaclean":{"name":"North Maclean","latitude":-27.7708,"longitude":153.03,"height":10},"pimlico":{"name":"Pimlico (Townsville)","latitude":-19.2871,"longitude":146.7813,"height":10},"pinkenba":{"name":"Pinkenba","latitude":-27.4187,"longitude":153.133,"height":10},"rocklea":{"name":"Rocklea","latitude":-27.5358,"longitude":152.9934,"height":10},"southbrisbane":{"name":"South Brisbane","latitude":-27.4848,"longitude":153.0321,"height":10},"southgladstone":{"name":"South Gladstone","latitude":-23.8627,"longitude":151.2704,"height":10},"springwood":{"name":"Springwood","latitude":-27.6125,"longitude":153.1356,"height":10},"targinie":{"name":"Targinie (Gladstone)","latitude":-23.7743,"longitude":151.106,"height":10},"townsvillecoastguard":{"name":"Townsville Coast Guard","latitude":-19.2542,"longitude":146.8257,"height":10},"westmackay":{"name":"West Mackay","latitude":-21.1595,"longitude":149.1549,"height":10},"woolloongabba":{"name":"Woolloongabba","latitude":-27.4975,"longitude":153.035,"height":10},"wynumnorth":{"name":"Wynum North","latitude":-27.4296,"longitude":153.1581,"height":10},"wynumwest":{"name":"Wynum West","latitude":-27.4379,"longitude":153.1495,"height":10}}





//locationData = JSON.parse(locationData);
console.log(locationData)
$(document).ready(function() {

    initMap();
    placePins();
    /*
    $.get("locationData.json", function(data) {
        console.log("Downloading map pins")
        console.log(data);
        placePins(data)
    });
    */
  // Place JavaScript code here...
    chart = new CanvasJS.Chart("myChart", {
		title:{
			text: "Select a location on the right."
		},
		data: [              
		{
			// You can change it. 
			type: "pie",
			dataPoints: [
				{ label: "Carbon Monoxide",  y: 0  },
				{ label: "Nitrogen Dioxide", y: 0  },
				{ label: "Nitrogen Oxide", y: 0  },
                { label: "Nitrogen Oxides", y: 0},
				{ label: "PM10",  y: 0  },
				{ label: "PM2.5",  y: 0 },
                { label: "Bsp", y: 0},
                { label: "TSP (ug/m^3)", y: 0}

			]
		}
		]
		});
		
		chart.render();

});


function initMap() {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {
            center: {lat: -20.9176, lng: 142.7028},
            zoom: 5
        });
      }


function placePins() {
    console.log("Placing pins")
    //data = JSON.parse(data);
    //console.log("Data below")
    //console.log(data);
    //console.log(JSON.parse(data))
    var myCounter = 0;
    console.log("Location data length below")
    console.log(locationData.length)
    while (myCounter < Object.keys(locationData).length) {
        console.log("Adding " + locationData[Object.keys(locationData)[myCounter]]["name"] + " with lat of " + locationData[Object.keys(locationData)[myCounter]]["latitude"] + " and long of " + locationData[Object.keys(locationData)[myCounter]]["longitude"])
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(locationData[Object.keys(locationData)[myCounter]]["latitude"], locationData[Object.keys(locationData)[myCounter]]["longitude"]),
          map: map,
          title: locationData[Object.keys(locationData)[myCounter]]["name"],
          key: Object.keys(locationData)[myCounter],
        });
        myCounter++;
        marker.addListener('click', function() {
            console.log("Getting data")
            console.log(this["key"])
            selectedTitle = this.title
            $.getJSON ("data/" + this.key + "_average.json", function(data) {
            console.log("Downloaded!")
            console.log(data);
            //console.log("Worked")
            //data["Nitrogen Oxide (ppm)"]
            console.log(chart);
                console.log(data["Carbon Monoxide (ppm)"]);
                console.log(data["Nitrogen Dioxide (ppm)"]);
                console.log(data["Nitrogen Oxide (ppm)"]);
                console.log(data["Nitrogen Oxides (ppm)"]);
                console.log(data["PM10 (ug/m^3)"]);
                console.log(data["PM2.5 (ug/m^3)"]);
                console.log(data["Bsp (Mm^-1)"]);
                console.log(data["TSP (ug/m^3)"]);
            var totall = 0.0;
            var mode = confirm("Press ok for ppm, cancel for ug/m^3!");
            if (mode == true) {
                if (data["Carbon Monoxide (ppm)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][0]["y"] = data["Carbon Monoxide (ppm)"]
                    totall = totall + data["Carbon Monoxide (ppm)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][0]["y"] = 0
                }
                if (data["Nitrogen Dioxide (ppm)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][1]["y"] = data["Nitrogen Dioxide (ppm)"]
                    totall = totall + data["Nitrogen Dioxide (ppm)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][1]["y"] = 0
                }
                if (data["Nitrogen Oxide (ppm)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][2]["y"] = data["Nitrogen Oxide (ppm)"]
                    totall = totall + data["Nitrogen Oxide (ppm)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][2]["y"] = 0
                }
                if (data["Nitrogen Oxides (ppm)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][3]["y"] = data["Nitrogen Oxides (ppm)"]
                    totall = totall + data["Nitrogen Oxides (ppm)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][3]["y"] = 0
                }
            }
            if (mode == false) {
                if (data["PM10 (ug/m^3)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][4]["y"] = data["PM10 (ug/m^3)"]
                    totall = totall + data["PM10 (ug/m^3)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][4]["y"] = 0
                }
                if (data["PM2.5 (ug/m^3)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][5]["y"] = data["PM2.5 (ug/m^3)"]
                    totall = totall + data["PM2.5 (ug/m^3)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][5]["y"] = 0
                }
                if (data["Bsp (Mm^-1)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][6]["y"] = data["Bsp (Mm^-1)"]
                    totall = totall + data["Bsp (Mm^-1)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][6]["y"] = 0
                }
                if (data["TSP (ug/m^3)"] > 0) {
                    chart["options"]["data"][0]["dataPoints"][7]["y"] = data["TSP (ug/m^3)"]
                    totall = totall + data["TSP (ug/m^3)"]
                }
                else {
                    chart["options"]["data"][0]["dataPoints"][7 ]["y"] = 0
                }
            }
            

            chart["options"]["title"]["text"] = "Air Quality for " + selectedTitle
            chart.render()
            console.log("Total" + totall);
            percentageParagraph.innerHTML = totall + "%"
            $("#myChart").hide()
            $("#myChart").show()
            if (percentageParagraph.innerHTML === "0%") {
                $("#myChart").hide()
            }
            else {
                $("#myChart").show()
            }
            });
            
          });
    }

}

