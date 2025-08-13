const inputSend = document.querySelector("#textareaSend");
const buttonSend = document.querySelector("#buttonSend");
const inputSearch = document.querySelector("#inputSearch");
const chatMessage = document.querySelector(".chat-messages");



buttonSend.addEventListener("click", () => {


  let message = inputSend.value;

  createMenssage(`sent`, message);
  clearInput();

  setTimeout(() => {
    createMenssage(`received`, message + " ?");
  }, 2000);



});



inputSend.addEventListener("keydown", (event) => {

  let message = inputSend.value;

  if (event.key === "Enter") {
    createMenssage("sent", message);
    clearInput();

    setTimeout(() => {
      createMenssage(`received`, message + " ?");
    }, 2000);


  }
});


function createMenssage(type, message) {
  const divContainer = document.createElement("div");
  divContainer.classList.add("message", type);

  const textMessage = document.createElement("p");
  textMessage.textContent = message;

  const timeMessage = document.createElement("p");
  timeMessage.classList.add("timestamp");
  timeMessage.textContent = formatDate(new Date);

  divContainer.appendChild(textMessage);
  divContainer.appendChild(timeMessage);

  chatMessage.appendChild(divContainer);

  chatMessage.scrollTop = chatMessage.scrollHeight;

}


function clearInput() {
  inputSend.value = "";
}


function formatDate(date) {
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  // Hora en formato 24h
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, "0");

  // AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  // Si querés que siga mostrando de 0 a 24 y además AM/PM, no se convierte a 12h
  // Si quisieras formato 12h, sería: hours = hours % 12 || 12;

  // Fecha y día
  const opcionesFecha = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const fechaTexto = isToday ? "Hoy" : date.toLocaleDateString("es-ES", opcionesFecha);

  return `${hours}:${minutes} ${ampm}, ${fechaTexto}`;
}
