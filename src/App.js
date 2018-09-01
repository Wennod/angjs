import angular from 'angular';

import WeatherService from './components/Weather-component/Weather.service';
import WeatherComponent from './components/Weather-component/Weather.component';
import MenuComponent from './components/Menu-component/Menu.component';

angular.module('app', [])
    .component('weatherComponent', WeatherComponent)
    .component('menuComponent', MenuComponent)    
    .service('weatherService', WeatherService);
    
angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
})    