import CATALOG from '../catalog.js';

class Products {
    render() {
        let htmlCatalog = ''
        CATALOG.forEach(({id,description,price,category,photo}) => {
            console.log(id,name,price,category,photo)
           htmlCatalog += `
           <div class="main__card item ${category} ${id}">
           <div class="main__card-picture">
               <img class="card-image" src="${photo}" alt="picture" oncontextmenu="return false;">
           </div>
           <p class="main__card-decription">${description}</p>
           <p class="main__card-price">ЦЕНА: ${price}</p>
           <p class="main__card-price">Артикул: ${id}</p>
           <a class="btn" href="/contacts.html"><button class="button">КУПИТЬ</button></a>
       </div>
           `
        })
document.getElementById('items').innerHTML = htmlCatalog
    }
}

 const productsPage = new Products();
productsPage.render()



/* <div class="main__card item aquarelle">
<div class="main__card-picture">
    <img src="../img/card1.png">
</div>
<p class="main__card-price">ЦЕНА: 9999RUB</p>
<a class="btn"><button class="button">BUTTON</button></a>
</div>
 */