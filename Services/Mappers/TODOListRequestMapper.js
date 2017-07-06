scotchApp.service('TODOListrequestMapper', function () {

    this.updateTodoListRequest = function (TODOUiObj) {

        var TODOJavaObj = {
            "id": TODOUiObj.id,
            "message": TODOUiObj.todoMessage
        }
        return TODOJavaObj;
    }
});
