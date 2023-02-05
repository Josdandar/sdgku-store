import "./Product.css"
import QuantityPicker from "../QuantityPicker/QuantityPicker"

function Product(){
    return (
        <div className="product">
            <img src="https://picsum.photos/200/300"></img>
            <h5>Title goes here</h5>
            <QuantityPicker></QuantityPicker>

        </div>
    )
}

export default Product;
