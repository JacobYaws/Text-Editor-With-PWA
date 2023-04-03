const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event.preventDefault();
    // This block stores the listener for the event. If the event hasn't been triggered, the install button will be visible.
    console.log('Success', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    // This block controls the activation of the prompt. If the application hasn't been installed, the prompt will show upon clicking the install button.
    const installPromptEvent = window.deferredPrompt;
    if (!installPromptEvent) {
        return;
    }
  installPromptEvent.prompt();
});

// Might need to remove 'event' from the parentheses.
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // This block controls the prompt actions after the application is installed. Once the installation is complete, the prompt will disappear.
    console.log('Success', 'appinstalled', event);
    window.deferredPrompt = null;
});
