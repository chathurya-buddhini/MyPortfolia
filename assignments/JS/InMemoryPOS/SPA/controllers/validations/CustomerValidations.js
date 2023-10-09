// validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{5,}$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

//add validations and text fields to the
let c_vArray = new Array();
c_vArray.push({field: $("#txtid"), regEx: CUS_ID_REGEX});
c_vArray.push({field: $("#txtName"), regEx: CUS_NAME_REGEX});
c_vArray.push({field: $("#txtaddress"), regEx: CUS_ADDRESS_REGEX});
c_vArray.push({field: $("#txtsalary"), regEx: CUS_SALARY_REGEX});

function clearCustomerInputFields() {
    $("#txtid,#txtName,#txtaddress,#txtsalary").val("");
    $("#txtid,#txtName,#txtaddress,#txtsalary").css("border", "1px solid #ced4da");
    $("#txtid").focus();
    setBtn();
}

setBtn();

//disable tab
$("#txtid,#txtName,#txtaddress,#txtsalary").on("keydown keyup", function (e) {
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
                saveCustomer();
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
    $("#btn3").prop("disabled", true);
    $("#btn2").prop("disabled", true);

    if (checkAll()) {
        $("#btn1").prop("disabled", false);
    } else {
        $("#btn1").prop("disabled", true);
    }

    let id = $("#txtid").val();
    if (searchCustomer(id) == undefined) {
        $("#btn3").prop("disabled", true);
        $("#btn2").prop("disabled", true);
    } else {
        $("#btn3").prop("disabled", false);
        $("#btn2").prop("disabled", false);
    }

}

