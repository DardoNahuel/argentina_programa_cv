//Funcion Boton wps que te lleva en una nueva ventana, a enviar msj directo desde la web wsp
function enviar_wsp() {
  myWindow = window.open("https://api.whatsapp.com/send?phone=%2B541160468633&text=", "_blank", "width=500, height=500");
}