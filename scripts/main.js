//creating truck instance
(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';//using FormHandler
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;//local variable called FormHandler and assign it to App.FormHandler.
    var Validation = App.Validation;//Associating the validation check with the input event
    var CheckList = App.CheckList;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));//calling addclickHandler
    //ensure that the instance of FormHandler will work with the DOM element
//matching that selector.
    var formHandler = new FormHandler(FORM_SELECTOR);
    //Registering createOrder as a submit handler
 //created a single submit handler function that invokes both createOrder and addRow. When it
//invokes them, it passes the correct value of this and the data from the form.   
    formHandler.addSubmitHandler(
    function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
    });
    formHandler.addInputHandler(Validation.isCompanyEmail);
    })(window);
