var map;

$(document).ready(function() {

    initMap();

  // Place JavaScript code here...
    var chart = new CanvasJS.Chart("myChart", {
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
				{ label: "PM10",  y: 30  },
				{ label: "PM2.5",  y: 28  }
			]
		}
		]
		});
		
		chart.render();
    var percentageParagraph = document.getElementById("percentage")
    percentageParagraph.innerHTML = "Note: This only represents " + "10" + "% of the air."
    $.getJSON("locationData.json", function(data) {
        console.log(data);
});

    var location = prompt("Enter location");
    console.log('this is the location')
    console.log(location);
    $.getJSON ("data/" + String(location) + "_average.json", function(data) {
        console.log(data);
        console.log("Worked")
        data["Nitrogen Oxide (ppm)"]
        chart["data"]["Nitrogen Oxide (ppm)"][1]["y"] = data["Nitrogen Oxide (ppm)"]
        chart["data"]["Nitrogen Dioxide (ppm)"][1]["y"] = data["Nitrogen Dixide (ppm)"]
        chart["data"]["Nitrogen Oxides (ppm)"][1]["y"] = data["Nitrogen Oxides (ppm)"]
        chart["data"]["Carbon Monoxide (ppm)"][1]["y"] = data["Carbon Monoxide (ppm)"]
        chart["data"]["PM10 (ug/m^3)"][1]["y"] = data["PM10 (ug/m^3)"]
        chart["data"]["PM2.5 (ug/m^3)"][1]["y"] = data["PM2.5 (ug/m^3)"]
        chart["data"]["Bsp (Mm^-1)"][1]["y"] = data["Bsp (Mm^-1)"]
        chart.render()
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


placePins = function(data) {
    for each (d in data) {


        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(d["latitude"],d["longitude"]),
          map: map,
          title: d["name"]
        });
    }
}

