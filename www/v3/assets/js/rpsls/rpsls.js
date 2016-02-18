/* Rules:
 * Paper > Rock
 * Rock > Sissors
 * Sissors > Paper
 * Paper > Spock
 * Spock > Lizzard
 * Lizzard > Paper
*/ 
window.onload = function() {
	var a = document.getElementById("rpsls");
	a.onclick = function() {

		var userChoice = prompt("Rules:\n: Paper \> Rock \n: Rock \> Sissors \n: Sissors \> Paper \n: Paper \> Spock \n: Spock \> Lizzard \n: Lizzard \> Paper \n\n Choose wisely: rock | paper | scissors | lizard | spock");

		var computerChoice = Math.random();

		if (computerChoice < 0.20) {
			computerChoice = "rock";
		} else if(computerChoice <= 0.40) {
			computerChoice = "paper";
		} else if(computerChoice <= 0.60) {
			computerChoice = "scissors";
		} else if(computerChoice <= 0.80) {
			computerChoice = "lizard";
		} else if(computerChoice <= 1) {
			computerChoice = "spock";
		} console.log("Computer: " + computerChoice);

		var compare = function(choice1, choice2) {
		  if (choice1 == choice2) {
		    return "The result is a tie!";  
		  } else if (choice1 === "rock") {
		    if (choice2 === "scissors" || "lizard") {
		        return "rock wins";
		    } else if (choice2 === "paper"){
		        return "paper covers rock";
		    } else {
		    	return "spock vaporizes rock";
		    };
		  } else if (choice1 === "paper") {
		    if (choice2 === "rock" || "spock") {
		        return "paper wins";
		    } else if (choice2 === "scissors") {
		        return "scissors cuts paper";
		    } else {
		    	return "lizard eats paper";
		    };
		  } else if (choice1 === "scissors") {
		    if (choice2 === "paper" || "lizard") {
		        return "scissors wins";
		    } else if (choice2 === "rock") {
		        return "rock crushes scissors";
		    } else {
		    	return "spock smashes scissors";
		    };
		  } else if (choice1 === "lizard") {
		    if (choice2 === "paper" || "spock") {
		        return "lizard wins";
		    } else if (choice2 === "rock"){
		        return "rock crushes lizard";
		    } else {
		    	return "scissors decapitates lizard";
		    };
		  } else if (choice1 === "spock") {
		    if (choice2 === "scissors" || "rock") {
		        return "spock wins";
		    } else if (choice2 === "paper"){
		        return "paper disproves spock";
		    } else {
		    	return "lizard poisons spock";
		    };
		  };
		};


		confirm("Computer shoots: " + computerChoice + "\n" + compare(userChoice, computerChoice));

		return false;
	};
};