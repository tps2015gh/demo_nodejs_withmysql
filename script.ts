//var module = angular.module("mySuperAwesomeApp", []);


/* script.ts start */


//======================
module.component("lists",{
  template: 
          + "<div ng-init='$ctrl.init()'> "
          + "<div style='padding:10px;border:2px solid silver;max-width:20cm;background-color:rgb(240, 240, 255);'>"
          + "<h3>Lists Component:</h3>" 
          + "<BR> LOI= {{$ctrl.listOfItem}} <BR>"
          + "<br>"
          + "<div ng-repeat=' (i,x) in $ctrl.listOfItem '>" 
          + "<br><button ng-click='$ctrl.select(i)'> select row:{{i}}</button>"
          + "<span ng-show='i==$ctrl.idx' style='color:red;padding-left:10px;'>SELECTED</span>"
          + " <item  onchangetype='$ctrl.msg = 123 ' type='x.type' id='x.id' data='x.text'></item>"
          + ""
          + "</div>"
          + "<br><BR>"
          + "<button ng-click='$ctrl.moveup()' >up</button>"
          + "<button ng-click='$ctrl.movedown()' >down</button>"
          + " TEMP = {{$ctrl.temp}} "
          + "<br><br> <button ng-click='$ctrl.save()' style='color:blue;font-weight:bold;font-size:20px;'>save</button>"
          + "<br>{{$ctrl.msg}}<br>"
          + "<br><BR><br>"
          + "<br>ListOfItem= <font color=red>{{$ctrl.listOfItem}}</font>"
          + "<br><br>"
          + "</div>"
          + "</div>"

  ,bindings :{
    data : '=',

  }
  ,controller: function listsController(){
    this.idx = 0
    this.temp = "TEMP";
    this.msg = "msg...";
    this.listOfItem =  [] ;
    class item_type{
         text: string; type: number; id: number; 
    }
    this.init = function (){
        console.log("list . init ")
        var lists_items : item_type[]
        var json_lists_items = localStorage.getItem("lists_items")     
        if( json_lists_items == null){
            lists_items =     [
                  {text:'change server appoint',type:0,id:1}
                  ,{text:'modify appoint',type:0,id:2}
                 ,{text:'report seminar',type:1,id:3}
                 ,{text:'add user appoint',type:1,id:4}
                 ,{text:'create this demo',type:2,id:5}
                ];          
            if(window.localStorage) {
              // localStorage can be used
              console.log("localstorage ok ");
              var json_lists_items = JSON.stringify(lists_items)
              localStorage.setItem("lists_items",json_lists_items);

            } else {
              console.log("localstorage no");
              // can't be used
            }                          
        }// if 
        var json_lists_items2 = localStorage.getItem("lists_items");
        this.listOfItem = JSON.parse(json_lists_items2);
    }// init 

    this.init()

   , this.select = function(i){
        this.idx = i 
   }
   , this.moveup = function(){
        if(this.idx > 0 ){
          this.temp = "MOVEUP "
          var temp = this.listOfItem[this.idx -1 ];
          this.listOfItem[this.idx -1 ] = this.listOfItem[this.idx ];
          this.listOfItem[this.idx ] = temp 
          this.idx -= 1 
        }
    }
   , this.movedown = function(){
        if(this.idx < this.listOfItem.length -1   ){
          this.temp = "MOVEDOWN  "
          var temp = this.listOfItem[this.idx + 1 ];
          this.listOfItem[this.idx +1 ] = this.listOfItem[this.idx ];
          this.listOfItem[this.idx ] = temp 
          this.idx += 1 
        }
    },
    this.upper_changetype = function(){
      this.temp = "on ITEM CHANGE TYPE "  
    }
    ,this.save = function(){
      var json_lists_items = JSON.stringify(this.listOfItem)
      localStorage.setItem("lists_items",json_lists_items);   
      this.msg =   "saved data  \n" + json_lists_items
            + "\n\n ===================== \n\n" 
              ;
      window.alert("SAVE to localStorage OK");

    }

  }// controller
  ,controllerAs: "$ctrl" 
})

module.controller("myAppController", function(){
   this.listOfItem = [1,2,3]
 })