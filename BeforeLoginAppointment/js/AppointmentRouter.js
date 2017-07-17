scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for book Appointment
        .when('/bookAppointment', {
            templateUrl: 'BeforeLoginAppointment/BookAppointment.html',
            controller: 'bookAppointment'
        })

        // route for Search Doctor
        .when('/searchDoctor', {
            templateUrl: 'BeforeLoginAppointment/SearchDoctor.html',
            controller: 'searchDoctor'
        })
});
