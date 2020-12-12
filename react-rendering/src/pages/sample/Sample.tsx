import { InputButton } from "./component/InputButton"
import { List } from "./component/list/List"

export const SamplePage = () => {
  console.log('in SamplePage');
  return <>
    <h1>テスト</h1>
    <InputButton />
    <List/>
  </>
};