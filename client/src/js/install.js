const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event.preventDefault();
    console.log('Success', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    const installPromptEvent = window.deferredPrompt;
    if (!installPromptEvent) {
        return;
    }
  installPromptEvent.prompt();
});

// Might need to remove 'event' from the parentheses.
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Success', 'appinstalled', event);
    window.deferredPrompt = null;
});