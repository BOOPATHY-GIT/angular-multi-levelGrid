var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData = [{name: "Moroni", age: 50,parentId:0,id:1,expanded:true},
  					 {name: "Tiancum", age: 43,parentId:1,expanded:false},
						 {name: "Jacob", age: 27,parentId:1,expanded:false},
						 {name: "Nephi", age: 29,parentId:0,id:2,expanded:true},
						 {name: "Enos", age: 34,parentId:2,expanded:true}];
    $scope.gridOptions = { 
        data: 'myData',
        columnDefs: [{field: 'id',displayName:'',width:20,cellTemplate:'<div ng-show="row.getProperty(\'id\')" ng-click="toggleExpansion(row.getProperty(col.field))"><i class="fa fa-plus-square-o" ng-class="{ fa-minus-square-o: row.getProperty(\'expanded\')}"></i></div>'},
                    {field: 'name', displayName: 'Name'},
                     {field:'age', displayName:'Age', 
                     cellTemplate: '<div><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}],
        rowTemplate:'<div style="height: 100%" ng-style="{height: 5}" ng-class="{noheight: !row.getProperty(\'expanded\')}" ng-show="row.getProperty(\'expanded\')"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                           '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                           '<div ng-cell></div>' +
                     '</div></div>'
                     
        };
        
    $scope.toggleExpansion = function(id) {
      //alert('Here! id: ' + id);
      for (var i=0;i<$scope.myData.length;++i){
        if ($scope.myData[i].parentId ===id){
          //alert("setting value to " + !$scope.myData[i].expanded);
          $scope.myData[i].expanded = !$scope.myData[i].expanded;
        }
      }
    }
});