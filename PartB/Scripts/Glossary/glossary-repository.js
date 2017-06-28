registrationModule.factory('glossaryRepository', function ($http, $q) {
    return {
        get: function () {
            var deferred = $q.defer();
            $http.get('/Glossary').success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        },

        save: function (glossary) {
            var deferred = $q.defer();
            $http.post('/Authors/Save', glossary)
                .success(function () { deferred.resolve(); })
                .error(function () { deferred.reject(); });
            return deferred.promise;
        },

        deleteGlossary: function (glossary) {
        var deferred = $q.defer();
        $http.post('/Authors/Delete', glossary)
            .success(function () { deferred.resolve(); })
            .error(function () { deferred.reject(); });
        return deferred.promise;
    }
    };
});