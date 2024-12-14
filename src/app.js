/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  console.log(who[1]);
  console.log("Hello Rigo from the console!");
  const randomWho = Math.floor(Math.random() * who.length);
  const excuse = document.getElementById("hola");

  console.log(who + action[1]);
  console.log(action[1]);
  console.log("Hello Rigo from the console!");
  const randomAction = Math.floor(Math.random() * action.length);
  let randomElementWho = who[randomWho];
  console.log(randomElementWho);

  let randomElementAction = action[randomAction];
  console.log(randomElementAction);
  console.log(randomElementWho + " " + randomElementAction);
  excuse.innerText = randomElementWho + " " + randomElementAction;

  console.log(what[1]);
  console.log("Hello Rigo from the console!");
  const randomWhat = Math.floor(Math.random() * what.length);
  let randomElementWhat = what[randomWhat];
  console.log(randomElementWhat);
  console.log(randomElementWho + "" + randomAction + "" + randomElementWhat);
  excuse.innerText =
    randomElementWho + " " + randomElementAction + " " + randomElementWhat;

  console.log(when[1]);
  console.log("Hello Rigo from the console!");
  const randomWhen = Math.floor(Math.random() * when.length);
  let randomElementWhen = when[randomWhen];
  console.log(randomElementWhen);
  console.log(
    randomElementWho +
      "" +
      randomElementAction +
      "" +
      randomElementWhat +
      "" +
      randomElementWhen
  );
  excuse.innerText =
    randomElementWho +
    " " +
    randomElementAction +
    " " +
    randomElementWhat +
    " " +
    randomElementWhen;
};
