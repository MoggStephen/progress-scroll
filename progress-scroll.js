//Get scroll progress element
const scrollBar = document.querySelector('.progress');

//Elements needed in calculating percentage of the document and total document height
const body = document.body;
const html = document.documentElement;
const windowHeight = window.innerHeight;

//Total document height
const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

let windowBottom;
let windowScrollTop;

//Calculates the percentage of the page that has been scrolled.
function updateScrollBar() {
  windowBottom = windowHeight + window.pageYOffset;
  windowScrollTop = (window.pageYOffset || html.scrollTop) - (html.clientTop || 0);
  const percent = (windowScrollTop / (docHeight - windowHeight)) * 100;
  scrollBar.style.width = percent + '%';
}

window.addEventListener('scroll', updateScrollBar);