const Product = props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{`${props.price} / ${props.currency}`}</p>
        </div>
    )
}

export default Product;