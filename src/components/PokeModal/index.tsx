import Modal from "react-modal";
import { PokeDetails } from "../../models";

interface IPokeModalProps {
  isOpen: boolean;
  setCloseModal: () => void;
  data: PokeDetails;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PokeModal = ({ isOpen, setCloseModal, data }: IPokeModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={setCloseModal} style={customStyles}>
      <button onClick={setCloseModal}>X</button>
      <h1>{data.name}</h1>
    </Modal>
  );
};

export { PokeModal };
