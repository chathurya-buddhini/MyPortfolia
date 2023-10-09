const ITEM_ID_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z\s]*$/;
const ITEM_QUANTITY_REGEX = /^\d+$/;
const ITEM_PRICE_REGEX =  /^[0-9]{2,}([.][0-9]{2})?$/;


//add validations and text fields to the
let i_vArray = new Array();
i_vArray.push({field: $("#txtid1"), regEx: ITEM_ID_REGEX});
i_vArray.push({field: $("#txtName1"), regEx: ITEM_NAME_REGEX});
i_vArray.push({field: $("#txtqty"), regEx: ITEM_QUANTITY_REGEX});
i_vArray.push({field: $("#txtprice"), regEx: ITEM_PRICE_REGEX});

function clearItemInputFields() {
    $("#txtid1,#txtName1,#txtqty,#txtprice").val("");
    $("#txtid1,#txtName1,#txtqty,#txtprice").css("border", "1px solid #ced4da");
    $("#txtid1").focus();
    setBtn();
}

setBtn();

//disable tab
$("#txtid1,#txtName1,#txtqty,#txtprice").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = i_vArray.indexOf(i_vArray.find((i) => i.field.attr("code") == e.target.code));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(i_vArray[indexNo]);

    setBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.code != i_vArray[i_vArray.length - 1].field.attr("code")) {
            //check validation is ok
            if (checkValidations(i_vArray[indexNo])) {
                i_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(i_vArray[indexNo])) {
                saveItem();
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
    for (let i = 0; i < i_vArray.length; i++) {
        if (!checkValidations(i_vArray[i])) return false;
    }
    return true;
}

function setBtn() {
    $("#btn03").prop("disabled", true);
    $("#btn02").prop("disabled", true);

    if (checkAll()) {
        $("#btn01").prop("disabled", false);
    } else {
        $("#btn01").prop("disabled", true);
    }

    let id = $("#txtid1").val();
    if (searchItem(code) == undefined) {
        $("#btn03").prop("disabled", true);
        $("#btn02").prop("disabled", true);
    } else {
        $("#btn03").prop("disabled", false);
        $("#btn02").prop("disabled", false);
    }

}