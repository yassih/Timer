window.onload = function(){

	clock();
}

function clock(){
	var element = document.getElementById("timer");
	var t = new Date;
	t = t.toLocaleTimeString();
	element.innerHTML= t;
	console.log(element);	
	setTimeout(clock,1000);
}