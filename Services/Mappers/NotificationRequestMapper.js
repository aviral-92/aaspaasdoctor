scotchApp.service('NotificationRequestMapper', function () {

    this.updateNotificationStatus = function (notificationUiObj) {

        var notificationJavaObj = {
            "id": notificationUiObj.id
        }
        if (notificationUiObj.status == '1') {
            notificationJavaObj.status = '0';
        }else{
            notificationJavaObj.status = '1';
        }
        return notificationJavaObj;
    }
});
