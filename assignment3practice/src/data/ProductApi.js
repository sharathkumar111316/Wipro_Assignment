import axios from "axios";

export default class ProductApi {
    static getAllProducts(cb) {
        axios.get("http://localhost:3001/products")
            .then(response => cb(response.data))
            .catch(err => { throw err })
    }
}