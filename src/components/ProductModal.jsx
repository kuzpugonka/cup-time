import ReactModal from "react-modal";
import { API_URL } from "../const";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!data) {
    return null;
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAppToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyle}
      contentLabel="Product Modal"
    >
      <h2>{data.title}</h2>
      <img src={`${API_URL}${data.img}`} alt={data.title} />
      <p>{data.price}</p>
      <ul>
        {Object.entries(data.additional).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handleDecrease}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleAppToCart}>Добавить в корзину</button>
      <button onClick={onRequestClose}>Закрыть</button>
    </ReactModal>
  );
};
