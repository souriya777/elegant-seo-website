export function addEventListener(buttonClass, callback) {
  const BUTTON = document.querySelector(`.${buttonClass}`);

  if (BUTTON == null) {
    console.log(`[souriya 😎]: no element .${buttonClass}`);
    return;
  }

  BUTTON.addEventListener('click', () => { callback(); });
  BUTTON.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      callback();
    }
  });
}