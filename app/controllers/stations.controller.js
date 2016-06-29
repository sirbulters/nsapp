(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StationsController', StationsController);

    function StationsController($http) {

        var vm = this;
        vm.map = { center: { latitude: 52.1326, longitude: 5.2913 }, zoom: 7 };

        vm.newStation = {};

        vm.setStation = function(currentStation){
            if(vm.currentStation != currentStation)
                vm.currentStation = currentStation ,
                vm.map = { center: { latitude: vm.currentStation.geoLat, longitude: vm.currentStation.geoLong }, zoom: 15 };
            else
                vm.currentStation = undefined;
        };

        vm.createStation = function(){
            var newStation = {
                name: vm.newStation.name,
                age: vm.newStation.age
            }

            vm.allStations.splice(0, 0, newStation);
            //vm.allStations.push(newStation);

            vm.newStation = {};
        }

        vm.allStations = [
            {name:"Anton", age:18},
            {name:"Joris", age:29},
            {name:"Cees", age:19},
            {name:"Ryan", age:18},
            {name:"Jesse", age:18},
            {name:"Idris", age:20},
            {name:"Donovan", age:18}
        ];

        $http.get('data/trainstations.json').then(function(stations){
            vm.allStations = stations.data;
        });

    }


})();
