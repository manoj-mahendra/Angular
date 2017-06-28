'use strict'
registrationModule.controller("AuthorsController", function ($scope, authorsRepository, $location) {
    $scope.save = function (glossary) {
        $scope.error = false;
        authorsRepository.save(glossary).then(
            function () { $location.url('Registration/Glossary'); },
            function () { $scope.error = true; }
            );
    };
});