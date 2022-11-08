const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

function fondo1() {
  document.body.style.background = " url('../imagenes/fondo1.jpeg')  ";
}
function fondo2() {
  document.body.style.background = " url('../imagenes/fondo2.jpeg') ";
}
function fondo3() {
  document.body.style.background = " url('../imagenes/fondo3.jpg') ";
}
function fondo4() {
  document.body.style.background = " url('../imagenes/fondo4.jpg')  ";
}

function fondo5() {
  document.body.style.background = " url('../imagenes/fondo6.jpeg')  ";
}

