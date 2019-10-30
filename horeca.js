const FRIS = 5;
const BIER = 8;
const WIJN = 15;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;



function bestellen(){
	var bestelling = prompt ("Welke bestelling wilt u toevoegen?");
	if (bestelling == "bier"){
		aantalBier += Number(prompt("Hoeveel Bier wilt u bestellen?"));
	}
	else if (bestelling == "fris"){
		aantalFris += Number(prompt("Hoeveel Fris wilt u bestellen?"));
	}
	else if (bestelling == "wijn") {
		aantalWijn += Number(prompt("Hoeveel Wijn wilt u bestellen?"));
	}
	



var totaalBier = aantalBier * 8;
var totaalFris = aantalFris * 5;
var totaalWijn = aantalWijn * 15;
var totaalPrijs = totaalWijn + totaalFris + totaalBier;



	var confirm = prompt ("Wilt u nog wat bestellen?");
	if (confirm == "ja"){
	bestellen()
	}

	else if(confirm == "nee"){
		alert("Uw totale prijs is:  " +totaalPrijs+ "euro.");
	}


	}

