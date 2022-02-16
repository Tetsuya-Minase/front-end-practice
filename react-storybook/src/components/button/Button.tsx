export interface Props {
    /** テキスト */
    text: string;
    /** button type */
    type: 'primary' | 'warning' | 'alert' | 'default';
}

export const Button: React.VFC<Props> = ({text, type}) => {
    return <button type="button">{text}</button>
}