var max = new Date().getFullYear();
var min = 1900;
var select = document.getElementById("selectElementId");
for (var i = 0; i<=max-min; i++){
    var opt = document.createElement('option');
    var displayval = max-i;
    opt.value = displayval;
    opt.innerHTML = displayval;
    select.appendChild(opt);
}

var name = 'LOVE or Brother Love';
document.getElementById("result").innerHTML = name;
function dropdownTip(value){
    var name = 'None';
    if (value >= 2017 && value <= 2018){
	name = 'LOVE or Brother Love';
    }
    if (value >= 1969 && value < 1997){
	name = 'Sean John Combs';
    }
    if (value >= 1997 && value < 2001){
	name = 'Puff Daddy';
    }
    if (value >= 2001 && value < 2005){
	name = 'P. Diddy';
    }
    if (value >= 2005 && value < 2017){
	name = 'Diddy';
    }

    document.getElementById("result").innerHTML = name;
}
