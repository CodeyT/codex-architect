const banner = `
 ____          _                _             _     _ _            _
/ ___|___   __| | _____  __    / \\   _ __ ___| |__ (_) |_ ___  ___| |_
| |   / _ \\ / _\` |/ _ \\ \\/ /   / _ \\ | '__/ __| '_ \\| | __/ _ \\/ __| __|
| |__| (_) | (_| |  __/>  <   / ___ \\| | | (__| | | | | ||  __/ (__| |_
\\____\\___/ \\__,_|\\___/_/\\_\\ /_/   \\_\\_|  \\___|_| |_|_|\\__\\___|\\___|\\__|
`;

let i = 0;
const speed = 5; // milliseconds between characters

function typeASCII() {
  const target = document.getElementById("ascii-banner");
  if (i < banner.length) {
    target.textContent += banner[i];
    i++;
    setTimeout(typeASCII, speed);
  }
}

window.onload = typeASCII;

