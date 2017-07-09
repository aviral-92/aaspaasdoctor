scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for book Appointment
        .when('/appointment', {
            templateUrl: 'BeforeLoginAppointment/BookAppointment.html',
            controller: 'appointment'
        })

        // route for Search Doctor
        .when('/appointmentSearch', {
            templateUrl: 'BeforeLoginAppointment/SearchDoctor.html',
            controller: 'appointmentSearch'
        })
});
