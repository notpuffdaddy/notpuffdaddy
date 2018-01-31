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

var max_future = 2090;
var min_future = new Date().getFullYear();
var select_future = document.getElementById("futureselectElementId");
for (var i = min_future; i<=max_future; i++){
    var opt = document.createElement('option');
    var displayval = i;
    opt.value = displayval;
    opt.innerHTML = displayval;
    select_future.appendChild(opt);
}

var name = 'LOVE or Brother Love';
document.getElementById("result").innerHTML = name;
function oldnamedropdown(value){
    name = 'None';
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

var future_name = 'LOVE or Brother Love';
document.getElementById("futureresult").innerHTML = future_name;
function futurenamedropdown(value){
    future_name = 'unfortunately, Puff Daddy will be dead';
    if (value > 2018 && value <= 2019){
	future_name = 'Puff Love';
    }
    if (value > 2019 && value <= 2020){
	future_name = 'P. Love';
    }
    if (value > 2020 && value <= 2021){
	future_name = 'Love Diddy';
    }
    if (value > 2021 && value <= 2022){
	future_name = 'LOVE D.';
    }
    if (value > 2022 && value <= 2025){
	future_name = 'Brother LOVE D.';
    }
    if (value > 2025 && value <= 2027){
	future_name = 'Brother Puff Love Daddy';
    }
    if (value > 2027 && value <= 2030){
	future_name = 'BPLD';
    }
    if (value > 2030 && value <= 2035){
	future_name = 'Daddy Love Brother Puff';
    }
    if (value > 2035 && value <= 2040){
	future_name = 'Puff Daddy II';
    }
    if (value > 2040 && value <= 2041){
	future_name = 'P. Did';
    }
    if (value > 2042 && value <= 2043){
	future_name = 'P. Di';
    }
    if (value > 2044 && value <= 2045){
	future_name = 'P. D.';
    }
    if (value > 2045 && value <= 2046){
	future_name = 'Puff Daddy';
    }
    document.getElementById("futureresult").innerHTML = future_name;
}
