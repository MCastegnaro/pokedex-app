import Modal from "react-modal";
import { PokeDetails } from "../../models";
import { CloseIcon, PokeImage, PokeInfo, Wrapper } from "./styles";

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
    <Modal
      isOpen={isOpen}
      onRequestClose={setCloseModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <CloseIcon onClick={setCloseModal} />
      <Wrapper
        backgroundColor={data?.types[0]?.type?.name}
        gradientBackgroundColor={data?.types[1]?.type?.name}
      >
        <PokeImage>
          <img
            src={
              data?.sprites?.other.dream_world.front_default ||
              data?.sprites?.other["official-artwork"].front_default
            }
            alt="Imagen de pokémon"
          />
        </PokeImage>
        <PokeInfo>
          <div>
            <h1>{data.name}</h1>
            <span>{data.id}</span>
          </div>
          <div>
            <span></span>
          </div>
        </PokeInfo>
      </Wrapper>
    </Modal>
  );
};

export { PokeModal };
