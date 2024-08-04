import { products } from "../products";
import { CartItem } from "./CartItem";

export const Cart = () => {
  return (
    <section className="carts">
      <div className="container carts__container">
        <h2 className="carts__title title">Корзина (6)</h2>

          <ul className="carts__list">

          {products.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
           
          </ul>

          <div className="carts__itog">
            <div className="carts__itog-sum">
              <p className="carts__itog-title">Итого:</p>
              <p className="carts__total">2200&nbsp;₽</p>
            </div>
            <button className="carts__itog-btn">Заказать</button>
          </div>
        </div>
    </section>
  );
};
