import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      "category"
    );

    return currentCategory === category ? "active" : "";
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo-link">
          <img
            className="header__logo"
            src="./image/logo.svg"
            alt="Логотип Cup time"
          />
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link 
                to="/products?category=tea" 
                className={`header__menu-link ${getActiveClass("tea")}`}
              >
                Чай
              </Link>
            </li>

            <li className="header__menu-item">
              <Link
                to="/products?category=coffee"
                className={`header__menu-link ${getActiveClass("coffee")}`}
              >
                Кофе
              </Link>
            </li>

            <li className="header__menu-item">
              <Link
                to="/products?category=teapots"
                className={`header__menu-link ${getActiveClass("teapots")}`}
              >
                Чайники
              </Link>
            </li>

            <li className="header__menu-item">
              <Link
                to="/products?category=cezves"
                className={`header__menu-link ${getActiveClass("cezves")}`}
              >
                Турки
              </Link>
            </li>

            <li className="header__menu-item">
              <Link 
                to="/products?category=other" 
                className={`header__menu-link ${getActiveClass("other")}`}
              >
                Прочее
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__cart">
          <Link to="/cart" className="header__cart-link">
            6
          </Link>

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
