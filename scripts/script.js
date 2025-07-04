const text = 'Hi! Im Bruno Nobre, a developer from Brazil';
  const target = document.getElementById("typewriter-target");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 50); // velocidade da digitação (ms)
    }
  }

  window.addEventListener("DOMContentLoaded", type);


//adiciona o movimento suave
document.getElementById("seeMyWork-btn").addEventListener('click',()=> {
    document.getElementById('projects').scrollIntoView({behavior:'smooth'})
})