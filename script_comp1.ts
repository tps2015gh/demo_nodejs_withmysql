/*   script_comp1.ts start */
module.component("item", {
  template:  ""
		+ "" 
		+ "<div ng-class='$ctrl.class' "
    + "   " 
    + " ng-init='$ctrl.onInit()'>"    
    + "<button ng-click='$ctrl.onclick();$ctrl.onchangetype(2);'>change type={{$ctrl.type}}</button>&nbsp;"
		+ "{{$ctrl.title}} : {{$ctrl.id}} : '{{$ctrl.data}}' "
		+ "</div>" 
    + "<div ng-if=\" $ctrl.showRef==true \">"
    + "<br><b>REF ,  type={{$ctrl.type}} </b>"
    + "<div ng-repeat='url in $ctrl.ref_urls' >"
    + "<a href='{{url}}'>{{url}}</a>"
    + "</div> "
    + "</div> "
  ,
  bindings :{
    id: '=',
    data: '=',
    type: '=',
    showRef : '=',
    selected : '@',
    onchangetype : '&'
  },
  controller: function itemController()
  {
    this.temp = "TEMP"
     ,this.onInit = ()=>{
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
     
     this.onclick =function(){
        //this.onchangetype() // raise event to upper
        this.temp = "CLICKED"
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


console.log("script_comp1.ts end ")