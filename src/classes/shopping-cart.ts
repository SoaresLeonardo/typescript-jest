import { Discount } from './discout';
import { CartItem } from '../classes/interfaces/cart-item';
import { OrderStatus } from '../classes/interfaces/order-status';
import { ShoppingCartProtocol } from '../classes/interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return Number(
      this._items.reduce((total, item) => total + item.price, 0).toFixed(2),
    );
  }

  totalWidthDicount(): number {
    return this.discount.calculate(this.total());
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
