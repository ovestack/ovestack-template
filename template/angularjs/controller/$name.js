function Controller(scope,Sys,$timeout) {

}

module.exports = function(mod, app) {
    mod.controller('<$= moduleName $>', ['$scope', 'Sys', '$timeout', Controller])
}