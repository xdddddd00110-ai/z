const display = document.getElementById("display");

// Agregar número u operador
function append(value) {
  display.classList.remove("result");
  display.value += value;
}

// Limpiar pantalla
function clearDisplay() {
  display.classList.remove("result");
  display.value = "";
}

// Borrar último caracter
function deleteLast() {
  display.classList.remove("result");
  display.value = display.value.slice(0, -1);
}

// Calcular expresión
function calculate() {
  try {
    display.value = eval(display.value);
    display.classList.add("result");
    setTimeout(() => display.classList.remove("result"), 500);
  } catch {
    display.value = "Error";
  }
}