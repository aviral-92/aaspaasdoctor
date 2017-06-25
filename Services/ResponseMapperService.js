scotchApp.service('responseMapper', function ($http) {

    this.getDoctor = function (DoctorJavaObj) {
        var doctorUiObj = {
            "dId": DoctorJavaObj.dId,
            "name": DoctorJavaObj.name,
            "mobile": DoctorJavaObj.mobile,
            "adhaar": DoctorJavaObj.aadhaar,
            "clinicName": DoctorJavaObj.clinic,
            "doctorAddress": {
                "city": DoctorJavaObj.city, //TODO Clinic City field should be added.
                "dId": DoctorJavaObj.dId,
                "landmark": DoctorJavaObj.landmark, //TODO Clinic landmark to be added.
                "latitude": DoctorJavaObj.latitude, //TODO check latitude.
                "longitude": DoctorJavaObj.longitude, //TODO check longitude.
                "pin": DoctorJavaObj.pin, //TODO Clinic pin to be added.
                "state": DoctorJavaObj.state, //TODO Clinic State to be added.
                "timing ": DoctorJavaObj.timing //TODO Clinic timing to be added.
            },
            "homeAddress": DoctorJavaObj.homeAddress,
            "highestDegree": DoctorJavaObj.highestDegree,
            "expertized": DoctorJavaObj.expertise,
            "selfDescription": DoctorJavaObj.selfDescription,
            "isGovernmentServent": DoctorJavaObj.isGoverment,
            "oneTimeFee": DoctorJavaObj.fee,
            "daysCheckFree": DoctorJavaObj.freeDay,
            "email": DoctorJavaObj.email,
            "gender": DoctorJavaObj.gender,
            "state": DoctorJavaObj.state,
            "dob": DoctorJavaObj.dateOfBrith,
            "timing": DoctorJavaObj.timing,
            "tandCAccepted": DoctorJavaObj.tandCAccepted,
            "verified": DoctorJavaObj.verified,
            "profilePicPath": DoctorJavaObj.profilePicPath,
            "createdDate": DoctorJavaObj.createdDate,
            "updatedDate": DoctorJavaObj.updatedDate,
            "description": DoctorJavaObj.desc
        }
        return doctorUiObj;
    }
});
