'use strict'
registrationModule.factory('authorsRepository', function ($http, $q) {
    return {
        save: function (glossary) {
            var deferred = $q.defer();
            $http.post('/Authors/Save', glossary)
                .success(function () { deferred.resolve(); })
                .error(function () { deferred.reject(); });
            return deferred.promise;
        }
    };
});