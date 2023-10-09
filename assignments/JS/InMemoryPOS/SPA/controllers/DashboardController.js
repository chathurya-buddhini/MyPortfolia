//logics for SPA
initiateUI();

function initiateUI() {
    clearAll();
    $("#dessec").css("display", "flex");
    setTheLastView();
}

function saveLastView(clickedID) {
    switch (clickedID) {
        case "dessec":
            localStorage.setItem("view","HOME");
            break;
        case "cussec":
            localStorage.setItem("view", "CUSTOMER");
            break;
        case "itemsec":
            localStorage.setItem("view", "ITEM");
            break;
        case "ordersec":
            localStorage.setItem("view", "ORDER");
            break;
    }
}

function setTheLastView() {
    let view = localStorage.getItem("view");
    switch (view) {
        case "HOME":
            setView($("#dessec"));
            break;
        case "ITEM":
            setView($("#itemsec"));
            break;
        case "CUSTOMER":
            setView($("#cussec"));
            break;
        case "ORDER":
            setView($("#ordersec"));
            break;
        default:
            setView($("#dessec"));
    }
}

function clearAll() {
    $("#dessec,#cussec,#itemsec,#ordersec").css('display', 'none');
}

function setView(viewOb) {
    clearAll();
    viewOb.css("display", "block");
    saveLastView(viewOb.get(0).id);
    console.log(viewOb.get(0).id);
}

//bind events
$("#home").click(function () {
    setView($("#dessec"));
});

$("#cus").click(function () {
    setView($("#cussec"));
});

$("#item").click(function () {
    setView($("#itemsec"));
});

$("#odd").click(function () {
    setView($("#ordersec"));
});

//end of logics for SPA