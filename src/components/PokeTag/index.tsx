import { PokeDetails } from "../../models";
import { Tag, Types } from "./styles";

interface IPokeTagProp {
  data: PokeDetails;
  classStyles?: "isInModal";
}

const PokeTag = ({ data, classStyles }: IPokeTagProp) => (
  <Types className={classStyles} tagQuantity={data?.types.length}>
    {data?.types.map((element) => (
      <Tag
        backgroundColor={element.type.name}
        key={element.type.name + Math.random() * (1000 - 0) + 0}
      >
        {element.type.name}
      </Tag>
    ))}
  </Types>
);

export { PokeTag };
