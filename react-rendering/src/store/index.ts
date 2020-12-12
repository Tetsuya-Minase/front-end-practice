import { AnyAction, createStore } from "redux";

type UserData = {
  readonly name: string;
  readonly age: number;
  readonly memo?: string;
}

type IndexState = {
  readonly key: string | undefined;
  readonly data: UserData[];
}
const initialState: IndexState = {
  key: undefined,
  data: []
};

const Actions = {
  ADD: 'add'
} as const;

export function addList(data: UserData) {
  return { type: Actions.ADD, payload: { data } };
}

type IndexActions = ReturnType<typeof addList>;


export function reducer(state: IndexState = initialState, action: IndexActions) {
  switch (action.type) {
    case Actions.ADD:
      return state;
    default:
      return state;
  }

}

export default createStore(
  reducer
);