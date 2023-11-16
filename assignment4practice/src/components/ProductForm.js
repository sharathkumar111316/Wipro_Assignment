import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const ProductForm = ({ errors, touched, isSubmitting }) => {
    return (
        <Form>
            <div>
                <Field type="text" name="productname" placeholder=" Enter product Name"></Field>
                {touched.productname && errors.productname && <span style={{ color: "red" }}>{errors.productname}</span>}
            </div>
            <div>
                <Field type="number" name="quantity" placeholder="Enter Product Quantity"></Field>
                {touched.quantity && errors.quantity && <span style={{ color: "red" }}>{errors.quantity}</span>}
            </div>
            <div>
                <Field type="number" name="price" placeholder="Enter Product Price"></Field>
                {touched.price && errors.price && <span style={{ color: "red" }}>{errors.price}</span>}
            </div>
            <div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </div>
        </Form>
    )

}

const FormikProductForm = withFormik({
    mapPropsToValues({ productname, quantity, price }) {
        return {
            productname: productname || "",
            quantity: quantity || "",
            price: price || "",
        }
    },
    validationSchema: Yup.object().shape({
        productname: Yup.string().min(3, "Prouct name must be atleast 3 characters.").required("Product Name is Required."),
        quantity: Yup.number().min(1, "Quantity must be atleast 1.").required("Quantity is Required."),
        price: Yup.number().max(10000000, "Cannot sell product costlier then 1 Cr.").required("Product Price is Required.")
    }),
    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.onSubmit(values)
        setSubmitting(false);
        resetForm();
    }
})(ProductForm)


export default FormikProductForm;