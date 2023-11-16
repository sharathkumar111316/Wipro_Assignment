import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
function ProductDetailsPage() {
    let { productname } = useParams();
    let navigate = useNavigate();
    return (<>
        <h3>Product Details :</h3>
        <h3>Product name : <span style={{ "fontWeight": "normal" }}>{productname}</span></h3>
        <NavLink className={"isNotNav"} to={"/products"} onClick={() => { navigate('/products') }}>back</NavLink>
    </>)
}

export default ProductDetailsPage;