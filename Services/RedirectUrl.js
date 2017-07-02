scotchApp.service('urlRedirect', function () {

    this.doctorLoginURL = function () {
        return '/QA/DoctorDashboard.html#/home';
    }

    this.signout = function () {
        return '/QA/index.html#/loginPage';
    }

    this.patientLoginURL = function () {
        return '/QA/PatientDashboard.html#/patientHome';
    }
});
