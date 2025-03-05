import React, {useState} from "react";

export default function Component(){
    
    const [text, setText] = useState()
    const [update, setUpdated] = useState()

    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = () => {
        setUpdated(text)
    }

    return(
        <div>
            <input type="text" value={text} onChange={textOnChange} />
            <button onClick={buttonOnClick}>Actualizar</button> 
            <p>texto ingresado: {text}</p>
            <p>texto actualizado: {update} </p>

        </div>
    )
}