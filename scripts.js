// scripts.js
const company = 'ACME Inc.';
const year = 2022;

const message = '© '+ company + year
document.querySelector('[data-key="footer"]').innerText = message;
console.log (message)

