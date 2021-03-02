if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '.' }).then(function(reg) {
    // Registrierung erfolgreich
    console.log('Registrierung erfolgreich. Scope ist ' + reg.scope);
  }).catch(function(error) {
    // Registrierung fehlgeschlagen
    console.log('Registrierung fehlgeschlagen mit ' + error);
  });
};
//-------------------------------------------------------------------------------------
const menu = document.getElementById("menu");

const btnCloseMenu = document.getElementById("btnCloseMenu");
const btnToggleMenu = document.getElementById("btnToggleMenu");
btnToggleMenu.addEventListener('click', function(){
  toggleMenu();
});
btnCloseMenu.addEventListener('click', function(){
  closeMenu();
});
function toggleMenu(){
  console.log("clicked");
  if(menu.style.visibility == "hidden" || menu.style.visibility == ""){
    menu.style.visibility = "visible";
  }else{
    menu.style.visibility = "hidden";
  }
}
function closeMenu(){
  menu.style.visibility = "hidden";
}