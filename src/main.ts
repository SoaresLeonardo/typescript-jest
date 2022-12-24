import { EnterpriseCustomer } from './classes/customer';
import { FiftyPercentDiscount } from './classes/discout';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/message';
import { Persistency } from './services/persistency';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppcart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa gigante',
  '11111111',
);

const order = new Order(shoppcart, messaging, persistency, enterpriseCustomer);

shoppcart.addItem(new Product('Camiseta', 10));
shoppcart.addItem(new Product('Caderno', 5.54));

console.log(shoppcart);
console.log(shoppcart.total());
console.log(shoppcart.totalWidthDicount());
order.checkout();
console.log(order.orderStatus);
