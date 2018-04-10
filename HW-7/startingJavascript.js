//creating pop-up boxes asking for name and best friend

var character;
var bestFriend;

var scene1 = function() {
  character = prompt("To start the adventure, please enter your name.");
  bestFriend = prompt("Please enter the name of your best friend")
  
  //creating the scene
  document.write(" It's a gorgeous day out today, and there's nothing better to do than spend the day with your best friend " + bestFriend + "! But what should the two of you do? There are forests to hike, rivers to swim in, ice cream to eat. You hear your cellphone ring and grab it. Speak of the devil, " + bestFriend + " is calling you now. \r \"Hi " + bestFriend + "!\""
+ "\r \“Hey " + character + "! What're you up to?\”"
+ "\r \“I was just thinking of what we should do today!\”"
+ "\r \"Well, it's so beautiful out today! I thought maybe we could go on a picnic?\""
+ "\r \"Sounds great! I didn't even think of a picnic. Where do you want to go? Do I need to bring anything?\""
+ "\r \"Nope, I've got plenty of food for the both of us! I thought maybe we could meet at Knotting Hill at noon?\""
+ "\r \"Perfect. We should definitely get ice cream afterwards- it's so hot out!\""
+ "\r \"Ice cream and a picnic... love it! I'll see you at noon.\"  " + bestFriend + " hangs up. You didn't get to say goodbye. Sometimes " + bestFriend + " is too fast for their own good."
+ "\r Noon rolls around and you see " + bestFriend + " waiting for you at the top of Knotting Hill. Birds are chirping, flowers are fragrant, and it couldn't be a better day for a picnic. " + bestFriend + " has a big, blue picnic blanket set out with plenty of food. " + bestFriend + " sees you approach."
+ "\r \“Hi, I'm glad you made it!\""
+ "\r \"Me too. The food looks so good! Thanks for bringing it,\" you say as you step onto the squishy picnic blanket. You wonder where they got such an awesome picnic blanket."
+ "\r \"No problem. I figured after we eat, we could explore the area a little. There's a forest and a pretty stream nearby. Sound good?\""
+ "\r \"Sounds great,\" you say."
+ "\r \"Great! Let's dig in!\""
+ "\r \"Ah, I'm stuffed! Thanks for a great meal,” you say. You can feel the blood rushing to your stomach.\""
+ "\r \"No problem,” " + bestFriend + " says, cleaning up the meal. “Are you ready to explore a little? Let's cross the river and explore the other side!\"");
}
console.log(scene1());
