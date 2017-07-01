scotchApp.service('patientResponseMapper', function () {

    this.getPatient = function (PatientJavaObj) {

        var patientUiObj = {
            "adhaar": PatientJavaObj.aadhaar,
            "allergies": PatientJavaObj.allergies,
            "createdDate": PatientJavaObj.createdDate,
            "dob": PatientJavaObj.dateOfBrith,
            "email": PatientJavaObj.email,
            "gender": PatientJavaObj.gender,
            "mobile": PatientJavaObj.mobile,
            "name": PatientJavaObj.name,
            "pId": PatientJavaObj.pId,
            "password": PatientJavaObj.password,
            "PatientAddress": {
                "city": PatientJavaObj.city,
                "homeAddress": PatientJavaObj.homeAddress,
                "latitude": PatientJavaObj.latitude,
                "longitude": PatientJavaObj.longitude,
                "pId": PatientJavaObj.pId,
                "patientAddressId": PatientJavaObj.patientAddressCreateDate,
                "patientAddressId": PatientJavaObj.patientAddressId,
                "patientAddressUpdatedDate": PatientJavaObj.patientAddressUpdatedDate,
                "pin": PatientJavaObj.pin,
                "state": PatientJavaObj.state,
                "timing": PatientJavaObj.timing
            },
            "profilePicPath": PatientJavaObj.profilePicPath,
            "tandCAccepted": PatientJavaObj.tandCAccepted,
            "tandCAccepted": PatientJavaObj.updatedDate

        }
        return patientUiObj;
    }
})
