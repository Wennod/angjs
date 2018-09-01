class WeatherService {
    constructor($http) {
        this.$http = $http;
    }

    getWeather() {
        return this.$http.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.data)
            // .then(response => response);
    }

}

WeatherService.$inject = ['$http']; 

export default WeatherService;