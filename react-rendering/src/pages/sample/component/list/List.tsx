import { useSelector } from "react-redux"
import { IndexState } from "../../../../store"

export const List = () => {
  console.log('in List');
  const { userData } = useSelector(({ data }: IndexState) => ({
    userData: data
  }));
  const userDataItem = userData.map((i, index) => {
    return <li key={`${i.name}${i.age}${index}`}>
      <span>{`name: ${i.name} / age: ${i.age}`}</span>
    </li>
  });
  return <ul>{userDataItem}</ul>
}