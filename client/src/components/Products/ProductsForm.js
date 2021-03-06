import { useState, useContext } from 'react';
import PermissionContext from '../../context/permission-context';
import Button from '../UI/Button';

import styles from './ProductsForm.module.css';


const ProductsForm = props => {

    const [productNameValue, setProductNameValue] = useState('');
    const [productPriceValue, setProductPriceValue] = useState('');
    const [productCurrencyValue, setProductCurrencyValue] = useState('');
    const permissions = useContext(PermissionContext)


    const nameHandler = e => {
        setProductNameValue(e.target.value)
    }

    const priceHandler = e => {
        setProductPriceValue(e.target.value)
    }

    const currencyHandler = e => {
        let letters = /^[A-Za-z]*$/;
        if (letters.test(e.target.value)) {
            return setProductCurrencyValue((e.target.value).toUpperCase())
        }

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
            {permissions.permissions.CREATE && <form onSubmit={addProductHandler} className={styles.productForm}>
                <div className={styles.productNameGrid1}>
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" id="productName" value={productNameValue} onChange={nameHandler} />
                </div>
                <div className={styles.productPriceGrid2}>
                    <label htmlFor="productPrice">Price</label>
                    <input type="number" id="productPrice" value={productPriceValue} onChange={priceHandler} />
                </div>
                <div className={styles.productCurrencyGrid3}>
                    <label htmlFor="productCurrency">Currency</label>
                    <input type="text" maxLength='3' id='productCurrency' value={productCurrencyValue} onChange={currencyHandler} />
                </div>
                <div className={styles.btnGrid4}>
                    <Button type="submit" >Create</Button>
                </div>
            </form>}
        </>
    )
}

export default ProductsForm;