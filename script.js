var row = 1;

//var submit = document.getElementById("submit");
//submit.addEventListener("click",displaydata);

function displaydata() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var inputState = document.getElementById("inputState").value;
    var inputCountry = document.getElementById("inputCountry").value;
    if(document.getElementById("customRadioInline1").checked) {
        gvalue = document.getElementById("customRadioInline1").value;
    }
    else if(document.getElementById("customRadioInline2").checked) {
        gvalue = document.getElementById("customRadioInline2").value;
    }

    var check = document.getElementsByName("foodvalue");
    str = "";
    for (var i=0;i<5;i++ ) {
        if(check[i].checked === true ) {
            str += check[i].value + " ";
        }
    }

    if(!fname || !lname || !address || !pincode || !inputCountry || !gvalue || !str ) {
        alert("Please Enter all the details");
        return;
    }
    var table = document.getElementById("display");

    var newrow = table.insertRow(row);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    var cell8 = newrow.insertCell(7);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = inputState;
    cell6.innerHTML = inputCountry;
    cell7.innerHTML = gvalue;
    cell8.innerHTML = str;

    document.getElementById("myform").reset();

    row++;

}

