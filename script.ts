//var module = angular.module("mySuperAwesomeApp", []);

var module = angular.module("myApp", []);

module.component("heros", {
  template:  "<a href='{{$ctrl.refurl}}'>{{$ctrl.refurl}}</a><br>"
		+ "<br>" 
		+ "<div class='hero_comp'>"
		+ "My heros:"
		+ "</div>",
  controller: function herosController()
  {
     this.refurl = "https://brianflove.com/2016/12/26/typing-up-your-angular-1-app/"
  },
  controllerAs: "$ctrl" 
});

angular.element(document).ready(function() {
	console.log("OK, REF = https://brianflove.com/2016/12/26/typing-up-your-angular-1-app/");

  angular.bootstrap(document, ["myApp"]);
});