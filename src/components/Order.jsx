export const Order = () => {
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
          />
          <input
            className="order__input"
            placeholder="Телефон"
            type="tel"
            name="phone"
            id=""
          />
          <input
            className="order__input order__input_addres"
            placeholder="Адрес"
            type="text"
            name="addres"
          />

          <fieldset className="order__pay">
            <h3 className="order__pay-title">Оплата:</h3>

            <label className="order__pay-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="card"
              />
              Картой
            </label>

            <label className="order__pay-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="cash"
                defaultChecked
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
