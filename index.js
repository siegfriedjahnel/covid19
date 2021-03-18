//----------------------------
// JavaScript code -- related to the appshell
//----------------------------


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '.' }).then(function (reg) {
    // Registrierung erfolgreich
    //console.log('Registrierung erfolgreich. Scope ist ' + reg.scope);
  }).catch(function (error) {
    // Registrierung fehlgeschlagen
    //console.log('Registrierung fehlgeschlagen mit ' + error);
  });
};
//-------------------------------------------------------------------------------------
const menu = document.getElementById("menu");
const thisUrl = window.location.href;
const btnToggleMenu = document.getElementById("btnToggleMenu");
const boxQrcode = document.getElementById("boxQrcode");

btnToggleMenu.addEventListener('click', function () {
  toggleMenu();
});

function toggleMenu() {
  if (menu.style.visibility == "hidden" || menu.style.visibility == "") {
    menu.style.visibility = "visible";
  } else {
    menu.style.visibility = "hidden";
  }
}
function closeMenu() {
  menu.style.visibility = "hidden";
}

function closeParent(id) {
  document.getElementById(id).parentElement.style.visibility = "hidden";
}

function showQR() {
  let div = document.getElementById("innerBoxQrcode");
  div.innerHTML = "";
  new QRCode(div, { width: 200, height: 200, text: thisUrl });
  boxQrcode.style.visibility = "visible";
  closeMenu();
}

function sendToWhatsapp() {
  window.location = "whatsapp://send?text=" + thisUrl;
  closeMenu();
}

function showAppInfo() {
  closeMenu();
  fetch('info.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      content.innerHTML = text;
    })
}

function addToHomeScreen() {
  var a2hsBtn = document.querySelector(".ad2hs-prompt");
   // hide our user interface that shows our A2HS button
  a2hsBtn.style.display = 'none'; 
  
  // Show the prompt 
  deferredPrompt.prompt(); 
  // Wait for the user to respond to the prompt 
  deferredPrompt.userChoice
    .then(function (choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      } deferredPrompt = null;
    });
}