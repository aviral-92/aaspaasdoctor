scotchApp.service('urlRedirect', function () {

    this.doctorLoginURL = function () {
        return '/DoctorDashboard.html#/home';
    }

    this.signout = function () {
        return '/index.html#/loginPage';
    }

    this.patientLoginURL = function () {
        return '/PatientDashboard.html#/patientHome';
    }
});
