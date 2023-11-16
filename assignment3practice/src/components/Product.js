
export default function Product({ ID, ProductName, Quantity, Price }) {
    return (
        <tr>
            <td>{ID}</td>
            <td>{ProductName}</td>
            <td>{Quantity}</td>
            <td>{Price}</td>
        </tr>
    )
}


