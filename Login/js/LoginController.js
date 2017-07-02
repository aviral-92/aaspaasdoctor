/* Doctor Registeration */
scotchApp.controller('doctorRegistration', function ($scope, $http, vcRecaptchaService, $interval, popUpCalled, ajaxGetResponse, requestMapper) {

    $scope.spinner = false;
    $scope.confirm = false;
    $scope.signUpError = false;
    $scope.doBlurPassword = function (login) {

        if (login.password == login.cnfrmPassword) {
            $scope.confirm = false;
        } else {
            $scope.confirm = true;
        }
    }

    //var vm = this;
    //vm.publicKey = "6Lf2kBgUAAAAACwYaEUzyTW3b_T3QEp2xcLcrG3B";

    $scope.doctorRegisteration = function (DocRegisteration) {

        //Object Conversion
        var docRegistrationRestObj = requestMapper.doctorRegistrationMapper(DocRegisteration);
        var drSignUp = ajaxGetResponse.doctorRegistration(docRegistrationRestObj);
        $scope.spinner = true;
        drSignUp.success(function (doctors) {
            $scope.spinner = false;
            $scope.spinner = false;
            popUpCalled.popup('Successfully Registered', 'Successfully signup, now you can Log-In it.');
        });
        drSignUp.error(function (data, status, headers, config) {
            $scope.message = 'No Data Found!!!';
            $scope.signUpError = true;
            $scope.spinner = false;
            $scope.register = 'Try again later.';
        });
    }
});
/* Doctor Registeration */


/* Doctor Login */
scotchApp.controller('loginPage', function ($scope, $rootScope, $http, $cookieStore, $window, $cookies, vcRecaptchaService,
    $mdDialog, $interval, ajaxGetResponse, requestMapper, responseMapper, urlRedirect) {

    $scope.spinner = false;
    var vm = this;
    //vm.publicKey = "6Lf2kBgUAAAAACwYaEUzyTW3b_T3QEp2xcLcrG3B";
    //$scope.loader = false;
    function callAtInterval() {
        console.log("Interval occurred");
        $window.location.reload();
        console.log("Interval finished");
    }

    $scope.doctorLogin = function (loginDetail) {
        var docLoginRestObj = requestMapper.loginDoctor(loginDetail);
        var loginSuccessful = ajaxGetResponse.doctorLogin(docLoginRestObj);
        $scope.spinner = true;
        loginSuccessful.success(function (login) {
            //if (login.message == 'success') {
            var doctorSuccess = ajaxGetResponse.getDoctorByDoctorId(login.typeId);
            doctorSuccess.success(function (doctorObj) {
                doctorObj.src = '/images/no_pic.png';
                var doctorJavaToUiObj = responseMapper.getDoctor(doctorObj);
                $cookieStore.put('doctorLoginData', doctorJavaToUiObj);
                $scope.spinner = false;
                $window.location.href = urlRedirect.doctorLoginURL();
            });
            doctorSuccess.error(function (data, status, headers, config) {});
            //$scope.loader = false;

        });
        loginSuccessful.error(function (data, status, headers, config) {
            //                alert("failure message: " + data);
            $scope.message = 'Invalid Credentials...!!!';
            $scope.spinner = false;
            alert('Wrong Credentials');
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#dialogContainer')))
                .clickOutsideToClose(true)
                .title('Wrong Credentials')
                .textContent('Username or password is wrong')
                .ariaLabel('Username or password is wrong')
                .ok('Ok!')
            );
        });
    }
    /*}

}
else {
    $cookieStore.remove("email");
    $cookieStore.remove("loginData");
    $window.location.href = "#/loginPage"; // TODO, change URL, need to redirect on dashboard.
    $scope.message = 'Invalid Credentials...try again';
}*/
    // add validation for adhaar number
    $scope.doBlurAdhar = function ($event) {
        var target = $event.target;
        if ($scope.doctor != null && $scope.doctor.aadhaarNumber != null &&
            $scope.doctor.aadhaarNumber.length == 12) {
            target.blur();
        } else {
            target.focus();
        }
    }
    //----------------------------- code for forgot password dialogue box timings 
    $(function () {
        $('#myModal1').on('show.bs.modal', function () {
            var myModal = $(this);
            clearTimeout(myModal.data('hideInterval'));
            myModal.data('hideInterval', setTimeout(function () {
                myModal.modal('hide');
            }, 4000));
        });
    });
    //------------------------------ code for forgot password dialogue box timings
    $scope.init = function () {
        //        console.log("doctor " + $scope.testInput);

    };
});
/* Doctor Login */


/* Patient Registeration */
scotchApp.controller('patientRegistrations', function ($scope, $http, $window, popUpCalled, $interval,
    ajaxGetResponse, patientRequestMapper) {

    $scope.spinner = false;
    $scope.confirm = false;
    $scope.signUpErrors = false;
    $scope.doBlurPassword = function (login) {

        if (login.password == login.cnfrmPassword) {
            $scope.confirm = false;
        } else {
            $scope.confirm = true;
        }
    }
    // var vm = this;
    //vm.publicKey = "6Lf2kBgUAAAAACwYaEUzyTW3b_T3QEp2xcLcrG3B";
    $scope.patientRegisters = function (patientRegister) {

        var patientRegistrationRestObj = patientRequestMapper.patientRegistrationMapper(patientRegister);
        var patientSignUp = ajaxGetResponse.patientRegistration(patientRegistrationRestObj);
        $scope.spinner = true;
        patientSignUp.success(function (patients) {
            $scope.spinner = false;
            popUpCalled.popup('Successfully Registered', 'Successfully signup, now you can Log-In it.');
        });
        patientSignUp.error(function (data, status, headers, config) {
            $scope.spinner = false;
            popUpCalled.popup('Try again', 'Try again later.');
        });
    }
});
/* Patient Registeration */


/* Patient Login */
scotchApp.controller('patientLogin', function ($scope, $rootScope, $http, $cookieStore, $window, $cookies,
    $interval, popUpCalled, ajaxGetResponse, patientRequestMapper, urlRedirect) {

    $scope.spinner = false;
    //var vm = this;
    //vm.publicKey = "6Lf2kBgUAAAAACwYaEUzyTW3b_T3QEp2xcLcrG3B";

    if ($cookieStore.get('patientLoginData') == undefined) {
        $scope.patientLogin = function (loginDetail) {
            var loginPatientRestObj = patientRequestMapper.loginPatient(loginDetail);
            var loginSuccessful = ajaxGetResponse.patientLogin(loginPatientRestObj);
            $scope.spinner = true;
            loginSuccessful.success(function (login) {

                var serverResponse = ajaxGetResponse.getPatientById(login.typeId);
                serverResponse.success(function (patientObj) {
                    patientObj.src = '/images/no_pic.png';
                    $cookieStore.put('patientLoginData', patientObj);
                    $scope.spinner = false;
                    $window.location.href = urlRedirect.patientLoginURL();
                });
                serverResponse.error(function (data, status, headers, config) {
                    alert("failure message: " + data);
                });
            });
            loginSuccessful.error(function (data, status, headers, config) {
                alert("failure message: " + data);
                $scope.message = 'Invalid Credentials...!!!';
            });
        }
    } else {
        //$cookieStore.remove("email");
        $cookieStore.remove("patientLoginData");
        $window.location.href = "#/patientLogin";
        //$scope.message = 'Invalid Credentials...try again';
    }
    // add validation for adhaar number
    $scope.doBlurAdhar = function ($event) {
        var target = $event.target;
        if ($scope.doctor != null && $scope.doctor.aadhaarNumber != null &&
            $scope.doctor.aadhaarNumber.length == 12) {
            target.blur();
        } else {
            target.focus();
        }
    }
    //----------------------------- code for forgot password dialogue box timings 
    $(function () {
        $('#myModal1').on('show.bs.modal', function () {
            var myModal = $(this);
            clearTimeout(myModal.data('hideInterval'));
            myModal.data('hideInterval', setTimeout(function () {
                myModal.modal('hide');
            }, 4000));
        });
    });
    //------------------------------ code for forgot password dialogue box timings
    $scope.init = function () {
        console.log("patient " + $scope.value);
    };
});
/* Patient Login */
