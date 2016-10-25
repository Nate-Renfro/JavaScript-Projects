/*
var x = document.getElementById("x");
var c = document.getElementById("c");
var f = document.getElementById("f");
 */

function convert(degree){
    //Temperature variable
    var x;
    if (degree == "C") {x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = x.toFixed(2);}
    else {x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = x.toFixed(2);}}

/*
function formClear()
    {if (x) {x.value = "";}
    if (c) {c.value = "";}
    if (f) {f.value = "";}}
*/