//Write down all the item form controllers here
getAllItems();


function getAllItems() {
    //clear all tbody data before add
    $("#tblItems").empty();

    //get all items
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let description = itemDB[i].description;
        let qtyOnHand = itemDB[i].qtyOnHand;
        let unitPrice = itemDB[i].unitPrice;
        let row = `<tr>
                     <td>${code}</td>
                     <td>${description}</td>
                     <td>${qtyOnHand}</td>
                     <td>${unitPrice}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblItems").append(row);
        bindTrEvents();


    }
}

//add customer event
$("#btn01").click(function () {
    if (checkAll()){
        saveItem();
    }else{
        alert("Error");
    }

});

//get all customer event
$("#btnGetAll1").click(function () {
    getAllItems();
});

//bind tr events for getting back data of the rows to text fields
function bindTrEvents() {
    $('#tblItems>tr').click(function () {
        //get the selected rows data
        let code = $(this).children().eq(0).text();
        let description = $(this).children().eq(1).text();
        let qtyOnHand = $(this).children().eq(2).text();
        let unitPrice = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#txtid1").val(code);
        $("#txtName1").val(description);
        $("#txtqty").val(qtyOnHand);
        $("#txtprice").val(unitPrice);
    })
}

//delete btn event
$("#btn03").click(function () {
    let code = $("#txtid1").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(code);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItems();
        } else {
            alert("Item Not Removed..!");
        }
    }


});

//update  btn event
$("#btn02").click(function () {
    let code = $("#txtid1").val();
    updateItem(code);
    clearItemInputFields();
});

//clear btn event
$("#btn04").click(function () {
    clearItemInputFields();
});



// CRUD operation Functions
function saveItem() {
    let ItemCode = $("#txtid1").val();
    //check customer is exists or not?
    if (searchItem(ItemCode.trim()) == undefined) {

        //if the customer is not available then add him to the array
        let ItemName = $("#txtName1").val();
        let ItemQTY = $("#txtqty").val();
        let ItemPrice = $("#txtprice").val();

        //by using this one we can create a new object using
        //the customer model with same properties
        let newItem = Object.assign({}, item);

        //assigning new values for the customer object
        newItem.code = ItemCode;
        newItem.description = ItemName;
        newItem.qtyOnHand = ItemQTY;
        newItem.unitPrice = ItemPrice;

        //add customer record to the customer array (DB)
        itemDB.push(newItem);
        clearItemInputFields();
        getAllItems();

    } else {
        alert("Item already exits.!");
        clearItemInputFields();
    }
}


function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            itemDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchItem(code) {
    return itemDB.find(function (item) {
        //if the search id match with customer record
        //then return that object
        return item.code == code;
    });
}

function updateItem(code) {
    if (searchItem(code) == undefined) {
        alert("No such Item..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this item.?");
        if (consent) {
            let item = searchItem(code);
            //if the customer available can we update.?

            let ItemName = $("#txtName1").val();
            let ItemQTY = $("#txtqty").val();
            let ItemPrice = $("#txtprice").val();

            item.description = ItemName;
            item.qtyOnHand = ItemQTY;
            item.unitPrice = ItemPrice;

            getAllItems();
        }
    }

}





