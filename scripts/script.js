// animação do parágrafo
const text = 'Hi! Im Bruno Nobre, a developer from Brazil'
const target = document.getElementById("typewriter-target")
let index = 0

function type() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index)
    index++;
    setTimeout(type, 50)
  }
}


window.addEventListener("DOMContentLoaded", type)

// animação do botão + scroll suave
const button = document.getElementById("seeMyWork-btn")

button.addEventListener("click", () => {
  // animação do botão
  button.classList.add("pulse-animation")

  setTimeout(() => {
    button.classList.remove("pulse-animation")
  }, 400);

  // scroll suave
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
})
