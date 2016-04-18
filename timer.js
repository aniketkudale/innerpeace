var sec = -1;
var timer, secs, mins, hrs;
var stopper;

function pad(val) {
	return val > 9 ? val : "0" + val;
}

function start() {
	stopper = setInterval(function() {
		secs = $("#seconds").html(pad(++sec % 60));
		mins = $("#minutes").html(pad(parseInt(sec / 60, 10) % 60 + ":"));
		hrs = $("#hours").html(pad(parseInt(sec / 3600, 10)+ ":"));
	}, 1000);
}

function unit() {
	if(document.getElementById("hours").innerHTML!="00:")
	return " Hours!";
	else if(document.getElementById("minutes").innerHTML!="00:")
	return " Minutes!";
	else if(document.getElementById("seconds").innerHTML!="00")
	return " Seconds!";
	else return "";
	
}



window.addEventListener("mousemove", rset);
window.addEventListener("keydown", rset);
function rset() {
	clearInterval(stopper);
	clearTimeout(timer);
	if (document.getElementById("seconds").innerHTML != "") {

		document.getElementById("score").innerHTML = "You attained inner peace for " + document.getElementById("hours").innerHTML + document.getElementById("minutes").innerHTML + document.getElementById("seconds").innerHTML + unit();
		
	}

	timer = setTimeout(start, 1000);
	sec = -1;
};
