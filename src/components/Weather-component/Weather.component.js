
class WeatherController {
    constructor(weatherService, $rootScope) {
        this.$rootScope = $rootScope;
        const data = weatherService.getWeather();
        this.$rootScope.$emit('sendDown', 'data!!');
        this.$rootScope.$on('sendUp', (event, data) => {
            console.log(data);
        })
    }
}

const WeatherComponent = {
    controller: WeatherController,  
    template: ' <menu-component></menu-component>'
}

WeatherController.$inject = ['weatherService', '$rootScope']; 

export default WeatherComponent;
