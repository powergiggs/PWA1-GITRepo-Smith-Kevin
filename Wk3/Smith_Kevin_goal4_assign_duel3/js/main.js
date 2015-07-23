/*
 * Name: Kevin Smith
 * Date: 7/23/15
 * Assignment: Week#3THE DUEL #3
 */


// self-executing function
(function(){
	
	

    console.log("FIGHT!!!"); // out string to console.log

    //player name, health and damage store in array

  /* var playerOne = ["Spiderman", 20, 100]; //
   var playerTwo = ["Batman", 20, 100];  //*/
  
   
   //declare variable object storing fighters name, health and damge
   
   var fighter1 = {
	   name: "Spiderman",
	   damage: 20,
	   health: 100,
	   
	   
   };
   
    var fighter2 = {
	   name: "Batman",
	   damage: 20,
	   health: 100,
	     
   };
   
   console.log(fighter1);
   
   var fighters = [fighter1, fighter2]; //assign object as array
   

    //initiate round
    var round=0;
	
		
	
	
	var blueClick = document.getElementById("fight_btn"); // Access the fight button via dom and assign it to a variable 
	blueClick.addEventListener('click', fight, false); // onclick eventlistener is assign to button to execute the fight functiom on click
	console.log(blueClick);
	 
	 
    /*

    Declare function to process randomly player health and damage during fight

    */

    function fight(){
		
		var showFighter = document.querySelectorAll('#scores p');//create variable and store access to the html paragraph div via  dom
		console.log(showFighter);
				
		//assign fighters name, health and damage dynakically to paragraph divs
		showFighter[0].innerHTML = fighter1.name+':'+fighter1.health; 
		showFighter[2].innerHTML = fighter2.name+':'+ fighter2.health;
		//console.log(showFighter1[1].innerHTML);
				
			
	
		
	 
		//random formula is - Math.floor(Math.random() * (max - min) + min);
		var minDamage1 = fighter1.damage * 0.5;
		var minDamage2 = fighter2.damage * 0.5;
		var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
		var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);



		//inflict damage
		fighter1.health-=f1;
		fighter2.health-=f2;

	   // console.log(fighter1.name+": "+ fighter1.health+ " " + fighter2.name+":"+fighter2.health);

		// print player one and two health and name to console.log
			
			
			var gameEnd = document.querySelector('.buttonblue');
				console.log("Done:", gameEnd);
				

            //check for victor
            var result = winnerCheck();// assign the function winnerCheck to the variable result
            console.log(result); //print result to console.log
            if (result==="no winner"){
                round++;
				
				var showRound = document.getElementById('round');
				console.log(showRound);
				showRound.innerHTML = "ROUND " + round;
				
								
               
            } else{
				showFighter[1].innerHTML = result;
				showFighter[0].innerHTML = "";
				showFighter[2].innerHTML = "";
				gameEnd.innerHTML ="THE END!";
				blueClick.removeEventListener('click', fight);
				
								            
            };
			
       };


    /*

    Declare function to check if there is no winner or one winner

     */
	 
	
			
    function winnerCheck(){
        var result="no winner";
        if (fighter1.health<1 && fighter2.health<1){
            result = "You Both Die";
			
					
        } else if(fighter1.health<1){
            result =fighter2.name+" WINS!!!";
			
			
        } else if (fighter2.health<1){
            result = fighter1.name+" WINS!!!";
			
			
        };
        return result;
    };
	
	

 
})();