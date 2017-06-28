var registrationModule = angular.module("registrationModule", [])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/Registration/Glossary', { templateUrl: '/templates/glossary.html', controller: 'GlossaryController' })
        $routeProvider.when('/Registration/CreateGlossary', { templateUrl: '/templates/create-glossary.html', controller: 'AuthorsController' });
        $locationProvider.html5Mode(true);
    })