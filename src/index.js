import "./styles/index.scss";

document.getElementById("year").innerHTML = new Date().getFullYear();

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