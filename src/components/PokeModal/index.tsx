import Modal from "react-modal";
import { PokeDetails } from "../../models";
import { Wrapper } from "./styles";

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
    minWidth: "800px",
    minHeight: "372px",
    borderRadius: "16px",
    padding: "0px",
  },
};

const PokeModal = ({ isOpen, setCloseModal, data }: IPokeModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={setCloseModal} style={customStyles}>
      <Wrapper
        backgroundColor={data?.types[0]?.type?.name}
        gradientBackgroundColor={data?.types[1]?.type?.name}
      >
        <button onClick={setCloseModal}>X</button>
        <h1>{data.name}</h1>
      </Wrapper>
    </Modal>
  );
};

export { PokeModal };
