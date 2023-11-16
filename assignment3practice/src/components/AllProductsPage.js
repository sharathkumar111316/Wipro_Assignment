import React from "react";
import ProductsList from "./ProductsList";
import ProductApi from "../data/ProductApi";

export default class AllProductsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        ProductApi.getAllProducts(data => this.setState({ products: data }))
    }
    render() {
        return (
            <ProductsList products={this.state.products}></ProductsList>
        )
    }
}