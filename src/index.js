import './js/utils/slider'
import './js/utils/timer'
import './js/utils/displays'
import '../style/style.scss'
// import './js/utils/catalogs/catalog'
// import './js/utils/catalogs/script'
// import './js/utils/catalogs/store'
// import './js/utils/catalogs/createproduct'
// import "./js/utils/registration/registration"

import catalogProducts from './js/utils/catalogs/script';
import CreateProduct from './js/utils/catalogs/createproduct';
import Store from './js/utils/catalogs/store';
import AllProducts from './js/utils/catalogs/catalog';
import Cart from './js/utils/catalogs/cart';

let createProduct = new CreateProduct(".container_counter", catalogProducts);

let store = new Store();

let allProducts = new AllProducts(".container_products", catalogProducts, ".container_counter");

let cart = new Cart(".container_cart", ".container_counter", catalogProducts);
