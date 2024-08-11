import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { SkeletonLoader } from "./SkeletonLoader";
import { useOrder } from "../context/OrderContext";
import { API_URL } from "../const";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`Ошибка при отправке заказа`);
      }

      const result = await response.json();

      setOrderStatus("success");
      setOrderId(result.order.id);
      clearCart();
      clearOrderDetails();
    } catch (error) {
      setOrderStatus("error");
      console.log(`Ошибка: ${error}`);
    } finally {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const totalPrice = cart
    ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0)
    : 0;

  return (
    <section className="carts">
      <div className="container carts__container">
        <h2 className="carts__title title">
          Корзина ({cart ? cart.length : 0})
        </h2>

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
          <button className="carts__itog-btn" onClick={handleSubmit}>
            Заказать
          </button>
        </div>
      </div>

      <ReactModal
        className="modal-cart"
        overlayClassName="modal-cart__overlay"
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
      >
        <h2 className="modal-cart__title">
          {orderStatus === "success"
            ? `Заказ успешно отправлен.
             Номер Вашего заказа: ${orderId}`
            : `Произошла ошибка при отправке заказа`}
        </h2>
        <button className="modal-cart__button" onClick={closeModal}>Закрыть</button>
      </ReactModal>
    </section>
  );
};
