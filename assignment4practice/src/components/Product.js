import { NavLink, useNavigate } from "react-router-dom"

const Product = ({ id, productname, quantity, price }) => {
    let navigate = useNavigate();
    let handleConfirmtClick = () => {
        let confirmResponse = window.confirm("Are you sure you want to view the product details ?")
        if (!confirmResponse) navigate("/products")
    }
    return (
        <tr>
            <td onClick={() => handleConfirmtClick()}><NavLink className={"isNotNav"} to={`/products/${productname}`}>{productname}</NavLink></td>
            <td>{quantity}</td>
            <td>Rs. {price}</td>
        </tr>
    )
}

export default Product;


