"use script"

console.log( "Hello from external Javascript")
alert("Welcome to my Website!")

let response=prompt(" What is your favorite color?");
alert("Great, " + response + " is my favorite color too!");

/*You have rented some movies for your kids:
The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
*/

let pricePerDay = 3;
let numOfDaysRented = prompt("Thank you for using Papa's Rental Movie," +
    "How many days would you like to rent your movies?")
alert("You will be renting the movie for " + numOfDaysRented + " days. You will pay $" + (numOfDaysRented * pricePerDay));

/*Suppose you're working as a contractor for 3 companies:
Google, Amazon and Facebook, they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook,
6 hours for Google and 4 hours for Amazon.
*/
let amazonRatePerHour = 380
let googleRatePerHour = 400
let facebookRatePerHour = 350

let sumGoogle = googleRatePerHour * totalGoogle;

let totalGoogle = prompt("This is how much money will I get pay working for Google")
let totalFacebook = prompt("This is how much money will I get pay working for Facebook")
let totalAmazon = prompt("This is how much money will i get pay working for Amazon")
// let sumGoogle = googlePay * totalGoogle; //could create a variable to get the total?

alert("You will earn $" + sumGoogle + "from working at Google. You'll earn $" + (totalAmazon * amazonRatePerHour) + "from Amazon you'll earn $" + (totalFacebook * facebookRatePerHour) + "from Facebook! Good job!" )




//A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.


let timeInSchedule = confirm("My schedule is not in conflict with the class, so I am registering?")
let roomInClass = confirm("If the class is not full, let me register?");
alert( "Looks like I will be joining this awesome class" + (timeInSchedule && roomInClass))


/* A product offer can be applied only if a person buys more than 2 items,
  and the offer has not expired. Premium members do not need to buy a specific
 amount of products*/

let moreThanTwo = confirm("How many items do you have on the cart basket?");
let offerStillValid = confirm("Is the offer still valid?");
let premiumMember = confirm("Are you a premium member?");
alert("Welcome to Cash - looks like you brought some items"
    + (moreThanTwo && offerStillValid || premiumMember) + " nice cool hat ");

