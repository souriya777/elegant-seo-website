const panel = {
  open,
  close
};

(function() {
  window.addEventListener('load', () => {
    console.log('[souriya 😎]: panel.js');

    const PANEL = document.querySelector('.panel');

    panel.open = () => PANEL.dataset.shown = "true";
    panel.close = () => PANEL.dataset.shown = "false";
  });
})();

export default panel;