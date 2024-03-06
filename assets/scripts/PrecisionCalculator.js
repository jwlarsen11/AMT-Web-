var InputWeight = document.getElementById("pweight");
var InputFPS = document.getElementById("pFPS");
var InputJoules = document.getElementById("pjoules");
var pjoules = 1.43;
var pfps = 310;
var pweight = .32/1000;

InputWeight.onchange = function()
{
    pweight = InputWeight.value/1000;
    pjoules = (((1/2) * pweight) * ((pfps * 0.3048) ** 2));
    pjoules = pjoules.toFixed(2);
    InputJoules.value = pjoules;
}

InputFPS.onkeyup = function()
{
    pfps = InputFPS.value;
    pjoules = (((1/2) * pweight) * ((pfps * 0.3048) ** 2));
    pjoules = pjoules.toFixed(2);
    InputJoules.value = pjoules;
}

InputJoules.oninput = function()
{
    pjoules = InputJoules.value;
    pfps = (Math.sqrt((2*pjoules)/pweight)) * 3.28084;
    InputFPS.value = pfps;
}