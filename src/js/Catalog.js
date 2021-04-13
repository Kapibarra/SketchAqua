import CATALOG from '../catalog.js';

class Products {
    render() {
        CATALOG.forEach((element) => {
            console.log(element)
        })
    }
}

const productsPage = new Products();
productsPage.render()
