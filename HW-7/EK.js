//declaring what to do if they click yes or no
var questionAnswers = "";
var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.addEventListener("click", function() {
  questionAnswers = questionAnswers + "1";
  updateText(questionAnswers);
  console.log(questionAnswers);
});

no.addEventListener("click", function() {
  if (questionAnswers != 0) {
    questionAnswers = questionAnswers + "0";
  }
  updateText(questionAnswers);
  console.log(questionAnswers);
});

//creating the different possible outcomes of clicking yes or no
function updateText() {
  switch (questionAnswers) {


    case "1":
      changeText(
        "<br> The forest is beautiful, and you and your friend are walking on one of the main trails. Continuing on the trail, you soon come across a berry bush that is slightly off the trail. The berries are bright pink and have small, white spots on them. They remind you of an Alice-in-Wonderland sort of fruit. Do you wish to collect these berries?"
      );
      break;


    case "10":
      changeText(
        "<br> You decide to let the berries be, since they are so bizarre looking and appear to be dangerous. <br> After continuing down the main trail, you come to a split in the trail.<br> Do you wish to go off the main trail and explore the other trail? "
      );
      break;

    case "11":
      changeText(
        "<br> You and your friend decide to collect the berries from the bush. The smell really sweet but seem to slightly burn your hands as you touch them, which you think is bizarre. Do you want to eat the berries?"
      );
      break;

    case "101":
      changeText("<br> You and your friend continue on the dirt trail. You notice that there is a human figure in front of you. As you approach closer, you realize it is... what you think is... Merlin the Wizard? <br> 'Hello, my dear children. It is me, Merlin the wizard,'' the man says, introducing himself. <br> You and your friend look at each other quizzically. <br> 'Don't be afraid children. I am here to grant you a wish. Ever since my child died, it is my duty to spread happiness throughout the human realm by granting wishes to children that meet me.' Do you continue to talk to Merlin?"
      );
      break;

    case "100":
      changeText("<br> As you continue down the main trail, you see animal tracks, and you are able to recognize them. How did you recognzie them? <br>Because there is a giant black bear who is also walking on the main path, but unfortunately, the bear is walking towards you. <br> Ending: You and your friend are ultimately consumed by the black bear. You and your friend died. Sorry ☹ "
      );
      break;

    case "111":
      changeText("<br> They are sour and sweet, kind of like the sweet and sour sauce you can get at a Chinese restaurant, which you think is odd. Maybe you can market these berries to Chinese restuarants in your town. <br> Within seconds of tasting the berries, you feel your body tense and you are unable to move. Your eyes close, and the last thing you remember is seeing black. <br> Ending: Uh oh. You ate a weird berry. You and your friend died. Sorry ☹"
      );
      break;

    case "110":
      changeText(
        "<br> You and your friend decide to collect the berries from the bush. The smell really sweet but seem to slightly burn your hands as you touch them, which you think is bizarre. After collecting the berries, you continue to walk down the main path. As you continue down the main trail, you see animal tracks, and you are able to recognize them. How did you recognzie? <br>Because there is a giant black bear who is also walking on the main path, but unfortunately, the bear is walking towards you. <br> Do you wish to throw the berries you collected towards the bear?"
      );
      break;

    case "1011":
      changeText("<br> 'Go ahead and make a wish, child,' Merlin says. Do you want to make a wish? "
      );
      break;

    case "1010":
      changeText("<br> You and your friend feel weirded out after meeting Merlin the Wizard. After meeting this odd character, you decided to go home to avoid further danger. Thank God! <br> Ending: A good one <3"
      );
      break;

    case "1101":
      changeText(
        "<br> You and your friend throw the berries towards the bear, which the bear takes interest in. After you throw the berries, you and your friend are able to escape. Happy Day!"
      );
      break;

    case "1100":
      changeText("<br> Bad decision. You and your friend try to make a run for it, but are unable to outrun the bear. Ending: You and your friend are ultimately consumed by the black bear. You and your friend died. Sorry ☹  "
      );
      break;

    case "10111":
      changeText("<br>'Ah, I see. That is a lovely wish indeed. I will do my best to grant that wish for you,' Merlin says. <br> You and your friend still don't feel like this is truly Merlin the wizard. Soon you noticed that the hat 'Merlin' is wearing was the same hat you wore for halloween in 2002. Uh oh. <br> 'Thank you for your time, Merlin, but my friend and I need to leave,' you say urgently. You and your friend turn around and run home. <br> <br> Ending: You and your friend report 'Merlin the Wizard' to the authorities back home. Soon, 'Merlin' the wizard is caught and is found out to actually be a serial killer who has been on the loose since 1979. Congratulations, you have saved many children from a horrible fate! <3"
      );
      break;

    case "10110":
      changeText("<br> You and your friend feel weirded out after meeting Merlin the Wizard. After meeting this odd character, you decided to go home to avoid further danger. Thank God! <br> Ending: A good one <3"
      );
      break;



    }
  }

function changeText(text) {
  document.getElementById("text").innerHTML = text;
}
