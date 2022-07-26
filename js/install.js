let deferredInstallPrompt = null;
const installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA);


indow.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);


function saveBeforeInstallPromptEvent(evt) {
    //CODELAB: Add code to save event & show the install button
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}    

function installPWA(evt) {
    // CODELAB: Add code show install prompt & hide the install button.
    // CODELAB: Log user response to prompt.
   }

   function logAppInstalled(evt) {
    // CODELAB: Add code to log the event
   }