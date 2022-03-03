import { useState, useContext } from 'react';
import PermissionContext from '../../context/permission-context';

import styles from './ProductsForm.module.css';


const ProductsForm = props => {



    const [productNameValue, setProductNameValue] = useState('');
    const [productPriceValue, setProductPriceValue] = useState('');
    const [productCurrencyValue, setProductCurrencyValue] = useState('');
    const permissionsTo = useContext(PermissionContext)


    const nameHandler = e => {
        setProductNameValue(e.target.value)
    }

    const priceHandler = e => {
        setProductPriceValue(e.target.value)
    }

    const currencyHandler = e => {
        setProductCurrencyValue(e.target.value)
    }

    const addProductHandler = e => {
        e.preventDefault();

        const productObject = {
            name: productNameValue,
            price: productPriceValue,
            currency: productCurrencyValue
        }

        if (productNameValue.trim().length === 0 || productCurrencyValue.trim().length === 0 || productPriceValue === '') {
            return alert('Fill all the fields');
        } else if (Number(productPriceValue) < 0) {
            return alert('Enter a valid price (positive number)')
        } else {
            fetch('http://localhost:8000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productObject)
            })

            props.onAddedProduct();

            setProductNameValue('');
            setProductPriceValue('');
            setProductCurrencyValue('');
        }




    }

    return (
        <>
            {permissionsTo.CREATE && <form onSubmit={addProductHandler} className={styles.productForm}>
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" value={productNameValue} onChange={nameHandler} />

                <label htmlFor="productPrice">Price</label>
                <input type="number" id="productPrice" value={productPriceValue} onChange={priceHandler} />

                <label htmlFor="productCurrency">Currency</label>
                <input type="text" maxLength='3' id='productCurrency' value={productCurrencyValue} onChange={currencyHandler} />

                <button type="submit">Create</button>
            </form>}
        </>
    )
}

export default ProductsForm;