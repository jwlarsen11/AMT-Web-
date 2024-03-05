/* --------------------------------- slider scripts --------------------------------- */
var ajoutput = document.getElementById("ajout");
var afps = 310;
var aweighted = .32/1000;
var ajoules = 1.43;
var atfps = 310;
var atjoules = 1.43;


/* ---------------------------------  weight slider --------------------------------- */
var awslider = document.getElementById("aweightSlider");
var awoutput = document.getElementById("awout");
awoutput.innerHTML = aweighted*1000;

awslider.oninput = function() 
{
    switch(awslider.value) 
    {
    case '0':
        awoutput.innerHTML = .20;
        aweighted = .20/1000;
        break;
    case '1':
        awoutput.innerHTML = .25;
        aweighted = .25/1000;                    
        break;
    case '2':
        awoutput.innerHTML = .28;
        aweighted = .28/1000;                    
        break;
    case '3':
        awoutput.innerHTML = .30;
        aweighted = .30/1000;
        break;
    case '4':
        awoutput.innerHTML = .32;
        aweighted = .32/1000;
        break;
    case '5':
        awoutput.innerHTML = .36;
        aweighted = .36/1000;
        break;
    case '6':
        awoutput.innerHTML = .40;
        aweighted = .40/1000;
        break;
    case '7':
        awoutput.innerHTML = .42;
        aweighted = .42/1000;
        break;
    case '8':
        awoutput.innerHTML = .45;
        aweighted = .45/1000;
        break;
    case '9':
        awoutput.innerHTML = .48;
        aweighted = .48/1000;
        break;
    case '10':
        awoutput.innerHTML = .50;
        aweighted = .50/1000;
        break;
    case '11':
        awoutput.innerHTML = .52;
        aweighted = .52/1000;
        break;
    default:
        awoutput.innerHTML = .32;
        aweighted = .32/1000;
        break;
    }

    ajoules = (((1/2) * aweighted) * ((afps * 0.3048) ** 2));
    ajoutput.innerHTML = ajoules.toFixed(2);
    ajslider.value = ajoules;
    afps = (Math.sqrt((2*ajoules)/aweighted)) * 3.28084;
    afps = afps.toFixed(0);
    afoutput.innerHTML = afps;
    afslider.value = afps;
}

/* --- FPS slider --- */
var afslider = document.getElementById("aFpsSlider")
var afoutput = document.getElementById("afout");
afoutput.innerHTML = afps;

afslider.oninput = function() 
{
    afps = this.value;
    afoutput.innerHTML = afps;

    atjoules = ajoules;
    ajoules = (((1/2) * aweighted) * ((afps * 0.3048) ** 2));
    ajoutput.innerHTML = ajoules.toFixed(2);
    ajslider.value = ajoules;
}

/* --- Joule Slider --- */
var ajslider = document.getElementById("ajouler");
ajoutput.innerHTML = ajoules;

ajslider.oninput = function() 
{
    ajoules = this.value;
    ajoutput.innerHTML = ajoules;

    atfps = afps;
    afps = (Math.sqrt((2*ajoules)/aweighted)) * 3.28084;
    afoutput.innerHTML = afps.toFixed(0);
    afslider.value = afps;
}