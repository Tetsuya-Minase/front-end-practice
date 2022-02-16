import { Store, createStore } from 'redux';

interface _SampleState {
    id: string; 
    name: string;
    text: string;
}
export type SampleState = Readonly<_SampleState>;
const initialState: SampleState = {
    id: 'id1',
    name: 'taro',
    text: 'hogehoge'
};
const reducer = (state: SampleState = initialState) => state;

export const store = createStore(reducer);