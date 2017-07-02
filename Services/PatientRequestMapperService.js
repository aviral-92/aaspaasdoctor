scotchApp.service('patientRequestMapper', function () {

    this.patientRegistrationMapper = function (patientRegistrationUIObj) {

        var patientRegistrationJavaObj = {
            "aadhaar": patientRegistrationUIObj.adhaar,
            "email": patientRegistrationUIObj.email,
            "mobile": patientRegistrationUIObj.mobile,
            "name": patientRegistrationUIObj.name,
            "password": patientRegistrationUIObj.password
        }
        return patientRegistrationJavaObj;
    }

    this.loginPatient = function (loginPatientUiObj) {

        var loginPatientJavaObj = {
            "password": loginPatientUiObj.password,
            "type": "d",
            "encode": false
            if (loginPatientUiObj.username != null) {
                if (loginPatientUiObj.username.includes('@')) {
                    loginPatientJavaObj.email = loginPatientUiObj.username;
                } else {
                    loginPatientJavaObj.mobile = loginPatientUiObj.username;
                }
            }
            return loginPatientJavaObj;
        }
    }
})
