/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via Restangular
 * - exposes the model to the template and provides event handlers
 *
 * root_path & assets_path variables are set inside index.html.twig globally
 *
 * @type {angular.Module}
 */



    app.controller('Login', ['AuthHandler', '$scope', '$rootScope', '$window', '$cookies', 'Restangular', 'Digest', '$modal', function (AuthHandler, $scope, $rootScope, $window, $cookies, Restangular, Digest, $modal) {
        
		$rootScope.hideit = true;
		// On Submit function
        $scope.getSalt = function () {
            var username = $scope.username;
            var password = $scope.password;
            // Get Salt
            Restangular
                .oneUrl('salts', root_path + 'public/salts/' + username).get()
                .then(function (response) {
                    var salt = response.salt;
                    // Encrypt password accordingly to generate secret
                    Digest.cipher(password, salt).then(function (secret) {
                        // Display salt and secret for this example
                        $scope.salt = salt;
                        $scope.secret = secret;

                       
                        // Store auth informations in cookies for page refresh
                        $cookies.put('username', $scope.username);
                        $cookies.put('secret', $scope.secret);

                        $window.location = '#/params';
                    }, function (err) {
                        console.log(err);
                    });
                });
        };
    }]);
	
	