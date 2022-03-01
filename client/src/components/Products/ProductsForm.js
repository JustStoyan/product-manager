import styles from './ProductsForm.module.css';


const ProductsForm = props => {

    
    return (
        <form className={styles.productForm}>
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" />

            <label htmlFor="productPrice">Price</label>
            <input type="number" id="productPrice" />

            <label htmlFor="productCurrency">Currency</label>
            <input type="text" maxLength='3' />

            <button type="submit">Create</button>
        </form>
    )
}

export default ProductsForm;