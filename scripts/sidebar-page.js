document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    window.parent.postMessage({ type: 'close-notebooker-sidebar' }, '*');
  }
});
