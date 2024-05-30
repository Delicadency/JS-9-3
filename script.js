/* Stwórz przycisk, o atrybucie id=”startInterval”. Obok lub pod nim dodaj tag h1, który początkowo ma mieć w sobie tylko cyfrę “0” oraz id=”counter”. 
Po kliknięciu w przycisk, uruchom funkcję interwału, która co sekundę będzie zwiększać licznik zaczynając od 0 i aktualizować zawartość H1, */
const createCounter = () => {
  const button = document.createElement("button");
  button.innerText = "Zacznij odliczanie";
  button.id = "startInterval";
  document.body.appendChild(button);
  const heading = document.createElement("h1");
  heading.innerText = 0;
  heading.id = "counter";
  document.body.appendChild(heading);
  return {button, heading}
};
