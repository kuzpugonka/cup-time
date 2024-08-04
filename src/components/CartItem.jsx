import { API_URL } from "../const";

export const CartItem = ({ data }) => {
  return (
    <li className="carts__item">
      <article className="cart">
        <img
          src={`${API_URL}${data.img}`}
          alt={data.title}
          className="cart__img"
        />
        <div className="cart__content">
          <h3 className="cart__title">{data.title}</h3>
          <div className="cart__sum">
            <button className="cart__sum-min">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  rx="3.5"
                  stroke="#B8B8B8"
                />
                <rect x="12" y="17" width="12" height="2" fill="#1D1C1D" />
              </svg>
            </button>
            <input className="cart__sum-num" type="number" value={1} />
            <button className="cart__sum-max">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="35"
                  height="35"
                  rx="3.5"
                  stroke="#B8B8B8"
                />
                <rect x="12" y="17.25" width="12" height="1.5" fill="#1D1C1D" />
                <rect
                  x="17.25"
                  y="24"
                  width="12"
                  height="1.5"
                  transform="rotate(-90 17.25 24)"
                  fill="#1D1C1D"
                />
              </svg>
            </button>
          </div>
          <p className="cart__price">{data.price}&nbsp;₽</p>
        </div>
      </article>
    </li>
  );
};
