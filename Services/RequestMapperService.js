scotchApp.service('mapper', function ($http) {

    this.doctorRegistrationMapper = function (doctorRegistrationUiObj) {

        var doctorRegistrationJavaObj = {
            "aadhaar": doctorRegistrationUiObj.aadhaarNumber,
            "email": doctorRegistrationUiObj.email,
            "mobile": doctorRegistrationUiObj.mobile,
            "name": doctorRegistrationUiObj.name,
            "password": doctorRegistrationUiObj.password
        }
        return doctorRegistrationJavaObj;
    }

    this.updateDoctor = function (updateDoctorUiObj) {

        var updateDoctorJavaObj = {
            "dId": updateDoctorUiObj.dId,
            "dateOfBrith": updateDoctorUiObj.dob,
            "clinic": updateDoctorUiObj.clinicName, //TODO clinicName field to be checked in html.
            "desc": updateDoctorUiObj.description,
            "doctorAddress": {
                "city": updateDoctorUiObj.city, //TODO Clinic City field should be added.
                "dId": updateDoctorUiObj.dId,
                "landmark": updateDoctorUiObj.landmark, //TODO Clinic landmark to be added.
                "latitude": updateDoctorUiObj.latitude, //TODO check latitude.
                "longitude": updateDoctorUiObj.longitude, //TODO check longitude.
                "pin": updateDoctorUiObj.pin, //TODO Clinic pin to be added.
                "state": updateDoctorUiObj.state, //TODO Clinic State to be added.
                "timing ": updateDoctorUiObj.timing //TODO Clinic timing to be added.
            },
            "expertise": updateDoctorUiObj.expertized,
            "fee": updateDoctorUiObj.oneTimeFee,
            "freeDay": updateDoctorUiObj.daysCheckFree,
            "gender": updateDoctorUiObj.gender,
            "highestDegree": updateDoctorUiObj.highestDegree,
            "homeAddress": updateDoctorUiObj.homeAddress,
            "isGoverment": updateDoctorUiObj.isGovernmentServent,
            "name": updateDoctorUiObj.name, //TODO check name in request.
            "profilePicPath": updateDoctorUiObj.profilePicPath, //TODO need to check this field.
            "selfDescription": updateDoctorUiObj.selfDescription, //TODO need to add this field.
            "state": updateDoctorUiObj.state,
            "tandCAccepted": updateDoctorUiObj.tandCAccepted, //TODO need to validate this field.
            "timing": updateDoctorUiObj.timing
        }
        if (updateDoctorUiObj.adhaar != null) {
            updateDoctorJavaObj.aadhaar: updateDoctorUiObj.adhaar
        }
        if (updateDoctorUiObj.mobile != null) {
            updateDoctorJavaObj.mobile: updateDoctorUiObj.mobile
        }
        if (updateDoctorUiObj.email != null) {
            updateDoctorJavaObj.email: updateDoctorUiObj.email
        }
        if (updateDoctorUiObj.password != null) {
            updateDoctorJavaObj.password: updateDoctorUiObj.password
        }

        return updateDoctorJavaObj;

    }
});
