export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a className="header__logo-link">
          <img
            className="header__logo"
            src="./image/logo.svg"
            alt="Логотип Cup time"
          />
        </a>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Чай
              </a>
            </li>

            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Кофе
              </a>
            </li>

            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Чайники
              </a>
            </li>

            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Турки
              </a>
            </li>

            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Прочее
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__cart">
          <a href="cart.html" className="header__cart-link">
            6
          </a>

          <svg
            className="header__cart-nav"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="9.5" width="20" height="1" fill="#D9D9D9" />
            <rect x="4" y="14.5" width="20" height="1" fill="#D9D9D9" />
            <rect x="4" y="19.5" width="20" height="1" fill="#D9D9D9" />
          </svg>
        </div>
      </div>
    </header>
  );
};
