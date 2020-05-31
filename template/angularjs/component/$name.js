
var app = require('core')

app.regDirective('<$= name $>', ['$timeout', 'Sys', function($timeout, Sys) {
     return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        template: __inline('./<$= name $>.tpl'),
        scope: {},
        link: function(scope, element, attrs, ctrl, transclude) {

        },
        controller: ['$scope', function(scope) {

        }]
     }
}]