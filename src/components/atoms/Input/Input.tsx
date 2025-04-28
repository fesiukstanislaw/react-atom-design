import {JSX} from "react";
import './Input.module.css';

interface InputProps {
    type: string;
    className?: string;

}

function Input(props: InputProps): JSX.Element {

    const {type, className} = props;

    return (
        <input type={type} className={className} />
    )

}

export default Input;
