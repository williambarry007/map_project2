var initialApiaries = [
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.165388,-87.739671]},
				"fieldName":"Long North",
				"owner":"Jim Barry"
			},

			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.162907,-87.7428645]},
				"fieldName":"Long South",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.154356,-87.740085]},
				"fieldName":"Bailey",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.162621,-87.735356]},
				"fieldName":"Acorn Tree",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.170098,-87.737866]},
				"fieldName":"Money Field",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.198101-87.772925]},
				"fieldName":"Jimmy Gilliam",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.157510,-87.291977]},
				"fieldName":"Chris",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.103980,-87.469994]},
				"fieldName":"Jamey Shows",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.072128,-87.665066]},
				"fieldName":"Bunn",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.051425,-87.715746]},
				"fieldName":"Home Side field",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.051000,-87.715650]},
				"fieldName":"Home Front",
				"owner":"Jim Barry"
			},
			{
				"type":"Apairy",
				"geometry":{"type":"Point","coordinates":[33.050978-87.716837]},
				"fieldName":"Home Garden",
				"owner":"Jim Barry"
			}
		]

var Apairy = function(data) {		
	this.type      = ko.observable(data.type);
  this.latitude  = ko.observable(data.geometry.coordinates[0]);
  this.longitude = ko.observable(data.geometry.coordinates[1]);
  this.fieldName = ko.observable(data.fieldName);
  this.owner     = ko.observable(data.owner);
}

var ApiaryList = function() {
	var self = this;

	this.apiaryList = ko.observableArray([]);

	initialApiaries.forEach(function(apiaryItem){
		self.apiaryList.push( new Apairy(apiaryItem) );
	});
	this.currentApiary = ko.observable(this.apiaryList()[0]);

	this.setApiary = function(clickedApiary) {	  
	  console.log("type      = " + clickedApiary.type());
    console.log("latitude  = " + clickedApiary.latitude());
    console.log("longitude = " + clickedApiary.longitude());
    console.log("fieldName = " + clickedApiary.fieldName());
    console.log("owner     = " + clickedApiary.owner());
	  
		//console.log("Just clicked on apiary, " + clickedApiary.fieldName);
		self.currentApiary(clickedApiary);
	};
};

ko.applyBindings(new ApiaryList());
