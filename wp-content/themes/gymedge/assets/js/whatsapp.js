    // Selecciona el botón de enviar
const enviarBtn = document.querySelector("#enviar");

// Agrega un evento de clic al botón
enviarBtn.addEventListener("click", () => {
  // Obtiene los valores de los campos del formulario
  const nombre = document.querySelector("#nombre").value;
  const telefono = document.querySelector("#telefono").value;
  const mensaje = document.querySelector("#mensaje").value;
  
  // Construye la URL personalizada
  const url = `https://api.whatsapp.com/send?phone=+56964341938&text=Nombre:%0A%0A${encodeURIComponent(nombre)}%0A%0ATelefono:%0A%0A${telefono}%0A%0AMensaje:%0A%0A${encodeURIComponent(mensaje)}`;

  // Abre la URL en una nueva ventana
  window.open(url);
});
