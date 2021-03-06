'use strict';
var customerPage = require('../elements/customer.page.js');
var customerPage = new customerPage();
var generalHelper = require('../helper/generalHelper.js');
var generalHelper = new generalHelper();
var bankManagerPage = require('../elements/bankManager.page.js');
var bankManagerPage = new bankManagerPage();

class bankManagerHelper {

    loginAsBankManager() { 
        generalHelper.clickElement(bankManagerPage.bankManagerLoginButton(),'bank manager login button');       
    }

    addKnownCustomerName() {
        var customerName = "auto"+ " " + Date.now();
        generalHelper.clickElement(bankManagerPage.addCustomerTab(), "Add customer tab click");
        generalHelper.sendKeyAndSubmit(bankManagerPage.customerInfoInput(1), customerName, 'first name input');
        generalHelper.sendKeyAndSubmit(bankManagerPage.customerInfoInput(2), customerName, 'last name input');
        generalHelper.sendKeyAndSubmit(bankManagerPage.customerInfoInput(3), '00962', 'Post code input');
        this.closeAlertMessage();
        return customerName;
    }

    closeAlertMessage() {
        var alertDialog = browser.switchTo().alert();
        alertDialog.dismiss();
    }

}
module.exports = bankManagerHelper
