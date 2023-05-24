let nimps = 'tete';

function testarossa() {
  nimps = 'toto';
  return null
}

console.log('nimps11', nimps);
testarossa();
console.log('nimps22', nimps);

window.addEventListener('load', () => {
  console.log('document ready');
});

console.log('non-critical.js 🎉');