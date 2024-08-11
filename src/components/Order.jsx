import { useOrder } from "../context/OrderContext";

export const Order = () => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = (e) => {
    const {name, value} = e.target
    updateOrderDetails(name, value)
  }

  return (
    <section className="order">
      <div className="container">
        <h2 className="order__title title">Доставка</h2>

        <form className="order__form">
          <input
            className="order__input"
            placeholder="Имя"
            type="text"
            name="name"
            value={orderDetails.name}
            onChange={handleChange}
          />
          <input
            className="order__input"
            placeholder="Телефон"
            type="tel"
            name="phone"
            value={orderDetails.phone}
            onChange={handleChange}
          />
          <input
            className="order__input order__input_address"
            placeholder="Адрес"
            type="text"
            name="address"
            value={orderDetails.address}
            onChange={handleChange}
          />

          <fieldset className="order__pay">
            <h3 className="order__pay-title">Оплата:</h3>

            <label className="order__pay-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="card"
                checked={orderDetails.payment === "card"}
                onChange={handleChange}
              />
              Картой
            </label>

            <label className="order__pay-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="cash"
                checked={orderDetails.payment === "cash"}
                onChange={handleChange}
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
