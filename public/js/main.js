$(document).ready(function() {

  // Place JavaScript code here...
    var chart = new CanvasJS.Chart("myChart", {
		title:{
			text: "Concentration of gases in the atmosphere"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "bar",
			dataPoints: [
				{ label: "Carbon Dioxide",  y: 10  },
				{ label: "Oxygen", y: 15  },
				{ label: "Nitrogen", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]
		}
		]
		});
		
		chart.render();
    var percentageParagraph = document.getElementById("percentage")
    percentageParagraph.body = "Note: This only represents " + "10" + "% of the air."


});
