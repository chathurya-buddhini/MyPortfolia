const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{5,}$/;
const CUS_SALARY_REGEX = /^[0-9 ]{5,}$/;

//add validations and text fields to the
let c_vArray = new Array();
c_vArray.push({field: $("#customer-gmail"), regEx: CUS_ID_REGEX});
c_vArray.push({field: $("#customer-name"), regEx: CUS_NAME_REGEX});
c_vArray.push({field: $("#customer-address"), regEx: CUS_ADDRESS_REGEX});
c_vArray.push({field: $("#customer-tp"), regEx: CUS_SALARY_REGEX});

let u_vArray = new Array();

u_vArray.push({field: $("#upCID"), regEx: CUS_ID_REGEX});
u_vArray.push({field: $("#upCName"), regEx: CUS_NAME_REGEX});
u_vArray.push({field: $("#upCAddress"), regEx: CUS_ADDRESS_REGEX});
u_vArray.push({field: $("#upCTp"), regEx: CUS_SALARY_REGEX});

function clearCustomerInputFields() {
    $("#customer-gmail,#customer-name,#customer-address,#customer-tp").val("");
    $("#customer-gmail,#customer-name,#customer-address,#customer-tp").css("border", "1px solid #ced4da");
    $("#customer-gmail").focus();
}

function clearUpdateFiald(){
    $("#upCID,#upCName,#upCAddress,#upCTp").val("");
    $("#upCTp").focus();
    $("#upCID,#upCName,#upCAddress,#upCTp").css("border", "1px solid #ced4da");
}

setBtn();

//disable tab
$("#customer-gmail,#customer-name,#customer-address,#customer-tp").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(c_vArray[indexNo]);

    setBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                // saveCustomer();
            }
        }
    }
});


$("#upCID,#upCName,#upCAddress,#upCTp").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = u_vArray.indexOf(u_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(u_vArray[indexNo]);

    setBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != u_vArray[u_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkValidations(u_vArray[indexNo])) {
                u_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(u_vArray[indexNo])) {
                // saveCustomer();
            }
        }
    }
});


function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

}

function checkAll() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}

function setBtn() {
    // $(".delete").prop("disabled", true);
    // $("#save-customer").prop("disabled", true);

    if (checkAll()) {
        $("#save-customer").prop("disabled", false);
    } else {
        $("#save-customer").prop("disabled", true);
    }

    let id = $("#upCID").val();
    if (searchCustomer(id) == undefined) {
        // $("#btnCusDelete").prop("disabled", true);
        $("#updateCustomer").prop("disabled", true);
    } else {
        // $(".delete").prop("disabled", false);
        $("#updateCustomer").prop("disabled", false);
    }

}

const item_id_regx = /^(I00-)[0-9]{3}$/;
const description_regx = /^[A-Za-z ]{5,}$/;
const price_regex = /^[0-9 ]{2,}$/;
const qty_regex = /^[0-9 ]{2,}$/;

let i_validity = [];
i_validity.push({field: $("#txtItemId"), regEx: item_id_regx});
i_validity.push({field: $("#txtItemdec"), regEx: description_regx});
i_validity.push({field: $("#txtItemUnitPrice"), regEx: price_regex});
i_validity.push({field: $("#txtItemQty"), regEx: qty_regex});

let update_validity = [];

update_validity.push({field: $("#upItemId"), regEx: item_id_regx});
update_validity.push({field: $("#upItemdesc"), regEx: description_regx});
update_validity.push({field: $("#upUnitPrice"), regEx: price_regex});
update_validity.push({field: $("#upQty"), regEx: qty_regex});

function clearItemTxt(){
    $('#txtItemId,#txtItemdec,#txtItemUnitPrice,#txtItemQty').val('');
    $('#txtItemId,#txtItemdec,#txtItemUnitPrice,#txtItemQty').css("border", "1px solid #ced4da");
    $('#txtItemId').focus();
}

function clearUpdateTxt(){
    $('#upItemId,#upItemdesc,#upUnitPrice,#upQty').val('');
    $('#upItemId,#upItemdesc,#upUnitPrice,#upQty').css("border", "1px solid #ced4da");
    $('#upItemId').focus();
}

$('#txtItemId,#txtItemdec,#txtItemUnitPrice,#txtItemQty').on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = i_validity.indexOf(i_validity.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(i_validity[indexNo]);

    setItemBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != i_validity[i_validity.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkItemValidations(i_validity[indexNo])) {
                i_validity[indexNo + 1].field.focus();
            }
        } else {
            if (checkItemValidations(i_validity[indexNo])) {
                // saveCustomer();
            }
        }
    }
});

$('#upItemId,#upItemdesc,#upUnitPrice,#upQty').on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = update_validity.indexOf(update_validity.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(update_validity[indexNo]);

    setItemBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != update_validity[update_validity.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkItemValidations(update_validity[indexNo])) {
                update_validity[indexNo + 1].field.focus();
            }
        } else {
            if (checkItemValidations(update_validity[indexNo])) {
                // saveCustomer();
            }
        }
    }
});


function checkItemValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setItemBtn() {

    if (checkAllItem()) {
        $("#btnSaveItem").prop("disabled", false);
    } else {
        $("#btnSaveItem").prop("disabled", true);
    }

    let id = $("#upItemId").val();

    if (searchItemValid(id) == undefined) {
        $("#btnUpdateItem").prop("disabled", true);
    } else {
        $("#btnUpdateItem").prop("disabled", false);
    }

}

function searchItemValid(id) {
    return itemDB.find(function (item) {
        return item.code == id;
    });
}

function checkAllItem() {
    for (let i = 0; i < i_validity.length; i++) {
        if (!checkValidations(i_validity[i])) return false;
    }
    return true;
}

$("#btnSaveItem").prop("disabled", true);
$("#btnUpdateItem").prop("disabled", true);

const orderId_regex =/^(ORD-)[0-9]{3}$/;

$('#btnAddOrder').prop("disabled", true);

$('#btnPlaceOrder').prop("disabled", true);

$('#txtOrderId').on('keyup keydown',function (e){
    if (e.key == "Tab") {
        e.preventDefault();
    }

    if (orderId_regex.test($('#txtOrderId').val())){
        $('#txtOrderId').css("border", "2px solid #ced4da");
        $('#selCusId').prop('disabled',false);
    }else {
        $('#txtOrderId').css("border", "2px solid red");
    }

    if (e.key == "Enter") {
        $('#selCusId').focus();
    }

});

function clearAll() {
    $('#txtOrderId ,#selCusId ,#orderCusName ,#orderCusAddres ,#orderCusTp ,#selItemId ,#orderItemDesc ,#orderItemPrice ,#orderQty ,#getQty ,#total ,#subTotal').val('');
    finalTotal = 0;
    final = 0;
    $('#btnAddOrder').prop("disabled", true);
}

function clearBill(){
    $('#txtBalnce ,#txtCash ,#txtDiscount').val('');
    $('#total ,#subTotal').text('00.0');
    $('#btnAddOrder').prop("disabled", true);
}