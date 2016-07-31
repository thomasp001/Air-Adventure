var map;
var chart;
var locationData = {"abbotpoint":{"name":"Abbot Point","latitude":-19.9496,"longitude":148.0482,"height":10},"aldoga":{"name":"Aldoga (Gladstone)","latitude":-23.8409,"longitude":151.0627,"height":2},"ayr":{"name":"Ayr","latitude":-19.5839,"longitude":147.4059,"height":10},"aucklandpoint":{"name":"Auckland Point (Gladstone)","latitude":-23.8349,"longitude":151.2539,"height":10},"boatcreek":{"name":"Boat Creek (Gladstone)","latitude":-23.82,"longitude":151.1539,"height":10},"boyneisland":{"name":"Boyne Island (Gladstone)","latitude":-23.9408,"longitude":151.3507,"height":10},"brisbanecbd":{"name":"Brisbane CBD","latitude":-27.4774,"longitude":153.0281,"height":4},"cannonhill":{"name":"Cannon Hill","latitude":-27.4654,"longitude":153.0872,"height":10},"clinton":{"name":"Clinton (Gladstone)","latitude":-23.8701,"longitude":151.2216,"height":10},"deceptionbay":{"name":"Deception Bay","latitude":-27.1935,"longitude":153.0347,"height":10},"flindersview":{"name":"Flinders View (Ipswich)","latitude":-27.6528,"longitude":152.7741,"height":10},"gatton":{"name":"Gatton (South East Queensland)","latitude":-27.5434,"longitude":152.3343,"height":10},"jondaryan":{"name":"Jondaryan","latitude":-27.3713,"longitude":151.5934,"height":10},"josephville":{"name":"Josephville","latitude":-27.9962,"longitude":152.9257,"height":10},"luscombe":{"name":"Luscombe","latitude":-27.7747,"longitude":153.2014,"height":10},"lytton":{"name":"Lytton","latitude":-27.4065,"longitude":153.1527,"height":10},"memorialpark":{"name":"Mamorial Park (Gladstone)","latitude":-23.8426,"longitude":151.2534,"height":4},"menzies":{"name":"Menzies (Mount Isa)","latitude":-20.7167,"longitude":139.492,"height":10},"moranbah":{"name":"Moranbah","latitude":-21.9995,"longitude":148.0713,"height":10},"mountaincreek":{"name":"Mountain Creek (Sunshine Coast)","latitude":-26.6917,"longitude":153.1038,"height":10},"mutdapilly":{"name":"Mutdapilly","latitude":-27.7528,"longitude":152.6509,"height":10},"northmaclean":{"name":"North Maclean","latitude":-27.7708,"longitude":153.03,"height":10},"pimlico":{"name":"Pimlico (Townsville)","latitude":-19.2871,"longitude":146.7813,"height":10},"pinkenba":{"name":"Pinkenba","latitude":-27.4187,"longitude":153.133,"height":10},"rocklea":{"name":"Rocklea","latitude":-27.5358,"longitude":152.9934,"height":10},"southbrisbane":{"name":"South Brisbane","latitude":-27.4848,"longitude":153.0321,"height":10},"southgladstone":{"name":"South Gladstone","latitude":-23.8627,"longitude":151.2704,"height":10},"springwood":{"name":"Springwood","latitude":-27.6125,"longitude":153.1356,"height":10},"stuart":{"name":"Stuart","latitude":-19.3212,"longitude":146.8422,"height":10},"targinie":{"name":"Targinie (Gladstone)","latitude":-23.7743,"longitude":151.106,"height":10},"thegap":{"name":"The Gap (Mount Isa)","latitude":-20.7264,"longitude":139.4977,"height":10},"townsvillecoastguard":{"name":"Townsville Coast Guard","latitude":-19.2542,"longitude":146.8257,"height":10},"westmackay":{"name":"West Mackay","latitude":-21.1595,"longitude":149.1549,"height":10},"woolloongabba":{"name":"Woolloongabba","latitude":-27.4975,"longitude":153.035,"height":10},"wynumnorth":{"name":"Wynum North","latitude":-27.4296,"longitude":153.1581,"height":10},"wynumwest":{"name":"Wynum West","latitude":-27.4379,"longitude":153.1495,"height":10}}

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
			text: "Pollutants in the air"              
		},
		data: [              
		{
			// You can change it. 
			type: "pie",
			dataPoints: [
				{ label: "Carbon Monoxide",  y: 0  },
				{ label: "Nitrogen Dioxide", y: 0  },
				{ label: "Nitrogen Oxide", y: 0  },
                {label: "Nitrogen Oxides", y: 0},
				{ label: "PM10",  y: 0  },
				{ label: "PM2.5",  y: 0 },
                { label: "Bsp", y: 0}

			]
		}
		]
		});
		
		chart.render();
    console.log(chart);
    var percentageParagraph = document.getElementById("percentage");



    //$.getJSON("locationData.json", placePins());

    //var location = prompt("Enter location");
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
        percentageParagraph.innerHTML = "Note: This only represents " + (data["Carbon Monoxide (ppm)"] + data["Nitrogen Dioxide (ppm)"] + data["Nitrogen Oxide (ppm)"] + data["Nitrogen Oxides (ppm)"] + data["PM10 (ug/m^3)"] + data["PM2.5 (ug/m^3)"] + data["Bsp (Mm^-1)"]) + "% of the air.";
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
            $.getJSON ("data/" + marker["key"] + "_average.json", function(data) {
            console.log(data);
            //console.log("Worked")
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
            });
          });
    }

}

