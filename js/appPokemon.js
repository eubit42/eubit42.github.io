//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const pokemon = document.querySelector(".pokemon img");
const description = document.querySelector(".info");
const bottom = document.querySelector(".bottom");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(100px)";
  pokemon.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  bottom.style.transform = "translateZ(125px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  pokemon.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  bottom.style.transform = "translateZ(0px)";
});