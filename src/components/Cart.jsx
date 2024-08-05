import { useCart } from "../context/CartContext";
// import { products } from "../products";
import { CartItem } from "./CartItem";
import { SkeletonLoader } from "./SkeletonLoader";

export const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart
    ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0)
    : 0;

  return (
    <section className="carts">
      <div className="container carts__container">
        <h2 className="carts__title title">Корзина ({cart.length})</h2>

        <ul className="carts__list">
          {cart ? (
            cart.map((item) => <CartItem key={item.id} data={item} />)
          ) : (
            <SkeletonLoader />
          )}
        </ul>

        <div className="carts__itog">
          <div className="carts__itog-sum">
            <p className="carts__itog-title">Итого:</p>
            <p className="carts__total">{totalPrice}&nbsp;₽</p>
          </div>
          <button className="carts__itog-btn">Заказать</button>
        </div>
      </div>
    </section>
  );
};
