import './Button.module.css';

interface ButtonProps {
    text: string;
    action: (params?: object) => void;
}

export default function Button(props: ButtonProps){

    const {text, action} = props;


    const doAction = () => {
        action();
    }

    return(
        <button onClick={doAction}>{text}</button>
    )

}
