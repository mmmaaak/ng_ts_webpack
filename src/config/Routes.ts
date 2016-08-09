export function routes(routeProvider: ng.route.IRouteProvider) {
    routeProvider
        .when('/', {
            templateUrl: '/tpl/main.controller.html',
            controller: 'Core.MainController',
            controllerAs: 'vm'
        })
        .when('/about', {
            templateUrl: '/tpl/about.controller.html',
            controller: 'Core.AboutController',
            controllerAs: 'vm'
        })
        .otherwise('/');
}