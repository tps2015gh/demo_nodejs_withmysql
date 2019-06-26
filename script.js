//var module = angular.module("mySuperAwesomeApp", []);
var module = angular.module("myApp", []);
module.component("heros", {
    template: ""
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
        + "</div> ",
    bindings: {
        data: '@',
        type: '@',
        showref: '@'
    },
    controller: function herosController() {
        var _this = this;
        this.onInit = function () {
            if (_this.type == null) {
                _this.type = 0;
            }
            _this.process();
        };
        this.process = function () {
            if (_this.data == null) {
                _this.data = "(null)";
            }
            if (_this.type == 1) {
                _this.class = "hero_comp1";
                _this.title = "Todo";
            }
            else if (_this.type == 2) {
                _this.class = "hero_comp2";
                _this.title = "Finished";
            }
            else {
                _this.class = "hero_comp_null";
                _this.title = "Pause ";
            }
        };
        this.ref_urls = ["https://www.w3schools.com/angular/angular_services.asp",
            "https://brianflove.com/2016/12/26/typing-up-your-angular-1-app/"
        ]
            , this.onclick = function () {
                _this.type += 1;
                if (_this.type > 2) {
                    _this.type = 0;
                }
                _this.process();
            };
    },
    controllerAs: "$ctrl"
});
angular.element(document).ready(function () {
    console.log("OK, REF = https://brianflove.com/2016/12/26/typing-up-your-angular-1-app/");
    angular.bootstrap(document, ["myApp"]);
});
