// // *********************************** CHAPTERS 26-30 *********************
// // *********************************** QUESTION NO 01 *********************
var userIntege = +prompt("Enter a positive integer",25.62548);
document.write(
    "<h1> User Input Number: "+userIntege
    + "<br> Round off value: " + Math.round(userIntege)
    + "<br> Floor value: "+ Math.floor(userIntege)
    + "<br> Ceil Value: " +Math.ceil(userIntege)
)

// // *********************************** QUESTION NO 02 *********************
var userFloat = parseFloat(prompt("Enter a negative Number with decimal",-289.8154));
document.write(
    "<h1> User Input Number: "+userFloat
    + "<br> Round off value: " + Math.round(userFloat)
    + "<br> Floor value: "+ Math.floor(userFloat)
    + "<br> Ceil Value: " +Math.ceil(userFloat)
)


// // *********************************** QUESTION NO 03 *********************
var anumber = parseFloat(prompt("Enter a negative Number with decimal",-4));
document.write("<h1> The absolute value of " +anumber+ " is " + Math.abs(anumber))


// // // *********************************** QUESTION NO 04 *********************
document.write("<h1> Random dice value : "+ Math.floor(Math.random()*6))
document.write("<br> Random dice value : "+ Math.floor(Math.random()*6)+"</h1>")


// // *********************************** QUESTION NO 05 *********************
var check = Math.ceil(Math.random()*2);
var final;
if(check == 2){
    final = ("<h1> "+ check +" Random dice value : Heads </h1>" )
}
else if(check==1){
    final = ("<h1> "+ check +" Random dice value : tails </h1>" )
}
document.write(final)

// // *********************************** QUESTION NO 06 *********************
var oneTohundred = Math.floor(Math.random()*100);

document.write(
    ("<h1> Random number between 1 and 100: "+ oneTohundred )
)

// // *********************************** QUESTION NO 07 *********************
var userInput = prompt("Enter your weight in Kilograms").toLowerCase();
var userWeight = userInput.slice(0);
var userConvert = userWeight.split("");
var takeAlphabets = [];
for(var i=userWeight.length-1; i>0; i--){
    var a = userWeight.charCodeAt(i);
    if((a >= 65 && a <= 90) ||(a >= 97 && a <= 122) || a==32){
        takeAlphabets.unshift(userWeight.charAt(i));
        userConvert.pop();
    }else{        
        break;
    }
}
userConvert = userConvert.join("");
document.write("<h1> The weight of user is "+userConvert+" kilograms </h1>")
document.write(takeAlphabets)

// // *********************************** QUESTION NO 08 *********************
var secretNumber = Math.floor(Math.random()*10);
var userGuess = +prompt("Please Guess a Secret number between 1 to 10.");
if(userGuess == secretNumber){
    alert("Congratulation! Your Guess Number is correct.")
}else{
    alert("Try Again!")
}


