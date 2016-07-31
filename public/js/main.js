var map;
var chart;

$(document).ready(function() {

    initMap();

  // Place JavaScript code here...
    chart = new CanvasJS.Chart("myChart", {
		title:{
			text: "Pollutants in the air"              
		},
		data: [              
		{
			// You can change it. 
			type: "pie",
			dataPoints: [
				{ label: "Carbon Monoxide",  y: 10  },
				{ label: "Nitrogen Dioxide", y: 15  },
				{ label: "Nitrogen Oxide", y: 25  },
                {label: "Nitrogen Oxides", y: 10},
				{ label: "PM10",  y: 30  },
				{ label: "PM2.5",  y: 28  },
                { label: "Bsp", y: 5}

			]
		}
		]
		});
		
		chart.render();
    var percentageParagraph = document.getElementById("percentage")

    $.getJSON("locationData.json", function(data) {
        console.log(data);
        placePins()
    });

    //$.getJSON("locationData.json", placePins());

    var location = prompt("Enter location");
    console.log('this is the location')
    console.log(location);
    $.getJSON ("data/" + location + "_average.json", function(data) {
        console.log(data);
        console.log("Worked")
        //data["Nitrogen Oxide (ppm)"]
        console.log(chart);
        chart["options"]["data"][0]["dataPoints"][0]["y"] = data["Carbon Monoxide (ppm)"]
        chart["options"]["data"][0]["dataPoints"][1]["y"] = data["Nitrogen Dioxide (ppm)"]
        chart["options"]["data"][0]["dataPoints"][2]["y"] = data["Nitrogen Oxide (ppm)"]
        chart["options"]["data"][0]["dataPoints"][3]["y"] = data["Nitrogen Oxides (ppm)"]
        chart["options"]["data"][0]["dataPoints"][4]["y"] = data["PM10 (ug/m^3)"]
        chart["options"]["data"][0]["dataPoints"][5]["y"] = data["PM2.5 (ug/m^3)"]
        chart["options"]["data"][0]["dataPoints"][6]["y"] = data["Bsp (Mm^-1)"]
        chart.render()
        percentageParagraph.innerHTML = "Note: This only represents " + (data["Carbon Monoxide (ppm)"] + data["Nitrogen Dioxide (ppm)"] + data["Nitrogen Oxide (ppm)"] + data["Nitrogen Oxides (ppm)"] + data["PM10 (ug/m^3)"] + data["PM2.5 (ug/m^3)"] + data["Bsp (Mm^-1)"]) + "% of the air."
    })
    
    //chart["data"]["dataPoints"][1]["y"] = "value"


});


function initMap() {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {
            center: {lat: -20.9176, lng: 142.7028},
            zoom: 5
        });
      }


function placePins(data) {
    console.log("Plcing pins")
    //data = JSON.parse(data);
    console.log("Data below")
    console.log(data);
    console.log(JSON.parse(undefined))
    var myCounter = 0;
    /*
    while (myCounter < data.length) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(data[myCounter]["latitude"], data[myCounter]["longitude"]),
          map: map,
          title: data[myCounter]["name"]
        });
    myCounter++;
    }
    */
}

