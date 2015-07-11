/*
 * Name: Kevin Smith
 * Date: 7/11/15.
 * Assignment: Week#1 Analyze Duel
 */


// self-executing function
(function(){

    console.log("FIGHT!!!"); // out string to console.log

    //player name
    var playerOneName = "Spiderman"; //declare variable for player one
    var playerTwoName = "Batman";  // declare variable for player two
    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    /*
declare number variable to store  player one and two damage

     */


    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    /*
     declare number variable to store  player one and two health

     */

    //initiate round
    var round=0;


    /*

    Declare function to process randomly player health and damage during fight

    */

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)// for loop
        // alert to user player one and player two name and health
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);



            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            // print player one and two health and name to console.log

            //check for victor
            var result = winnerCheck();// assign the function winnerCheck to the variable result
            console.log(result); //print result to console.log
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

        };
    };

    /*

    Declare function to check if there is no winner or one winner

     */
    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/
    fight();

})();