import { useSelector } from "react-redux";
import { SampleState } from "../../store";

export const Main: React.VFC = () => {
  const {id, name, text} = useSelector((store: SampleState) => store);
    return  <dl>
    <dt>ID</dt>
    <dd>{id}</dd>
    <dt>Name</dt>
    <dd>{name}</dd>
    <dt>Text</dt>
    <dd>{text}</dd>
  </dl>
}