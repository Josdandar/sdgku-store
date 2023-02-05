import "./QuantityPicker.css"
import { useState } from "react";

function QuantityPicker(){
    let [quantity, setQuantity] = useState(1);


    function decrease(){
        if(quantity === 1) return;
        let val = quantity - 1;
        setQuantity(val)
    }
    function increase(){
        let val = quantity + 1;
        setQuantity(val);
    }

    return(
        <div className="quantityPicker">
            <button disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;