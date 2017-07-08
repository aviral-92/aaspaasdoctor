scotchApp.service('TODOListRequestMapper', function () {

    this.updateTodoListRequest = function (TODOUiObj) {

        var TODOJavaObj = {
            "id": TODOUiObj.id,
            "message": TODOUiObj.todoMessage
        }
        return TODOJavaObj;
    }

    this.addToDoList = function (todoListUiObj) {

        var toDoListJavaObj = {
            "message": todoListUiObj.todoMessage
        }
        if (todoListUiObj.dId != null) {
            toDoListJavaObj.doctorId = todoListUiObj.dId;
        } else {
            toDoListJavaObj.patientId = todoListUiObj.pId;
        }
        return toDoListJavaObj;
    }
});
