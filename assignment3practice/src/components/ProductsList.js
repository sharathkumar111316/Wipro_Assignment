import React from "react";
import Product from "./Product";
export default class ProductsList extends React.Component {
    render() {
        var productNodes = this.props.products.map((product) => (
            <Product
                key={product.ID}
                ID={product.ID}
                ProductName={product.ProductName}
                Quantity={product.Quantity}
                Price={product.Price}
            ></Product>
        ))
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>ProductName</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {productNodes}
            </table>
        )
    }
}