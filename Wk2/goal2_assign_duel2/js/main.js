/*
 * Name: Kevin Smith
 * Date: 6/6/15.
 * Assignment: Week#1 Analyze Duel
 */


// self-executing function
(function(){

    console.log("FIGHT!!!"); // out string to console.log

    //player name
    var playerOne = ["Spiderman", 20, 100]; //declare variable for player one
    var playerTwo = ["Batman", 20, 100];  //


    //initiate round
    var round=0;


    /*

    Declare function to process randomly player health and damage during fight

    */

    function fight(){
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++)// for loop
        // alert to user player one and player two name and health
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo [1]* .5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);



            //inflict damage
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2]+ " " + playerTwo[0]+":"+playerTwo[2]);

            // print player one and two health and name to console.log

            //check for victor
            var result = winnerCheck();// assign the function winnerCheck to the variable result
            console.log(result); //print result to console.log
            if (result==="no winner")
            {
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

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
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
        } else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/
    fight();

})();