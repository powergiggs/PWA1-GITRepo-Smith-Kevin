/*
 * Name: Kevin Smith
 * Date: 6/19/15
 * Assignment: Week#3 THE DUEL #3
 */


// self-executing function
(function(){

    console.log("FIGHT!!!"); // out string to console.log

    //player name, health and damage store in array

    var fighter1 = { 
		name: "Spiderman", 
		damage: 20,
		health: 100,
	
	}; //
    var fighter2 = {
		name: "Batman", 
		damage: 20, 
		health: 100,
	
	
	};  //
	
	var fighters = [fighter1, fighter2];
	
	//console.log(fighters);


    //initiate round
    var round=0;
	
	
			
		


    /*

    Declare function to process randomly player health and damage during fight

    */
	
	  
	
	
	 function fight(){
   	
	
	
	
	 var display1 = document.querySelectorAll('#kabal p');
	 console.log(display1);
	 display1.innerHTML = fighter1.name + fighter1.health ;
	// alert(fighter1.name+":"+fighter1.health+"  *START*  "+fighter2.name+":"+fighter2.health);
     for (var i = 0; i < 10; i++)// for loop
        // alert to user player one and player two name and health
       {
			
   			// document.getElementById("demo").innerHTML = "Hello World";
				            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);



            //inflict damage
            fighter1.health-=f1;
            fighter2.health-=f2;

            console.log(fighter1.name+": "+ fighter1.health+ " " + fighter2.name+":"+fighter2.health);
			

            // print player one and two health and name to console.log

            //check for victor
            var result = winnerCheck();// assign the function winnerCheck to the variable result
            console.log(result); //print result to console.log
            if (result==="no winner")
            {
                round++;
				var roundDsp = document.querySelectorAll('#round');
	 console.log(roundDsp);
	 roundDsp.innerHTML = "Round " +round+ " Over" ;
				
              alert(fighter1.name+":"+fighter1.health+"  *ROUND "+round+" OVER"+"*  "+fighter2.name+":"+fighter2.health);

            } else{
               	 roundDsp.innerHTML = result ;

                break;
           };

        };
    };

    /*

    Declare function to check if there is no winner or one winner

     */
    function winnerCheck(){
        var result="no winner";
        if (fighter1.health<1 && fighter2.health<1)
        {
            result = "You Both Die";
        } else if(fighter1.health<1){
            result =fighter2.name+" WINS!!!"
        } else if (fighter2.health<1)
        {
            result = fighter1.name+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/
   //fight();
   var btnClick = document.getElementsByTagName('A');
	console.log(btnClick);
	
			btnClick.addEventListener('click', fight, false);
	

})();