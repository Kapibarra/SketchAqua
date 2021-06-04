// import Products from './js/Catalog.js'
import "./styles/index.scss";
/* BURGER*/
(function () {
    const hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
  
      doToggle: function (e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      },
    };
    hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
    // hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  }());
  
  function burgerButtonToggle() {
    const burgerButton = document.querySelector(".nav-toggle")
    const yPos = window.scrollY;
    if (yPos > 10) {
      burgerButton.classList.add("unvisible")
      burgerButton.classList.remove("visible");
    } else {
      burgerButton.classList.remove("unvisible");
      burgerButton.classList.add("visible");
    }
  }

  /* YEAR copyright */
  window.addEventListener("scroll", burgerButtonToggle);
document.getElementById("year").innerHTML = new Date().getFullYear();

/* Gallery sort */
if (document.querySelector(".gallery__main")) {
    const filterSelectEl = document.getElementById('filter');
    const itemsEl = document.getElementById('items');
    filterSelectEl.onchange = function() {
        console.log(this.value);
      const items = itemsEl.getElementsByClassName('item');
      for (let i=0; i<items.length; i++) {
    if (items[i].classList.contains(this.value)) {
    items[i].style.display = 'block';
        } else {
        items[i].style.display = 'none';
        }
      }
    };   
}

/* scroll */

const scrollToTopButton = document.getElementById("js-top");
const scrollFunc = () => {
const y = window.scrollY;
if (y > 200) {
scrollToTopButton.className = "top-link show";
} else {
scrollToTopButton.className = "top-link hide";
}
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
const c = document.documentElement.scrollTop || document.body.scrollTop;
if (c > 0) {
window.requestAnimationFrame(scrollToTop);
window.scrollTo(0, c - c / 18);
}
};

scrollToTopButton.onclick = function (e) {
e.preventDefault();
scrollToTop();
}

