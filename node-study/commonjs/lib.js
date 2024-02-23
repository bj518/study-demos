console.log("hi");

module.exports = function (action) {
  const random = Math.random() * 3;
  console.log(random);
  let computerScience;
  if (random < 1) {
    computerScience = "rock";
  } else if (random > 2) {
    computerScience = "scissor";
  } else {
    computerScience = "paper";
  }

  if (computerScience === action) {
    console.log("平", computerScience);
  } else if (
    (action === "rock" && computerScience === "scissor") ||
    (action === "scissor" && computerScience === "paper") ||
    (action === "paper" && computerScience === "rock")
  ) {
    console.log("you win", computerScience);
  } else {
    console.log("you lose", computerScience);
  }
};
