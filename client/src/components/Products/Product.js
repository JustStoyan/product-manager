const Product = props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.currency}</td>
            <td>{props.actions}</td>
        </tr>
    )
}

export default Product;