scotchApp.service('mapper', function ($http) {

    this.doctorRegistrationMapper = function (doctorRegistrationObj) {
        
        var doctorRegistration = {
            "aadhaar": doctorRegistrationObj.aadhaarNumber,
            "email": doctorRegistrationObj.email,
            "mobile": doctorRegistrationObj.mobile,
            "name": doctorRegistrationObj.name,
            "password" : doctorRegistrationObj.password
        }
        return doctorRegistration;
    }
});
