class MenuController {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
        this.$rootScope.$broadcast('sendUp', 'Hello!!');
        this.$rootScope.$on('sendDown', (event, data) => {
            console.log(data);
        })
    }
}

const MenuComponent = {
    controller: MenuController,
}

MenuController.$inject = ['$rootScope'];

export default MenuComponent;