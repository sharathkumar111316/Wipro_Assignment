import React from "react";
import ProductForm from "./ProductForm";
import ProductApi from "../data/ProductApi";

export default class About extends React.Component {

    handleSubmit(values) {
        ProductApi.updateProducts(values)
    }
    render() {
        return (
            <ProductForm onSubmit={values => this.handleSubmit(values)}></ProductForm>
        )
    }
}