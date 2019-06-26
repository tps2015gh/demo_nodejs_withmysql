//var module = angular.module("mySuperAwesomeApp", []);

var module = angular.module("myApp", []);

module.component("heros", {
  template:  ""
		+ "" 
		+ "<div ng-class='$ctrl.class' "
    + " ng-click='$ctrl.onclick()' " 
    + " ng-init='$ctrl.onInit()'>"
    + "<button>change</button>&nbsp;"
		+ "{{$ctrl.title}}: '{{$ctrl.data}}' "
		+ "</div>"
    + "<div ng-if='show_ref' >"
    + "<br><b>REF  {{$ctrl.type}} </b>"
    + "<div ng-repeat='url in $ctrl.ref_urls' >"
    + "<a href='{{url}}'>{{url}}</a>"
    + "</div> "
    + "</div> "
  ,
  bindings :{
    data: '@',
    type: '@'
    showref : '@'
  },
  controller: function herosController()
  {
      
     this.onInit = ()=>{
        if(this.type == null )
          {this.type  = 0 }
        this.process()
     }
     this.process = () => {
        if(this.data == null){
          this.data = "(null)"  
        }
        if( this.type == 1){
          this.class="hero_comp1"
          this.title = "Todo"
        }else if( this.type == 2 ){
          this.class="hero_comp2"
          this.title = "Finished"
        }else{
          this.class="hero_comp_null"
          this.title = "Pause "
        }
     }
     this.ref_urls = ["https://www.w3schools.com/angular/angular_services.asp"
            , "https://brianflove.com/2016/12/26/typing-up-your-angular-1-app/"
            ]
     ,this.onclick = ()=>{
        this.type +=1 
        if(this.type > 2 ){ this.type = 0 }
        this.process()
     }
      
  },
  controllerAs: "$ctrl" 
});

angular.element(document).ready(function() {
	console.log("OK, REF = https://brianflove.com/2016/12/26/typing-up-your-angular-1-app/");

  angular.bootstrap(document, ["myApp"]);
});