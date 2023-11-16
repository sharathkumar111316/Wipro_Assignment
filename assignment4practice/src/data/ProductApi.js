import axios from "axios";

export default class ProductApi {
    static getAllProducts(cb) {
        axios.get("http://localhost:3004/products")
            .then(response => cb(response.data))
            .catch(err => { throw err })
    }
    static updateProducts(values) {
        axios.post("http://localhost:3004/products", values)
            .then(response => console.log(response.data))
            .catch(err => { throw err })
    }
}