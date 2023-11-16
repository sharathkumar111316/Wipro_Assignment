import React from "react";
import ProductsList from "./ProductsList";
import ProductApi from "../data/ProductApi";
import { ProductContext } from "./ProductContext";

export default class AllProductsPage extends React.Component {

    static contextType = ProductContext;

    componentDidMount() {
        ProductApi.getAllProducts((data) => { this.context.initProducts(data) })
    }
    render() {
        return (
            <>
                <h1>Products list</h1>
                <ProductsList products={this.context.products}></ProductsList>
            </>
        )
    }
}

/*
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
            <>
                <h1>Products list</h1>
                <ProductsList products={this.state.products}></ProductsList>
            </>
        )
    }
}
*/