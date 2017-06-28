'use strict'
registrationModule.controller("GlossaryController", function ($scope, glossaryRepository, $location) {
    glossaryRepository.get().then(function (glossaries) {
        $scope.glossaries = glossaries;
        angular.forEach($scope.glossaries, function (obj) {
            obj["showEdit"] = true;
        })
    });

    $scope.toggleEdit = function (glossary) {
        glossary.showEdit = glossary.showEdit ? false : true;
    };

    $scope.save = function (glossary) {
        $scope.error = false;
        glossaryRepository.save(glossary).then(
            function () { $location.url('Registration/Glossary'); },
            function () { $scope.error = true; }
            );
    };

    $scope.delete = function (glossary) {
        $scope.error = false;
        glossaryRepository.deleteGlossary(glossary).then(
            function () { $location.url('Registration/Glossary'); },
            function () { $scope.error = true; }
            );
    };
});