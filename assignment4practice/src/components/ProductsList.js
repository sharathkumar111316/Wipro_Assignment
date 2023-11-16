import React from "react";
import Product from "./Product";
import { NavLink } from "react-router-dom";
export default class ProductsList extends React.Component {
    render() {
        var productNodes = this.props.products.map((product) => (
            <Product
                key={product.id}
                productname={product.productname}
                quantity={product.quantity}
                price={product.price}
            ></Product>
        ))
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>ProductName</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productNodes}
                    </tbody>
                </table>
                <NavLink className={"isNotNav"} to="/">Add Product</NavLink>
            </>
        )
    }
}