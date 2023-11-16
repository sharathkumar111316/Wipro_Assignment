import React from "react";

export const ProductContext = React.createContext();

export class ProductProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    render() {
        return (<>
            <ProductContext.Provider value={{
                ...this.state,
                initProducts: (data) => this.setState({ products: data }),
            }}>
                {this.props.children}
            </ProductContext.Provider>
        </>)
    }
}

export const ProductConsumer = ProductContext.Consumer;