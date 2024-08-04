import ReactModal from "react-modal";
import { API_URL } from "../const";

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
  if (!data) {
    return null;
  }

  return <ReactModal 
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
    <button onClick={onRequestClose}>Закрыть</button>
  </ReactModal>;
};
