const createCounter = () => {
  const button = document.createElement("button");
  button.innerText = "Zacznij odliczanie";
  button.id = "startInterval";
  document.body.appendChild(button);
  const heading = document.createElement("h1");
  heading.innerText = 0;
  heading.id = "counter";
  document.body.appendChild(heading);
  return { button, heading };
};
const startCounter = createCounter();
startCounter.button.addEventListener("click", () => {
  let counterValue = parseInt(startCounter.heading.innerText);
  setInterval(() => {
    counterValue++;
    startCounter.heading.innerText = counterValue;
  }, 1000);
});
