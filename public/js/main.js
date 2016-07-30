$(document).ready(function() {

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
    var location = prompt("Enter location")
    $.getJSON ("data/" + location + "-aq-2015.json", function(data) {
        console.log(data);
    })
    //chart["data"]["dataPoints"][1]["y"] = "value"


});


function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: -20.9176, lng: 142.7028},
            zoom: 5
        });
      }




