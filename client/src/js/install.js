const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromotion();
    console.log(`'beforeinstallprompt' event was executed.`)
    

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent= 'Installed';
    
    hideInstallPromotion();
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
});
});


// Might need to remove 'event' from the parentheses.
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    hideInstallPromotion();
    deferredPrompt = null;
    console.log('PWA was installed');
    
});
