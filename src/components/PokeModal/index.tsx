import Modal from "react-modal";
import { PokeDetails } from "../../models";
import {
  Card,
  CloseIcon,
  PokeImage,
  PokeInfo,
  PokeStatus,
  Wrapper,
} from "./styles";

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
          <Card>
            <h1>{data.name}</h1>
            <span>{data.id}</span>
          </Card>
          <Card>
            <span>Abilities</span>
            <span>Socu - chuti - vuadera</span>
          </Card>

          <Card>
            <span>Health Points</span>
            <span>1 000 000</span>

            <span>Experience</span>
            <span>1 000 000</span>
          </Card>
          <PokeStatus>
            <Card>
              <span>Defense</span>
              <span>{data.stats[2].base_stat}</span>
            </Card>
            <Card>
              <span>Attack</span>
              <span>{data.stats[1].base_stat}</span>
            </Card>
            <Card>
              <span>Sp Attack</span>
              <span>{data.stats[3].base_stat}</span>
            </Card>
            <Card>
              <span>Sp Defense</span>
              <span>{data.stats[4].base_stat}</span>
            </Card>
          </PokeStatus>
        </PokeInfo>
      </Wrapper>
    </Modal>
  );
};

export { PokeModal };
