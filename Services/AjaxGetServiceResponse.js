scotchApp.service('ajaxGetResponse', function ($http) {

    this.doctorRegistration = function (doctorRegistrationObj) {
        var serverResponse = $http.post('https://doctor.cfapps.io/api/doctor/signup', doctorRegistrationObj);
        return serverResponse;
    }

    this.patientRegistration = function (patientRegistrationObj) {
        var serverResponse = $http.put('https://doctor.cfapps.io/api/patient/signUp', patientRegistrationObj);
        return serverResponse;
    }

    this.doctorLogin = function (doctorLoginObj) {
        var serverResponse = $http.post('https://doctor.cfapps.io/api/login/validate', doctorLoginObj);
        return serverResponse;
    }

    this.patientLogin = function (patientLoginObj) {
        var serverResponse = $http.post('https://doctor.cfapps.io/api/login/validate', patientLoginObj);
        return serverResponse;
    }

    this.getPatientById = function (patientId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/patient/get/' + patientId + '/id');
        return serverResponse;
    }

    this.getDoctorByMobile = function (mobile) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/doctor/get/' + mobile + '/mobile');
        return serverResponse;
    }

    this.getDoctorByEmail = function (email) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/doctor/get/' + email + '/email');
        return serverResponse;
    }

    this.getDoctorByDoctorId = function (dId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/doctor/get/' + dId + '/id');
        return serverResponse;
    }

    this.getAllExpertise = function () {
        var serverResponse = $http.get('https://doctors.cfapps.io/api/doctor/get/all/expertisation');
        return serverResponse;
    }

    this.putContactInfo = function (contactDetail) {
        var serverResponse = $http.post('https://doctors.cfapps.io/api/misc/addContact', contactDetail);
        return serverResponse;
    }

    this.getPatientNotification = function (pId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/notify/get/Notification/patient/' + pId + '/id/1/status');
        return serverResponse;
    }

    //Common for both doctor and patient
    this.updateNotification = function (notify) {
        var serverResponse = $http.put('https://doctor.cfapps.io/api/notify/update/notification/status', notify);
        return serverResponse;
    }

    this.getPatientMessage = function (pId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/message/get/message/patient/' + pId + '/id/1/status');
        return serverResponse;
    }

    //Common for both doctor and patient
    this.updateMessage = function (message) {
        var serverResponse = $http.put('https://doctor.cfapps.io/api/message/update/message', message);
        return serverResponse;
    }

    this.getPatientTodoList = function (pId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/todo/get/todolist/patient/' + pId + '/id');
        return serverResponse;
    }

    //    this.addPatientTodoList = function (todoList) {
    //        var serverResponse = $http.post('https://doctor.cfapps.io/api/todo/addToDoListforpatient', todoList);
    //        return serverResponse;
    //    }

    this.updatePatientTodoList = function (todoList) {
        var serverResponse = $http.put('https://doctor.cfapps.io/api/todo/update/todolist', todoList);
        return serverResponse;
    }

    this.updatePatientProfile = function (patient) {
        var serverResponse = $http.put('https://doctors.cfapps.io/api/patient/', patient);
        return serverResponse;
    }

    this.getDoctorNotification = function (dId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/notify/get/Notification/doctor/' + dId + '/id/1/status');
        return serverResponse;
    }

    this.getDoctorMessage = function (dId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/message/get/message/doctor/' + dId + '/id/1/status');
        return serverResponse;
    }

    //Get Appointment Details
    this.getAppointmentByDoctorId = function (dId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/appointment/appointment/' + dId + '/doctor');
        return serverResponse;
    }

    this.updateDoctorProfile = function (doctor) {
        var serverResponse = $http.put('https://doctors.cfapps.io/api/doctor/', doctor);
        return serverResponse;
    }

    this.getPatientByEmail = function (email) {
        var serverResponse = $http.get('https://doctors.cfapps.io/api/patient/get/' + email + '/email');
        return serverResponse;
    }

    this.appointmentBookByPatient = function (appointment) {
        var serverResponse = $http.post('https://doctors.cfapps.io/api/appointment/appointment/make', appointment);
        return serverResponse;
    }

    this.sendNotoficationToDoctor = function (notification) {
        var serverResponse = $http.post('https://doctor.cfapps.io/api/notification/addNotifyfordoctor', notification);
        return serverResponse;
    }

    this.getDoctorTodoList = function (dId) {
        var serverResponse = $http.get('https://doctor.cfapps.io/api/todo/get/todolist/doctor/' + dId + '/id');
        return serverResponse;
    }

    this.addDoctor_Or_PatientToDoList = function (todoList) {
        var serverResponse = $http.post('https://doctor.cfapps.io/api/todo/add/todolist', todoList);
        return serverResponse;
    }

    //    this.addDoctorTodoList = function (todoList) {
    //        var serverResponse = $http.post('https://doctor.cfapps.io/api/todo/addToDoListfordoctor', todoList);
    //        return serverResponse;
    //    }

    this.updateDoctorTodoList = function (todoList) {
        var serverResponse = $http.put('https://doctor.cfapps.io/api/todo/update/todolist', todoList);
        return serverResponse;
    }

    this.cancelAppointmentByDoctorId = function (PatientDetails) {
        var serverResponse = $http.delete('https://doctors.cfapps.io/api/appointment/appointment/cancel/' + getPatient[0].dId);
        return serverResponse;
    }

    this.addCalendarEventByPatientId = function (calendar) {
        var serverResponse = $http.post('https://doctors.cfapps.io/api/calendar/addCalendarForPatient', calendar);
        return serverResponse;
    }

    this.addCalendarEventByDoctorId = function (calendar) {
        var serverResponse = $http.post('https://doctors.cfapps.io/api/calendar/addCalendarForDoctor', calendar);
        return serverResponse;
    }

    this.getCalendarDetailsByPatientId = function (pId) {
        var serverResponse = $http.get('https://doctors.cfapps.io/api/calendar/getCalendarForPatient/' + pId + '/pId');
        return serverResponse;
    }

    this.getCalendarDetailsByDoctorId = function (dId) {
        var serverResponse = $http.get('https://doctors.cfapps.io/api/calendar/getCalendarForDoctor/' + dId + '/dId');
        return serverResponse;
    }

    this.deleteCalendarEventByCalendarId = function (calendar) {
        var serverResponse = $http.put('https://doctors.cfapps.io/api/calendar/deleteCalendarforPatient', calendar);
        return serverResponse;
    }

    this.getAppointmentByPatientId = function (pId) {
        var serverResponse = $http.get('https://doctors.cfapps.io/api/appointment/appointment/' + pId + '/patient');
        return serverResponse;
    }

    this.cancelAppointmentById = function (appointmentId) {
        var serverResponse = $http.delete('https://doctors.cfapps.io/api/appointment/appointment/cancel/' + appointmentId);
        return serverResponse;
    }
});
