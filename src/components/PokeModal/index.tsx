import Modal from "react-modal";
import { PokeDetails } from "../../models";
import { formatAbilitiesToArray } from "../../utils";
import { PokeTag } from "../PokeTag";
import {
  Card,
  CloseIcon,
  FakeProgress,
  PokeHeader,
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
        backgroundColor={data.types[0].type?.name}
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
        {/* PARAMO AQUI - Passar classe para dentro do poketag para ajustar o posicionamento relativo das tags na modal. */}
        <PokeTag data={data} classStyles="isInModal" />
        <PokeInfo>
          <PokeHeader>
            <h1>{data?.name}</h1>
            <span>{data?.id}</span>
          </PokeHeader>
          <Card>
            <span>Abilities</span>
            <span>{formatAbilitiesToArray(data?.abilities)}</span>
          </Card>

          <Card orientation="row" gap="35px">
            <div className="point-group">
              <span>Health Points</span>
              <span className="points">{data?.stats[0]?.base_stat}</span>
              <FakeProgress color="#70A83B" />
            </div>
            <div className="point-group">
              <span>Experience</span>
              <span className="points">{data?.base_experience}</span>
              <FakeProgress color="#F7C545" />
            </div>
          </Card>
          <PokeStatus>
            <Card hAlign="center">
              <span className="circle">{data?.stats[1]?.base_stat}</span>
              <span>Attack</span>
            </Card>
            <Card hAlign="center">
              <span className="circle">{data?.stats[2]?.base_stat}</span>
              <span>Defense</span>
            </Card>
            <Card hAlign="center">
              <span className="circle">{data?.stats[3]?.base_stat}</span>
              <span>Sp Attack</span>
            </Card>
            <Card hAlign="center">
              <span className="circle">{data?.stats[4]?.base_stat}</span>
              <span>Sp Defense</span>
            </Card>
          </PokeStatus>
        </PokeInfo>
      </Wrapper>
    </Modal>
  );
};

export { PokeModal };
